var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var base64 = require('gulp-base64');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('compile-style', function() {
    return gulp.src(['./src/www/assets/less/*.less'])
        .pipe(less())
        .pipe(base64({
            baseDir: './src/www/assets/',
            extensions: ['svg'],
            maxImageSize: 8*1024, // bytes
            debug: true
        }))
        .pipe(cssmin({
            rebase: false,
            keepBreaks: true,
            aggressiveMerging: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});
