var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('svg-min', function() {
    return gulp.src(['./src/www/assets/images/svg/*.svg'])
        .pipe(svgmin())
        .pipe(gulp.dest('./src/www/assets/images/svgmin/'));
});
