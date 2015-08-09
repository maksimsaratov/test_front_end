var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copy-html', function() {
    gulp.src(['src/front_end/*.html'])
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});
