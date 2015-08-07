var gulp = require('gulp');
var server = require('karma').Server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var annotate = require('gulp-ng-annotate');

gulp.task('build', function () {
	return gulp.src('src/**/*.js')
		.pipe(annotate())
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.dirname = '/';
			path.extname = '.min.js';
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('test', function (done) {
	new server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});