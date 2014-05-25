module.exports = (grunt) ->

  require("load-grunt-tasks")(grunt)

  grunt.initConfig

    pkg: grunt.file.readJSON "package.json"

    sass:
      options:
        style: "compressed"
      style:
        src: "scss/main.scss"
        dest: "main.css"

    autoprefixer:
      style:
        files:
          "<%= sass.style.dest %>": "<%= sass.style.dest %>"

    uncss:
      dist:
        files:
          "<%= sass.style.dest %>": "_site/index.html"

    cssmin:
      dist:
        files: "<%= autoprefixer.style.files %>"

    concat:
      includedjs:
        files:
          "js/includes.js": ["_includes/*.js"]

    connect:
      server:
        options:
          port: 9000
          base: "./_site"

    shell:
      jekyll:
        command: 'jekyll build'
      getPlugin:
        command: 'git checkout master -- src/jquery.cssAnimateAuto.js'

    watch:
      livereload:
        options:
          livereload: true
          debounce: 2000
        files: [
          "index.html"
          "_includes/*.html"
          "main.css"
        ]
        tasks: [
          "shell:jekyll"
        ]
      style:
        files: ["scss/*.scss"]
        tasks: ["style"]
      js:
        files: ["_includes/*.js"]
        tasks: [
          "concat:includedjs"
          "shell:jekyll"
        ]

  grunt.registerTask "dev", [
    "shell:getPlugin"
    "connect"
    "watch"
  ]

  grunt.registerTask "style", [
    "sass:style"
    "autoprefixer:style"
  ]

  grunt.registerTask "build", [
    "style"
    "uncss:dist"
    "cssmin:dist"
    "shell:jekyll"
  ]