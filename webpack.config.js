const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
	entry: slsw.lib.entries,
	resolve: {
		extensions: [
			'.js',
			'.json',
			'.ts',
			'.tsx'
		]
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	plugins: [new webpack.IgnorePlugin(/vertx/)],
	target: 'node',
	externals: [nodeExternals()],
	module: {
		loaders: [
			{ test: /\.js(x?)$/, loader: 'babel-loader' }
		]
	}
};