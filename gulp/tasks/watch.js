var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./src/front_end/assets/less/*.less', ['compile-style']);
    gulp.watch('./src/front_end/*.html', ['copy-html']);
    gulp.watch('./src/front_end/assets/images/**/*', ['copy-images']);
});
