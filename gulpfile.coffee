gulp = require 'gulp'
webpack = require 'gulp-webpack-build'
karma = require('karma').server
WEBPACK_CONFIG = __dirname + '/webpack.conf.coffee'
KARMA_CONFIG = __dirname + '/karma.conf.coffee'

gulp.task 'webpack-build', ->
  gulp.src WEBPACK_CONFIG
      .pipe webpack.run()
      .pipe gulp.dest('')

gulp.task 'karma-test', ->
  karma.start {configFile: KARMA_CONFIG}