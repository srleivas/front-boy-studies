const devMode = process.env.NODE_ENV !== 'production';
const Webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/main.js',
  output: {
    filename: 'main.min.js',
    path: __dirname + '/public',
    publicPath: ''
  },
  optimization: {
    // minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      }),
      new OptimizeCssAssets({}),
      new HtmlMinimizerPlugin()
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '*.html',
          context: './src'
        }
      ]
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
      ]
    }, 
    {
      test: /\.(jpg|png|tiff|svg|gif)$/,
      use: ['file-loader'],
    },
    {
      test: /\.html/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: "[name].[ext]"
        }
      }]
    }]
  }
}