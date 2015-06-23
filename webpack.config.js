var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/js/main.js',
  output: {
    path: path.resolve(__dirname, 'clientBuild/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin()
    ]
}
