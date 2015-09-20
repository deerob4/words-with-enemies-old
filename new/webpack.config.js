'use strict';

let path =  require('path');
let webpack =  require('webpack');

let config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      constants: path.resolve('./src/', 'constants'),
      actions: path.resolve('./src/', 'actions'),
      reducers: path.resolve('./src/', 'reducers'),
      components: path.resolve('./src/', 'components'),
      utils: path.resolve('./src/', 'utils'),
      libs: path.resolve('./src/', 'libs'),
      store: path.resolve('./src/', 'store'),
      styles: path.resolve('./src/', 'styles')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint-loader'],
      exclude: /node_modules/
    }],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};

module.exports = config;
