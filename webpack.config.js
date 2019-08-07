const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		content: './src/content',
		bg: './src/bg',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: '*',
			context: 'src',
			ignore: '*.js'
		}, {
			from: 'icons/',
			to: 'icons/'
    }, {
      from: 'vendors/**',
    }, {
      from: 'node_modules/file-icons-js/fonts/',
      to: 'vendors/file-icons-js/fonts/'
    }, {
			from: 'node_modules/jquery/dist/jquery.slim.min.js',
      to: 'vendors/jquery.slim.min.js'
		}])
	]
};

