var
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssmin'),
  uglyfly = require('gulp-uglyfly');

gulp.task('connect', function () {
  return connect.server({
    port: 8080,
    livereload: true,
    root: './'
  });
});

gulp.task('style', function () {
  return gulp.src('src/style/default.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/min'))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  return gulp.src(['src/index.js'])
    .pipe(uglyfly())
    .pipe(gulp.dest('./dist/min'))
    .pipe(connect.reload());
});



gulp.task('watch_js', function () {
  return gulp.watch(['src/index.js'], ['js']);
});

gulp.task('watch_less', function () {
  return gulp.watch(['src/style/default.less'], ['style']);
});


gulp.task('watch', ['watch_js', 'watch_less']);
gulp.task('build', ['style', 'js']);
gulp.task('default', ['build', 'connect', 'watch']);