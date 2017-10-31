var gulp = require('gulp');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var rename = require('gulp-rename');

var sass = require('gulp-sass');

// 合并js文件
gulp.task('concatJS',function(){
	gulp.src('./src/')
		// 合并文件
		.pipe(concat(''))
		// 输出
		.pipe(gulp.dest(''))
		// 压缩
		.pipe(uglify({
			compress:true
		}))
		// 重命名
		.pipe(rename({
			suffix:'.min'
		}))
		// 输出压缩
		.pipe(gulp.dest(''))
})

// 编译sass文件
gulp.task('compileSass',function(){
	// 找到sass文件,得到文档流
	gulp.src('./src/sass/*.scss')
		// pipe管道添加sass方法
		.pipe(sass({
			// 输出格式
			outputStyle:'expanded'
		}))
		// 错误信息处理
		.on('error',sass.logError)
		// 输出
		.pipe(gulp.dest('./src/css/'))
})

// 监听sass文件改动
gulp.task('watchSass',function(){
	// 监听sass文件修改，直接编译任务生成文件
	gulp.watch('./src/sass/*.scss',['compileSass'])
})




// 引入browser-sync
/*var browserSync = require('browser-sync');

// 使用
gulp.task('server',function(){
	browserSync({
		// 启动服务器
		server:{
			baseDir:'./src/'
		},

		// 监听文件修改，自动刷新页面
		files:['./src/*.html','[./src/css/*.css]']

		gulp.watch()
	})
})*/