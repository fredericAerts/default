/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../gulp.config');

gulp.task('images', () => gulp.src(config.src.img)
.pipe(imagemin({
  optimizationLevel: 5,
  progressive: true,
  interlaced: true,
  svgoPlugins: [{
    removeViewBox: false,
  }],
}))
.pipe(gulp.dest(config.dest.img)));
