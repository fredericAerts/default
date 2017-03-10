/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../gulp.config');

gulp.task('watch', () => {
  gulp.watch(config.src.css.all, ['styles']);
  gulp.watch(config.src.js.app, ['scripts', browserSync.reload]);
  gulp.watch([
    config.src.js.app,
    config.gulp.js.all,
  ], ['lint']);
  gulp.watch(config.src.img, ['images']);
  gulp.watch(config.src.fonts, ['fonts']);
});
