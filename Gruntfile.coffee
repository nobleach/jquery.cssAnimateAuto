module.exports = (grunt) ->
  grunt.initConfig

    pkg: grunt.file.readJSON "package.json"

    sass:
      options:
        lineNumbers: true
      style:
        files:
          "style/css/main.css": "style/scss/main.scss"

    autoprefixer:
      style:
        files:
          "style/css/main.css": "style/css/main.css"

    cssmin:
      dist:
        files:
          "style/css/main.css": "style/css/main.css"

    uglify:
      dist:
        files: "js/compiled.min.js": [
          "bower_components/jquery/jquery.js"
          "jquery.cssAnimateAuto.js"
          "js/main.js"
        ]

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
          "style/css/*.css"
          "js/*.js"
        ]
      style:
        files: ["style/scss/*.scss"]
        tasks: ["style"]

  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-cssmin"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-autoprefixer"

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