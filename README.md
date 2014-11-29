gulp-strip-ng-log
=================

Gulp plugin to strip calls to AngularJS's $log functions.

Install
=======
```npm install --save gulp-strip-ng-log```

Usage
=====
```
var gulp = require('gulp');
var stripNgLog = require('gulp-strip-ng-log');

gulp.task('stripLogging', function() {
    return gulp.src('app/app.js')
        .pipe(stripNgLog())
        .pipe(gulp.dest('build'));
});
```
or with creation of a sourcemap:
```
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var stripNgLog = require('gulp-strip-ng-log');

gulp.task('stripLogging', function() {
    return gulp.src('app/app.js')
        .pipe(sourcemaps.init())
        .pipe(stripNgLog())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});
```


License
=======
Apache 2.0 License
&copy; Nicholas Daley
