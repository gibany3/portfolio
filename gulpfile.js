var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('scss/style.scss')
        .pipe(autoprefixer({browsers: ['> 1%', 'last 2 version', 'android 4']}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["*.html" ,"css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});