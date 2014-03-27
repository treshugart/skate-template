module.exports = {
  all: {
    options: {
      browsers: ['PhantomJS'],
      files: [
        'src/skate-template.js',
        'test/skate-template.js'
      ],
      frameworks: ['mocha', 'chai'],
      singleRun: true
    }
  }
};
