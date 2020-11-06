const gulp = require('gulp');
const { series, parallel } = require('gulp');
// const series = gulp.series;

const task01 = (callback) => {
  console.log('Task 1');
  return callback();
}

const task02 = (callback) => {
  console.log('Task 2');
  return callback();
}

function copy(callback) {
  // gulp.src(['FolderA/file01.txt', 'FolderA/file02.txt'])
  // Any file with txt extension Inside Folder A
  gulp.src('FolderA/**/*.txt')
  .pipe(gulp.dest('FolderB'));
  return callback();
}

const finalTask = (callback) => {
  console.log('FinalTask');
  return callback();
}
module.exports.default = series(
  parallel(task01, finalTask),
  copy,
  task02
  );