/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const config = require('../gulp.config');

gulp.task('fonts', () => gulp.src(config.src.fonts)
  .pipe(gulp.dest(config.dest.fonts)));
