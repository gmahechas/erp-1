const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const domain = process.env.ERP_PRODUCTION_DOMAIN;
const prodConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: '/0/mf-0-reactjs/latest/',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    globalObject: 'this'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf0',
      remotes: {
        mf1: `mf1@${domain}/1/mf-1-reactjs/latest/remoteEntry.js`,
        mf2: `mf2@${domain}/2/mf-2-reactjs/latest/remoteEntry.js`,
        mf3: `mf3@${domain}/3/mf-3-reactjs/latest/remoteEntry.js`,
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