module.exports = function(config) {
    config.set({

      // base path, that will be used to resolve files and exclude
      basePath: '',
  
      frameworks: ['jasmine', 'dojo', 'sinon'],
  
      // list of files / patterns to load in the browser
      files: [
        'spec/main.js',
  
        // all the sources, tests
        {pattern: 'widgets/**/*', included: false},
        {pattern: 'spec/*.js', included: false}
      ],
      preprocessors: {
          'widgets/**/*.js': ['babel']
      },
  
      // test results reporter to use
      // possible values: dots || progress
      reporters: [
        'dots'
        // uncomment the following line for code coverage
        // , 'coverage'
      ],
  
  
      // web server port
      port: 9876,
  
      // proxy for cross domain requests
      proxies:  {
      },
  
  
      // cli runner port
      runnerPort: 9100,
  
  
      // enable / disable colors in the output (reporters and logs)
      colors: true,
  
  
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
      // - Safari
      // - PhantomJS
      // NOTE: you may need to first set it's path in an environment vairable, for example:
      // set FIREFOX_BIN="c:\Program Files (x86)\Mozilla Firefox\firefox.exe"
      // see: http://karma-runner.github.io/0.10/config/browsers.html
      browsers: [
        'ChromeHeadless'
        // add the name (from above) for each additional
        // browser you want to test below
        // , 'Firefox'
      ],
  
  
      // uncomment the following for coverage options
      // see: https://github.com/karma-runner/karma-coverage#options
      // coverageReporter: {
      //   type : 'text',
      //   dir: 'coverage/'
      // },
  
  
      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: true
    });
  };