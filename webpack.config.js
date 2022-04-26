const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: ['./src/js/index.js', './src/sass/style.scss'],
  },
  devtool: !isProduction ? 'source-map' : false,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/img', to: '' },
      ],
    }),
  ],
  optimization: {
    // eslint-disable-next-line quotes
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
    ],
  },
};
