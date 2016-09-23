var webpack = require('webpack');

module.exports = {
  entry: './src/hypermedia-flow.ts',
  output: {
    path: './dist',
    filename: 'hypermedia.min.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/\.spec\.ts$/],
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}