const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');


gulp.task('scripts', function () {
  return gulp.src('js/**/*.js')
    .pipe(minify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('scripts'));
