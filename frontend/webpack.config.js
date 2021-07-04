const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: '../app/assets/javascripts/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '*', '.ts', '.tsx'],
  },
};
