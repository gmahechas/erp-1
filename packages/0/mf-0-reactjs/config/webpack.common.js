const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const postcssNormalize = require('postcss-normalize');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      'style-loader',
      {
        loader: 'css-loader',
        options: cssOptions,
      },
      {
        loader: 'postcss-loader',
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
            ]
          }
        }
      }
    ]
    if (preProcessor) {
      loaders.push({
        loader: 'sass-loader',
        options: {
          sassOptions: {
            importLoaders: 3,
            sourceMap: isEnvDevelopment ? true : false
          }
        }
      })
    }
    return loaders;
  };

  return {
    resolve: {
      alias: {
        '@mf-0': path.resolve(__dirname, '..', 'src/')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: [/\.avif$/],
              loader: 'url-loader',
              options: {
                mimetype: 'image/avif',
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: 'url-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(tsx?|jsx?)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                },
              },
            },
            {
              test: /\.css$/,
              exclude: /\.module\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvDevelopment ? true : false,
              }),
              sideEffects: true,
            },
            {
              test: /\.module\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvDevelopment ? true : false,
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
                  importLoaders: 1,
                  sourceMap: isEnvDevelopment ? true : false,
                }, true),
              sideEffects: true,
            },
            {
              test: /\.module\.(scss|sass)$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvDevelopment ? true : false,
                modules: {
                  localIdentName: isEnvDevelopment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                }
              }, true)
            },
            {
              loader: 'file-loader',
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
    ]
  }
};
