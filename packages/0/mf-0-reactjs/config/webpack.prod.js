const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.PROD_DOMAIN;

const prodConfig = {
  mode: 'production',
  entry: './src/index.ts',
  // devtool: '',
  output: {
    filename: '[name].[contenthash:8].js',
    publicPath: '/O/mf-0-reactjs/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf0',
      remotes: {
        mf1: `mf1@${domain}/mf1/remoteEntry.js`,
        mf2: `mf2@${domain}/mf2/remoteEntry.js`,
      },
      shared: packageJson.dependencies
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig('production'), prodConfig);