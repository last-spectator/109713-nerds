'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require("gulp-spritesmith");
var gulpif = require("gulp-if");

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sprites', function () {
    return  gulp.src('./img/sprite/*.png')
                .pipe(spritesmith({
                    imgName: 'sprite.png',
                    styleName: 'sprite.scss',
                    imgPath: '../img/sprite.png',
                    algorithm: 'top-down',
                    padding: 40
                }))
                .pipe(gulpif('*.png', gulp.dest('./img/')))
                .pipe(gulpif('*.scss', gulp.dest('./sass/')));
});
