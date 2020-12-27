const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:8001/',
  },
  devServer: {
    port: 8001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf1',
      filename: 'remoteEntry.js',
      exposes: {
        './Mf1App': './src/bootstrap',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
};

module.exports = merge(commonConfig('development'), devConfig);
