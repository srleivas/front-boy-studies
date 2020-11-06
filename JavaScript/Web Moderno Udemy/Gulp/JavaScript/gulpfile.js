const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function main() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', e => console.log('error'))
    .pipe(concat('codeName.min.js'))
    .pipe(gulp.dest('Build'))

}

exports.default = series(main);