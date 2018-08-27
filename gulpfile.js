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
const copy = ['.next/**', 'package.json', 'routing/routes.json', 'static/**'];

gulp.task('default', function() {
  // place code for your default task here
  console.log('Hello gulp!');
})


gulp.task('build', function(done){
  console.log('Building...')
  runSequence('clean', 'next-build', 'transpile', 'copy', function(){
    console.log('DONE!');
    done();
  })
});

// Deletes all dist/ contents
gulp.task('clean', () => {
  return del('dist/*/**');
});

// builds .next folder (next build)
gulp.task('next-build', () => {
  return run('npm run build').exec();
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