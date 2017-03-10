/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const del = require('del');
const config = require('../gulp.config');

// clean web folder
gulp.task('clean', () => del([
  `${config.dest.css}/**`,
  `${config.dest.js}/**`,
  `${config.dest.img}/**`,
  `${config.dest.fonts}/**`,
]));
