var conf = require('../config.json');
var gulp = require('gulp');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');
var eslint = require('gulp-eslint');
var webpackConfig = require('../webpack.config');

gulp.task('js:build', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
  .pipe(eslint({configFile: './.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(gulpWebpack(webpackConfig, webpack))
  .pipe(gulp.dest(conf.base.build + conf.path.js));
});
