const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    content: './src/content',
    bg: './src/bg'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*',
          context: 'src',
          globOptions: {
            ignore: '*.js'
          }
        },
        {
          from: 'icons/',
          to: 'icons/'
        },
        {
          from: 'vendors/**'
        },
        {
          from: 'node_modules/file-icons-js/fonts/',
          to: 'vendors/file-icons-js/fonts/'
        }
      ]
    })
  ]
};
