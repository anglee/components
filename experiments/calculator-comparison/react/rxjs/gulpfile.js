var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
	browserify({
		entries: 'src/app.jsx',
		extensions: ['.jsx'],
		debug: true
	})
			.transform(babelify)
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['build'])
});

gulp.task('start', ['build', 'watch']);

gulp.task('default', ['start']);