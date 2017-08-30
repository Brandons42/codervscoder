var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    jsx: [path.resolve(__dirname, "components/index.jsx")]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /^node_modules$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true,
              localIdentName: "[path][name][local]"
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "app/components")
  }
};
