var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var clean = require('gulp-clean');

gulp.task('svg-min', ['svg-min-copy'], function() {
    return gulp.src(['./src/front_end/assets/images/svgmin/'])
        .pipe(clean({force: true}));
});
gulp.task('svg-min-copy', ['svg-min-maker'], function() {
    return gulp.src(['./src/front_end/assets/images/svgmin/*.svg'])
        .pipe(gulp.dest('./src/front_end/assets/images/svg/'));
});
gulp.task('svg-min-maker', function() {
    return gulp.src(['./src/front_end/assets/images/svg/*.svg'])
        .pipe(svgmin())
        .pipe(gulp.dest('./src/front_end/assets/images/svgmin/'));
});
