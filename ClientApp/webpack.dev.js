const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');  

const config = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        uglifyOptions: {
          ecma: 8,
        },
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },      
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader,
         'css-loader','sass-loader','postcss-loader'], 
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('build', {}),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './public/index.html',
      filename: 'index.html'
    }),
   // new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;