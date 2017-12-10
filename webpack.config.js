const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		content: './src/content',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new CopyWebpackPlugin([{
			from: '*',
			context: 'src',
			ignore: '*.js'
		}, {
			from: 'icons/',
			to: 'icons/'
		},{
			from: 'node_modules/jquery/dist/jquery.slim.min.js'
		}])
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}]
	}
};

