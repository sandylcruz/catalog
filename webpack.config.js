const path = require('path');

module.exports = {
  entry: './frontend/luckyCatalog.js',
  output: {
    path: path.resolve(__dirname),
    filename: '../app/assets/javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '*', '.ts', '.tsx'],
  },
  devtool: 'source-map',
};
