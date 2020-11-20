const { series, parallel } = require('gulp');
const gulp = require('gulp');
const app = require('./gulpTasks/app');
const { appHTML, appCss, appImg, appJs} = require('./gulpTasks/app');
const { depsCss, depsFonts } = require('./gulpTasks/deps');
const { server, trackFiles } = require('./gulpTasks/server');

module.exports.default = series(
  parallel(
    series(appHTML, appCss, appImg, appJs),
    series(depsCss, depsFonts)
  ),
  server, 
  trackFiles
);