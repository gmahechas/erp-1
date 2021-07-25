const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:8002/',
    chunkFilename: '[name].chunk.js',
    globalObject: 'this'
  },
  devServer: {
    port: 8002,
    historyApiFallback: {
      index: 'index.html',
    },
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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
};

module.exports = merge(commonConfig('development'), devConfig);
