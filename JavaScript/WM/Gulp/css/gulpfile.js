const { series, parallel } = require('gulp');
const gulp = require('gulp');
const uglify = require('gulp-uglifycss');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');

function main() {
  return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "uglyComments": false }))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function indexToBuild() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = series(
  parallel(main, indexToBuild)
  )