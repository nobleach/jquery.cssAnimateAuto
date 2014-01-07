module.exports = (grunt) ->
  grunt.initConfig

    pkg: grunt.file.readJSON "package.json"

    sass:
      options:
        style: "compressed"
      style:
        files:
          "main.css": "scss/main.scss"

    autoprefixer:
      style:
        files:
          "main.css": "main.css"

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
        files: [
          "index.html"
          "_includes/*"
        ]
        tasks: [
          "shell:jekyll"
        ]
      style:
        files: ["scss/*.scss"]
        tasks: ["style"]

  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-autoprefixer"
  grunt.loadNpmTasks "grunt-shell"

  grunt.registerTask "dev", [
    "shell:getPlugin"
    "connect"
    "watch"
  ]

  grunt.registerTask "style", [
    "sass:style"
    "autoprefixer:style"
  ]