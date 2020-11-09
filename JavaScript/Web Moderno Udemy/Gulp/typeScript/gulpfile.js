const { series } = require('gulp');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function main() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('Build'))
}

exports.default = series(main);