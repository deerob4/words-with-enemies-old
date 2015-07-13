var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
	scripts: ['components/**/*.js', 'components/**/*.jsx', 'utils/**/*.js']
}

gulp.task('browserify', function() {
	var b = browserify();
	b.transform(reactify);
	b.transform(babelify);
	b.add('./components/game.js');
	return b.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);