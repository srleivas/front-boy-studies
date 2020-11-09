const gulp = require('gulp');
const { series, parallel } = require('gulp');

function main() {
  return gulp.src('FolderA/**/*.txt')
    .pipe(gulp.dest('FolderB'))
}

exports.default = series(main);