var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('style', function () {
  console.log('Mi primer task con Gulp');
});

gulp.task('style', function () {
  gulp.src('.src/css/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./build/css'));
});
