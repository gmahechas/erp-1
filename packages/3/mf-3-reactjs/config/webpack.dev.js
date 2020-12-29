const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:8003/',
  },
  devServer: {
    port: 8003,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf3',
      filename: 'remoteEntry.js',
      exposes: {
        './Mf3App': './src/bootstrap',
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
};

module.exports = merge(commonConfig('development'), devConfig);
