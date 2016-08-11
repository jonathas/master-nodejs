var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('default', function() {
    console.log('gulp gulp gulp');
});

gulp.task('compile:js', function() {
    var bundle = browserify('./src/js/main.js').bundle();
    bundle
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('compile:css', function() {
    gulp.src(['./src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./public/assets/css'));
});

// This array as the 2nd parameter means the tasks I want my task to depend on
gulp.task('watch', ['compile:js', 'compile:css'], function() {
    gulp.watch(['./src/js/**/*.js'],['compile:js']);
    gulp.watch(['./src/scss/**/*.scss'], ['compile:css']);
});
