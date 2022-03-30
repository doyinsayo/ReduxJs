const path = require("path");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  //plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode: "development"
};
