// 引入 gulp及组件
var gulp     = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass     = require('gulp-ruby-sass'),          //sass
    cssnano  = require('gulp-cssnano'),    //css压缩
    jshint   = require('gulp-jshint'),           //js检查
    uglify   = require('gulp-uglify'),          //js压缩
    rename   = require('gulp-rename'),           //重命名
    concat   = require('gulp-concat'),          //合并文件
    clean    = require('gulp-clean'),             //清空文件夹
    tinylr   = require('tiny-lr'),               //livereload
    webpack  = require('webpack-stream'),
    wpConfig = require("./webpack.config.js");
    server   = tinylr(),
    port     = 35729,

    livereload = require('gulp-livereload');   //livereload

// HTML处理
gulp.task('html', function() {
    var htmlSrc = './src/*.html',
        htmlDst = './dist/';

    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst))
});

// 样式处理
gulp.task('css', function () {
    var cssSrc = './src/scss/*.scss',
        cssDst = './dist/css';

    gulp.src(cssSrc)
        .pipe(sass({ style: 'expanded'}))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst));
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './dist/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
})

// js处理
gulp.task('js', function () {
	
	var myConfig = Object.create(wpConfig);
	// run webpack
	webpack(
		// configuration
		myConfig
		, function(err, stats) {
		// if(err) throw new gutil.PluginError("webpack", err);
		// gutil.log("[webpack]", stats.toString({
		//	 // output options
		// }));
		callback();
	});
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/images'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','css','images','js');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    // 监听html
    gulp.watch('./src/*.html', function(event){
        gulp.run('html');
    })

    // 监听css
    gulp.watch('./src/scss/*.scss', function(){
        gulp.run('css');
    });

    // 监听images
    gulp.watch('./src/images/**/*', function(){
        gulp.run('images');
    });

    // 监听js
    gulp.watch('./src/js/**/*.js', function(){
        gulp.run('js');
    });
    
});