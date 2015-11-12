var path = require('path');
module.exports = {
  entry: './es6/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};