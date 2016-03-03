'use strict';

var Server = require('karma').Server;
var runSequence = require('run-sequence');

module.exports = function(gulp, config) {

  var configFile = config.karma.src || './karma.conf.js';
  var browsers = config.karma.browsers || ['PhantomJS', 'Firefox', 'Chrome'];

  gulp.task('karma', function (done) {
    new Server({
      configFile: configFile,
      singleRun: true
    }, done()).start();
  });

  gulp.task('karma:watch', function (done) {
    new Server({
      configFile: configFile,
      singleRun: false,
      autoWatch: true
    }, done()).start();
  });

  gulp.task('karma:all', function (done) {
    new Server({
      configFile: configFile,
      browsers: browsers,
      singleRun: true
    }, done()).start();
  });

  gulp.task('test', function () {
    runSequence('build', 'karma');
  });

  gulp.task('test:all', function () {
    runSequence('build', 'karma:all');
  });

  gulp.task('test:watch', function () {
    runSequence('build', 'karma:watch');
  });

};
