const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');


module.exports = {
  entry: './index.js',
  output: {
    filename: 'mainFile.min.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './assets', to: './assets'},
        { from: './js/ExternalJs', to: './js'},
        { from: './data', to: './data'  },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: 
    [
      new TerserPlugin({
      terserOptions: {
        format: {
          comments: false
        }
      },
      extractComments: false
      }), 

      new CssMinimizerPlugin({
        minimizerOptions: {
          discardComments: { removeAll: true }
        }
      }),
      new HtmlMinimizerPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: '/\.m?js$/',
        exclude: '/(node_modules|bower_components)/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader'
      ]
      },
      {
        test: /\.html$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }]
      }
    ]
  },
  watch: true,
}