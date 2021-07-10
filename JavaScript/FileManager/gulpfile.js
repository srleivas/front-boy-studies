const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const { series } = require('gulp');
const gulp = require('gulp');

function main() {
  return gulp.src('src/**/*js', '!src/empty/*.js')
    .pipe(babel({
      plugins: ["transform-remove-strict-mode"],
      comments: false,
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('fileManager.min.js'))
    .pipe(gulp.dest('Build'))
}

module.exports.default = series(main)