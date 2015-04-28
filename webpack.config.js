var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  entry: './src/Game.ts',

  plugins: [new HtmlWebpackPlugin({
    title: 'My Game'
  })],

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  // Add loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'typescript-loader'
      }
    ]
  }
};
