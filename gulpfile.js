'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const MODE = process.env.NODE_ENV || 'development'
const isProd = MODE === 'production'

const PATHS = {
  sassSrc: './client/app.scss',
  sassDest: './build/client',
  assetsSrc: [
    './client/*.html',
    './client/*.ico',
    './client/**/*.png',
  ],
  assetsDest: './build/client',
}

gulp.task('sass', () => (
  gulp.src(PATHS.sassSrc)
      .pipe(sourcemaps.init())
      .pipe(sass(isProd ? {} : { outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(PATHS.sassDest))
))

gulp.task('sass:watch', () => {
  gulp.watch(PATHS.sassSrc, ['sass'])
})

gulp.task('copy', () => (
  gulp.src(PATHS.assetsSrc)
      .pipe(gulp.dest(PATHS.assetsDest))
))

gulp.task('watch', ['copy', 'sass', 'sass:watch'])
gulp.task('build', ['copy', 'sass'])

