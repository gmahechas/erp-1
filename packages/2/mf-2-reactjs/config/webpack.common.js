const path = require('path');
const postcssNormalize = require('postcss-normalize');

const paths = require('./paths');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                },
              ],
              postcssNormalize()
            ],
            sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
          }
        }
      }
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push({
        loader: 'sass-loader',
        options: {
          sassOptions: {
            importLoaders: 3,
            sourceMap: true
          }
        }
      })
    }
    return loaders;
  };

  return {
    resolve: {
      alias: {
        '@mf-2': path.resolve(__dirname, '..', 'src/')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map',
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: [/\.avif$/],
              loader: require.resolve('url-loader'),
              options: {
                mimetype: 'image/avif',
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(tsx?|jsx?)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                cacheDirectory: true,
                cacheCompression: false,
                compact: isEnvProduction,
              },
            },
            {
              test: /\.css$/,
              exclude: /\.module\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
              }),
              sideEffects: true,
            },
            {
              test: /\.module\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
                modules: {
                  localIdentName: isEnvDevelopment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                }
              })
            },
            {
              test: /\.(scss|sass)$/,
              exclude: /\.module\.(scss|sass)$/,
              use:
                getStyleLoaders({
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                }, true),
              sideEffects: true,
            },
            {
              test: /\.module\.(scss|sass)$/,
              use: getStyleLoaders({
                importLoaders: 3,
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
                modules: {
                  localIdentName: isEnvDevelopment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                }
              }, true)
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ]
        }
      ],
    }
  }
};
