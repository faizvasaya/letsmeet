
'use strict';
//load the plugins using Node.js and its require function:
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


// did some refactoring and created variables to hold file paths.
var jsSources = ['app/public/assets/js/*.js'],
    sassSources = ['app/public/assets/scss/styles.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';

gulp.task('log', function() {
  gutil.log('== My First Task ==')
});


gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest(outputDir))
});


// In this task minify all the JavaScript files using gulp-uglify plug-in, and then merge them using gulp-concat
gulp.task('sass', function () {
  return gulp.src('app/public/assets/scss/styles.scss')
    //compile synchronously,
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('app/public/assets/css'));
});
 


gulp.task('js', function() {
  gulp.src('app/public/assets/js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});


// watch method takes as arguments: source to be watched, and a task to be triggered after change.
gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSources, ['html']);
});


//Created a task which will launch a server with some options: we set root of our server to the root of the project, and value of livereload to true. 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});


// Created a new html task so we can watch for the changes in HTML files which we then pipe to reload(), and made the task part of the watch task.
// Added .pipe(connect.reload()) at the end of js and sass tasks so that the server reloads every time they execute.
gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});


// Made a new default task that will first do all the processing, create a server and keep a watch
gulp.task('default', ['html', 'js', 'sass', 'connect', 'watch']);


