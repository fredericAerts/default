/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const config = require('../gulp.config');

gulp.task('moveTemplates', () => gulp.src(config.src.templates.all)
  .pipe(gulp.dest(config.dest.templates)));
