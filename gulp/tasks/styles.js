/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
const config = require('../gulp.config');

gulp.task('styles', () => gulp.src(config.src.css.entry)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false,
  }))
  .pipe(concat('style.css'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cssnano({
    discardComments: {
      removeAll: true,
    },
  }))
  .pipe(gulp.dest(config.dest.css))
  .pipe(browserSync.stream()));
