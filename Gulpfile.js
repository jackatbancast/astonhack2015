'use strict';
 
var gulp   = require('gulp'),
    less   = require('gulp-less'),
    gspawn = require('gulp-nodemon'),
    path   = require('path');

gulp.task('css', function () {
    gulp.src('./assets/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'assets', 'less')]
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('css:watch', ['css'], function () {
    gulp.watch('./assets/less/*.less', ['css']);
});


gulp.task('server:watch', function () {
    gspawn({
        script: 'main.py',
        execMap: {py: 'python2'},
        ext: 'py jinja conf'
    });
});

gulp.task('default', ['css','server:watch', 'css:watch']);
