/* eslint-disable */

var gulp = require('gulp');
const babel = require('gulp-babel');
var run = require('gulp-run');
var sftp = require('gulp-sftp');

const USER = 'root'
const SERVER_NAME = 'marcosrgz.com';
const TARGET_PATH = '/root/apps/app1';

const transpile = ['server.js', 'routing/*.js', 'config/*.js'];
const copy = ['.next/**', 'package.json'];

gulp.task('default', function() {
  // place code for your default task here
  console.log('Hello gulp!');
});

gulp.task('copy', () => {
  gulp
    .src(copy, {base: '.'})
    .pipe(gulp.dest('dist'));
});

gulp.task('transpile', () => {
   gulp
   .src(transpile, {base: '.'})
   .pipe(babel())
   .pipe(gulp.dest('dist'))
});

gulp.task('upload', () => {
  run(`scp -r dist/ ${USER}@${SERVER_NAME}:${TARGET_PATH}`);
});

gulp.task('deploy', function() {
  gulp.src('dist/**')
    .pipe(sftp({
      host: SERVER_NAME,
      user: USER,
      remotePath: TARGET_PATH,
    }));
});