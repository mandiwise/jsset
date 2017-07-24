const webpack = require('webpack');
const resolve = require('path').resolve;
const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: './src/jsset.js',
  },

  output: {
    path: dist,
    filename: 'jsset.min.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc',
        },
        include: [src],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src],
        exclude: /node_modules/,
        query: {
          presets: ['babili']
        }
      },
    ]
  },
}
