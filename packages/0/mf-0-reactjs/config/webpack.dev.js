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
    publicPath: 'http://localhost:8000/',
  },
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf0',
      remotes: {
        mf1: 'mf1@http://localhost:8001/remoteEntry.js',
        mf2: 'mf2@http://localhost:8002/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
};

module.exports = merge(commonConfig('development'), devConfig);
