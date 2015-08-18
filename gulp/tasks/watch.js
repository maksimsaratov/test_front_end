var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./src/front_end/assets/less/*.less', ['compile-style']);
    gulp.watch('./src/front_end/app/**/*.js', ['compile-js']);
    gulp.watch('./src/front_end/*.html', ['copy-html']);
    gulp.watch('./src/front_end/assets/images/**/*.{png,jpg}', ['copy-images']);
    gulp.watch('./src/front_end/assets/images/svg/*.svg', ['compile-style']);
});
