// Karma configuration

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // vendor
      'dist/js/vendor*.js',
      // test dependency
      'bower_components/angular-mocks/angular-mocks.js',

      // app, templates and config
      'dist/js/scripts*.js',

      // updated app files and tests
      'app/components/app.js',
      'app/components/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9002,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,


    // Report Test Results
    reporters: ['progress', 'junit', 'coverage'],

    // the default configuration
    junitReporter: {
      outputDir: 'coverage/unit/',
      outputFile: 'coverage/unit/unit-results.xml',
      suite: ''
    },

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)

      'app/components/**/!(test*)/!(*test|*mock).js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      reporters:[
        {
          type: 'html',
          dir:'coverage/unit/'
        },
        {
          type : 'cobertura',
          dir : 'coverage/unit/',
          file : 'coverage-results.xml'
        }
      ]
    }
  });
};
