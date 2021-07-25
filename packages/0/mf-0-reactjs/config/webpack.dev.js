const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:8000/',
    chunkFilename: '[name].chunk.js',
    globalObject: 'this'
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
        mf3: 'mf3@http://localhost:8003/remoteEntry.js',
      },
      shared: packageJson.dependencies
    }),
  ],
};

module.exports = merge(commonConfig('development'), devConfig);
