module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'lib/jquery/jquery.js',
      'lib/jasmine-jquery/lib/jasmine-jquery.js',
      'lib/underscore/underscore.js',
      'src/intersector.js',
      'src/font-manager.js',
      'src/positioner.js',
      'src/word-cloud.js',
      'spec/**/*-spec.js',
      {
        pattern: 'spec/**/*.html',
        watched: true,
        served: true,
        included: false
      }
    ],
    exclude: [],
    reporters: ['spec', 'junit', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    singleRun: true,

    preprocessors: {
      'src/intersector.js': 'coverage',
      'src/positioner.js': 'coverage',
      'src/font-manager.js': 'coverage',
      'src/word-cloud.js': 'coverage'
    },

    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/'},
        {type: 'text-summary'},
        {type: 'text'},
        {type: 'cobertura'}
      ]
    }

  });
};
