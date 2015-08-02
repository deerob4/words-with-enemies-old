var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var htmlWebpackPlugin = require('html-webpack-plugin');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
	entry: [
		path.resolve(ROOT_PATH, 'app/main')
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/
,				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.scss$/,
				loaders: 'style!css!sass'
			}
		]
	},
	jshint: {
		esnext: true
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Words With Enemies',
			template: "app/index.html",
			minify: true
		})
	]
};

if (TARGET === 'build') {
	module.exports = merge(common, {
		devtool: 'source-map',
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					loader: 'babel?stage=1',
					include: path.resolve(ROOT_PATH, 'app')
				},
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
		],
	});
}

if (TARGET === 'dev') {
	module.exports = merge(common, {
		devtool: 'eval',
		entry: [
			'webpack/hot/dev-server'
		],
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					loaders: ['react-hot', 'babel?stage=1'],
					include: path.resolve(ROOT_PATH, 'app')
				},
			]
		}
	});
}