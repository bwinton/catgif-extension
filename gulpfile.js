'use strict';

var gulp = require('gulp');

var files = ['manifest.json', 'background.js'];
var xpiName = 'catgifs.xpi';

gulp.task('default', function () {
  console.log(files, xpiName)
});
