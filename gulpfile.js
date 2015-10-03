var gulp = require("gulp");
var gutil = require("gulp-util");
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task("default", ['iconfont', "webpack-dev-server"]);

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var config = Object.create(webpackConfig);
	config.devtool = "eval";
	config.debug = true;
	config.progress = true;
	config.historyApiFallback = true;
	config.port = 3000; // when changing port, remember to change the port the url in /build/index.html :)

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(config), {
		contentBase: 'build',
		historyApiFallback: true,
		stats: {
			colors: true
		}
	}).listen(config.port, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:"+config.port+"/");
	});
});

var iconFontName = 'Icons';
gulp.task('iconfont', function () {
	gulp.src(['app/icons/*.svg'])
		.pipe(iconfontCss({
				fontName : iconFontName,
				targetPath : 'icons.css'
		}))
		.pipe(iconfont({
			fontName : iconFontName,
			normalize: true
		}))
		.pipe(gulp.dest('build/fonts/icons/'));
});