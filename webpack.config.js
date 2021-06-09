const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
  const isProd = options.mode === 'production';
  const isDev = !isProd;

  const fileName = (ext) => isProd ?
  `[name].[contenthash].bundle.${ext}` :
  `[name].bundle.${ext}`;

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'favicon-32x32.png'),
            to: path.resolve(__dirname, 'dist')
          },
          {
            from: path.resolve(__dirname, 'src', 'assets'),
            to: path.resolve(__dirname, 'dist/assets')
          }
        ],
      }),
      new MiniCssExtractPlugin({
        filename: fileName('css')
      })
    ];

    if (isDev) {
      base.push(new ESLintPlugin());
    }
    return base;
  };

  return {
    target: isProd ? 'browserslist' : 'web',
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['@babel/polyfill', './index.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: fileName('js'),
      clean: true
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@cmp': path.resolve(__dirname, 'src/components')
      }
    },
    devServer: {
      port: 5500,
      open: true,
      // hot: true,
      watchContentBase: true,
      historyApiFallback: true
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]__[sha1:hash:hex:7]'
                }
              }
            },
            'sass-loader',
          ],
        },
        {
          test: /^((?!\.module).)*s[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: `chunk-vendors`,
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: `chunk-common`,
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    }
  };
};
