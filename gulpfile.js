var gulp = require('gulp');
var server = require('karma').Server;

gulp.task('build', function (done) {

});

gulp.task('test', function (done) {
	new server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});