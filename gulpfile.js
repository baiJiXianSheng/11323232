// require请求本地安装的gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// 创建一个任务（编译sass的任务）
// gulp.task()
gulp.task('sass',function(){
	// console.log('编译sass文件')
	return gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

// 监听编译（sass文件有修改就直接编译）
gulp.task('watchSass',function(){
	gulp.watch('assets/sass/**/*.scss',['sass']);
})

