var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: [
      'babel-polyfill',
      'react',
      'react-router-dom',
      'react-dom',
      'react-redux',
      'redux',
      'redux-saga',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: Infinity,
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
