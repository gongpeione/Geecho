// 引入 gulp及组件
var gulp     = require('gulp'),
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass     = require('gulp-ruby-sass'),          //sass
    cssnano  = require('gulp-cssnano'),    //css压缩
    jshint   = require('gulp-jshint'),           //js检查
    uglify   = require('gulp-uglify'),          //js压缩
    rename   = require('gulp-rename'),           //重命名
    concat   = require('gulp-concat'),          //合并文件
    clean    = require('gulp-clean'),             //清空文件夹
    //gulpWebpack  = require('webpack-stream'),
    webpack  = require('gulp-webpack'),
    wpConfig = require("./webpack.config.js");

// HTML处理
gulp.task('html', function() {

    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
});
// css处理
gulp.task('css', function () {

    sass('./src/css/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
});

// 图片处理
gulp.task('images', function(){

    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
})

// js处理
gulp.task('js', function () {
	
	gulp.src('./src/js/main.js')
		.pipe( webpack( require('./webpack.config.js') ) )
    	.pipe(gulp.dest('./dist/js'));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/img'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html', 'css', 'images','js');
});

//监听
gulp.task('watch',function(){

    // 监听html
    gulp.watch('./src/*.html', ['html']);

    // 监听css
    gulp.watch('./src/css/*.scss', ['css']);

    // 监听images
    gulp.watch('./src/img/**/*.*', ['images']);

    // 监听js
    gulp.watch('./src/js/**/*.js', ['js']);

});