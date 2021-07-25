const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const prodConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: '/2/mf-2-reactjs/latest/',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    globalObject: 'this'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf2',
      filename: 'remoteEntry.js',
      exposes: {
        './Mf2App': './src/bootstrap',
      },
      shared: packageJson.dependencies
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    })
  ],
};

module.exports = merge(commonConfig('production'), prodConfig);