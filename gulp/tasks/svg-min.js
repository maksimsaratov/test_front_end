var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('svg-min', function() {
    return gulp.src(['./src/front_end/assets/images/svg/*.svg'])
        .pipe(svgmin())
        .pipe(gulp.dest('./src/front_end/assets/images/svgmin/'));
});
