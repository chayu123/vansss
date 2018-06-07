var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task("copy-html",function(){
	gulp.src("home.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vansss"));
});


gulp.task("watch",function(){
	gulp.watch("home.html",["copy-html"]);
	gulp.watch("scss/home.scss",["sass"]);
	gulp.watch("js/*.js",["myjs"]);
	gulp.watch("img/*.{jpg,png,gif}",["imgs"]);
});

gulp.task("sass",function(){
	gulp.src("scss/home.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vansss\\css"));
});


gulp.task("myjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vansss\\js"));
});
gulp.task("imgs",function(){
	gulp.src("img/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vansss\\img"));
});