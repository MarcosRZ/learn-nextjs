/* eslint-disable */

var gulp = require('gulp');
const babel = require('gulp-babel');
var run = require('gulp-run');
var sftp = require('gulp-sftp');
var del = require('del');
var runSequence = require('run-sequence');

const USER = 'root'
const SERVER_NAME = 'marcosrgz.com';
const TARGET_PATH = '/root/apps/app1';

const transpile = ['server.js', 'routing/*.js', 'config/*.js'];
const copy = ['.next/**', 'package.json', 'routing/routes.json', 'static/css','static/fonts', 'static/images', 'static/js'];

// Full build process execution.
// Tasks (in order): clean -> next-build -> transpile -> copy
// Once this task is completed, there is an executable next project inside dist/
gulp.task('build', function(done){
  runSequence('clean', 'build:next','build:css', 'transpile', 'copy', function(){
    done();
  })
});

// Deletes all dist/ contents
gulp.task('clean', () => {
  del('dist/*');
  del('dist/.*');
});

// builds .next folder (next build)
gulp.task('build:next', () => {
  return run('npm run build').exec();
});

// builds css from sass
gulp.task('build:css', () => {
  return run('npm run buildCSS').exec();
});

// Copies files listed in 'copy' array. (See the top of this file)
gulp.task('copy', () => {
  gulp
  .src(copy, {base: '.'})
  .pipe(gulp.dest('dist'));
});

// Transpiles files listed in 'copy' array. (See the top of this file)
gulp.task('transpile', () => {
   gulp
   .src(transpile, {base: '.'})
   .pipe(babel())
   .pipe(gulp.dest('dist'))
});

// ---------- TEST ----------

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