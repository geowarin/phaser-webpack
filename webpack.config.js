var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  entry: {
    app: './app/src/Game.ts',
    includes: './app/includes.js',
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'My Game' }),
    new webpack.optimize.CommonsChunkPlugin('includes', 'includes.bundle.js'),
    new ExtractTextPlugin('styles.css')
  ],

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader?library=es6' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  }
};
