module.exports = (grunt) ->
  grunt.initConfig

    pkg: grunt.file.readJSON "package.json"

    sass:
      options:
        lineNumbers: true
      style:
        files:
          "dist/main.css": "scss/main.scss"

    autoprefixer:
      style:
        files:
          "dist/main.css": "dist/main.css"

    cssmin:
      dist:
        files:
          "dist/main.css": "dist/main.css"

    uglify:
      dist:
        files: "dist/compiled.min.js": [
          "bower_components/jquery/jquery.js"
          "jquery.cssAnimateAuto.js"
          "js/main.js"
        ]

    shell:
      jekyll:
        command: 'jekyll build'

    connect:
      server:
        options:
          port: 9000
          base: "./"

    watch:
      livereload:
        options:
          livereload: true
        files: [
          "index.html"
          "dist/*.css"
          "js/*.js"
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
  grunt.loadNpmTasks "grunt-contrib-cssmin"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-autoprefixer"
  grunt.loadNpmTasks "grunt-shell"

  grunt.registerTask "dev", [
    "connect"
    "watch"
  ]

  grunt.registerTask "style", [
    "sass:style"
    "autoprefixer:style"
  ]

  grunt.registerTask "build", [
    "style"
    "cssmin:dist"
    "uglify:dist"
  ]