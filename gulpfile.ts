/// <reference path="typings/tsd.d.ts"/>

//Import Libraries.
import gulp = require('gulp');
import ts = require('gulp-typescript');
import nodemon = require('gulp-nodemon');
import uglify = require('gulp-uglify');
var rm = require('gulp-rm');

//Transpile.
gulp.task('transpile',function(){
    return gulp.src('scripts/**/*ts').
           pipe(ts({
               target:'es6',
               typescript:require('typescript')
           })).pipe(gulp.dest('builds'))
})

//Start the server.
gulp.task('nodemon',function(){
    nodemon({
        script:'builds/server.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    })
})

//Remove Extra Typescript Files.
gulp.task('remove',function(){
    return gulp.src('scripts/**/*js',{read:false}).pipe(rm())
})

//Default task.
gulp.task('watch',function(){
    gulp.watch(['scripts/**/*ts'],['remove','transpile','nodemon']);
})

gulp.task('default',['watch']);