'use strict';
var gulp = require('gulp');
var strip = require('../index');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('without-sourcemaps', function() {
     return gulp.src(['./example.js'])
        .pipe(strip())
        .pipe(gulp.dest('build'));
});
gulp.task('with-input-sourcemap', function() {
    return gulp.src(['./example.js'])
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(strip())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});
gulp.task('without-input-sourcemap', function() {
    return gulp.src(['./example.js'])
        .pipe(sourcemaps.init())
        .pipe(strip())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});
gulp.task('default', ['with-input-sourcemap']);
