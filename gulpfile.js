'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('concatScripts', function() {
    gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
    ])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', function() {
    gulp.src('js/application.js')
        .pipe(uglify())
        .pipe(rename('application.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['wow'], function() {
    console.log('default task!');
});
