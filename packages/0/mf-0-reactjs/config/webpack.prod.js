const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.ERP_PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  entry: './src/index.ts',
  // devtool: '',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/0/mf-0-reactjs/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf0',
      remotes: {
        mf1: `mf1@${domain}/1/mf-1-reactjs/latest/remoteEntry.js`,
        mf2: `mf2@${domain}/2/mf-2-reactjs/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig('production'), prodConfig);