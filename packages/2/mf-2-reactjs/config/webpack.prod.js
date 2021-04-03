const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
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
  ],
};

module.exports = merge(commonConfig('production'), prodConfig);