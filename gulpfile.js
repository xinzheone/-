var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var htmlmin =require('gulp-htmlmin')
gulp.task('test',function(){
    // console.log(123)
    gulp.src(['./js/less.js','./js/template.js'])
        .pipe(concat('lll.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})
gulp.task("style",function(){
    gulp.src(['./*.css'])
        .pipe(concat('222.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'))
})
gulp.task("html",function(){
    gulp.src(['./01.html'])
        .pipe(htmlmin({collapseWhitespace:true,removeComments:true,minifyJS:true}))
        // .pipe(cssnano())
        .pipe(gulp.dest('dist'))
})
gulp.task('my',function(){
    gulp.run('style')
    gulp.watch(['./*.css'],['style'])
})