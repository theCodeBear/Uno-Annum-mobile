var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    copy = require('gulp-copy'),
    del = require('del'),
    inject = require('gulp-inject');

var paths = {
  sass: ['./src/scss/**/*.scss'],
  js: ['./src/**/*.js'],
  html: ['./src/**/**.html'],
  all: ['./src/scss/**/*.scss', './src/**/*.js', './src/**/**.html']
};

gulp.task('default', ['inject']);

gulp.task('sass', ['clean-css'], function(done) {
  gulp.src(paths.sass)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./www/css/'))
    // .pipe(minifyCss({
      // keepSpecialComments: 0
    // }))
    // .pipe(rename({ extname: '.min.css' }))
    // .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('jshint', ['babel'], function() {
  gulp.src(['./www/**/*.js', '!./www/lib', '!./www/lib/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('babel', ['clean-js'], function() {
  gulp.src(paths.js)
    .pipe(babel())
    .pipe(gulp.dest('./www'));
});

gulp.task('copyHtmlImg', ['clean-html'], function() {
  return gulp.src(['./src/**/*.html', './src/img', './src/img/**/*'])
    .pipe(copy('./www', { prefix: 1 }));
});

gulp.task('clean-js', function(cb) {
  del(['./www/**/*.js', '!./www/lib', '!./www/lib/**/*.js'], cb);
});

gulp.task('clean-html', function(cb) {
  del(['./www/**/*.html', '!./www/lib', '!./www/lib/**/*.html'], cb);
});

gulp.task('clean-css', function(cb) {
  del(['./www/css/**/*.css', '!./www/css'], cb);
});

gulp.task('inject', ['sass', 'jshint', 'copyHtmlImg'], function() {
  return gulp.src('./www/index.html')
    .pipe(inject(
      gulp.src(['./www/**/*.js', '!./www/lib/**/*.js', './www/css/**/*.css'], {read: false}),
      {relative: true}
    ))
    .pipe(gulp.dest('./www'));
});

gulp.task('watch', ['inject'], function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['jshint']);
  gulp.watch(paths.html, ['copyHtmlImg']);
  gulp.watch(paths.all, ['inject']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
