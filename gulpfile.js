var gulp=require('gulp');

gulp.task('mytask', function(){
	console.log('Hello! I am task!');
});

// var gulp = require('gulp'),
//     uglify = require('gulp-uglify');
// ...
// // Gulp Uglify
// gulp.task('gulp-uglify', function(){
//   gulp.src('js/*.js')	//прописываем директорию, содержимое которой gulp должен отслеживать
//   .pipe(uglify())		// строка получает содержимое директории js и обрабатывает с помощью плагина uglify
//   .pipe(gulp.dest('build/js')) //сюда передается результат обработки и сохраняется по пути build/js
// });