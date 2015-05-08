var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  entry: {
    app: "./app/src/Game.ts",
    vendor: ["./app/src/vendors.js"],
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'My Game' }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  // Add loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'awesome-typescript-loader?library=es6'
      }
    ]
  }
};
