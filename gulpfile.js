/// <reference path="typings/tsd.d.ts"/>
"use strict";
//Import Libraries.
const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
var rm = require('gulp-rm');
//Transpile.
gulp.task('transpile', function () {
    return gulp.src('scripts/**/*ts').
        pipe(ts({
        target: 'es6',
        typescript: require('typescript')
    })).pipe(gulp.dest('builds'));
});
//Start the server.
gulp.task('nodemon', function () {
    nodemon({
        script: 'builds/server.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});
//Remove Extra Typescript Files.
gulp.task('remove', function () {
    return gulp.src('scripts/**/*js', { read: false }).pipe(rm());
});
//Default task.
gulp.task('watch', function () {
    gulp.watch(['scripts/**/*ts'], ['remove', 'transpile', 'nodemon']);
});
gulp.task('default', ['watch']);
