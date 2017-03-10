/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './web',
    },
  });
});
