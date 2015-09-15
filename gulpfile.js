'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'background.js', '*.png'];
var xpiName = 'catgifs.xpi';

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'));
});
