var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copy-images', function() {
    gulp.src(['src/front_end/assets/images/**/*.{jpg,png}'])
        .pipe(gulp.dest('./dist/images/'))
        .pipe(connect.reload());
});
