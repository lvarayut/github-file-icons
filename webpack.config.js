const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

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
			from: 'node_modules/file-icons-js/css/style.css',
			to: 'vendors/file-icons-js/css/style.css'
		}]),

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
		}]),

		new ReplaceInFileWebpackPlugin([{
			dir: 'dist/vendors/file-icons-js/css/',
			files: ['style.css'],
			rules: [{
				search: /url\("\.\.\/fonts\//g,
				replace: 'url("chrome-extension://__MSG_@@extension_id__/vendors/file-icons-js/fonts/'
			}]
		}])
	]
};

