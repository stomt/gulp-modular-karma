# gulp-modular-karma [![npm version](https://badge.fury.io/js/gulp-modular-karma.svg)](https://www.npmjs.com/package/gulp-modular-karma)

Modular extension to run unit tests in a [gulp-modular](https://github.com/ONE-LOGIC/gulp-modular) project.

## Installation

```
npm install gulp-modular-karma
bower install angular-mocks
```

## Karma configuration

Copy `default.karma.conf.js` in your project root and name it `karma.conf.js`.

## Integration in gulpfile

```javascript
var gulp = require('gulp');
var gulpModularKarma = require('gulp-modular-karma');

// optionally overwrite default configuration
var config = {

  //// task [`karma`] performs unit tests on project
  karma: {
  //  src : './karma.conf.js', // karma configuration file to use
  //  browsers: ['PhantomJS', 'Firefox', 'Chrome'] // all browser to run tests in (only for `test:all`)
  },
};
  
gulpModularKarma(gulp, config);
```

## Usage

Run `gulp karma` to execute the tests once.
Run `gulp karma:watch` to execute the tests whenever a file changes.
Run `gulp karma:all` to run the tests in all defined browers.

Run `gulp test`, `gulp test:watch` or `gulp test:all` to build the project before the related `karma` task is run.
