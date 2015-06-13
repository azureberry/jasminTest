# Karma configuration
module.exports = (config) ->
  config.set
    basePath: ''
    port: 9876
    colors: true
    logLevel: config.LOG_INFO
    autoWatch: true
    singleRun: false

    frameworks: [ 'jasmine' ]

    files: [
      'src/html/*.html'
      'src/html/*.js'
      'spec/html/*.js'
      'spec/cats02/*.js'
    ]
    exclude: []

    preprocessors:
      'src/html/*.html': 'html2js'
      'spec/cats02/*.js': [ 'webpack' ]
      'src/**/*.js': [ 'coverage' ]

    reporters: [
      'spec'
      'coverage'
      #'progress'
      #'html'
    ]
    browsers: [
      'PhantomJS'
#      'Firefox'
#      'Chrome'
    ]

    coverageReporter:
      type: 'html'
      dir: 'build/coverage/'


    webpack: module: loaders: [ {
      test: /\.js$/
      exclude: /node_modules/
      loader: 'babel-loader'
      query:
        plugins: [ 'babel-plugin-rewire' ]
        optional: [ 'runtime' ]
    } ]


    plugins: [
      'karma-webpack'
      'karma-jasmine'
      'karma-chrome-launcher'
      'karma-firefox-launcher'
      'karma-phantomjs-launcher'
      'karma-spec-reporter'
      'karma-coverage'
      'karma-html2js-preprocessor'
      'karma-jasmine-html-reporter'
    ]
  return
