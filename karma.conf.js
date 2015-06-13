// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    files: [
      'src/html/*.html',
      'src/html/*.js',
      'spec/html/*.js',
      'spec/cats02/*.js'
    ],

    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    //  https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/html/*.html': 'html2js',
        'spec/cats02/*.js': ['webpack'],
        'src/**/*.js': ['coverage']
    },

    // test results reporter to use
    // : https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
//      'progress'
      'spec',
      'coverage'
//      'html'
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // start these browsers
    // : https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
//    'Firefox',
//    'Chrome'
      'PhantomJS'
    ],

    singleRun: false,

    coverageReporter: {
      type : 'html',
      dir : 'build/coverage/'
    },

    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            plugins:['babel-plugin-rewire'],
            optional: ['runtime']
          }
        }]
      }
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-html2js-preprocessor',
      'karma-jasmine-html-reporter'
    ]
  });
};
