let gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    server = require('browser-sync').create();

/* Для sass */
gulp.task('compile-sass', function () {
  gulp.src('./website/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('./website/css/'))
    .pipe(server.stream())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('server', function () {
    server.init({
        server: './website/'
    });
    gulp.watch('./website/sass/*.scss', gulp.parallel('compile-sass'));
    gulp.watch('./website/*.html').on('change', server.reload);
    gulp.watch('./website/sass/*.scss').on('change', server.reload);
});

/* Task to watch less changes */
gulp.task('watch-sass', function () {
  gulp.watch('./website/sass/**/*.scss', gulp.parallel('compile-sass'));
});

/* Task when running `gulp` from terminal */
gulp.task('default', gulp.parallel('watch-sass', 'server'));

gulp.task('images', function () {
  return gulp.src('./img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest('./website/img'));
});

gulp.task('webp', function () {
  return gulp.src('./website/img/**/*.{png,jpg}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('./website/img'));
});
