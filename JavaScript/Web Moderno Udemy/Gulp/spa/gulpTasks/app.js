const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const ulgifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function appHTML(callback) { 
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ "collapseWhitespace": true }))
    .pipe(gulp.dest('build'))
} 

function appCss() { 
  return gulp.src('src/assets/sass/index.scss')
    .pipe(sass())
    .pipe(ulgifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

function appJs() { 
  return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({
      "comments": false,
      "presets": ["env"]
    }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest('build/assets/js'))
}

function appImg() { 
  return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest("build/assets/imgs"))
}

gulp.task('appHTML', appHTML);
gulp.task('appCss', appCss);
gulp.task('appJs', appJs);
gulp.task('appImg', appImg);

module.exports = {
  appHTML,
  appCss,
  appImg,
  appJs
}