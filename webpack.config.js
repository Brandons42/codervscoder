var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    client: [
              path.resolve(__dirname, "js/styles.js"),
              path.resolve(__dirname, "js/change.js"),
              path.resolve(__dirname, "js/signup.js")
            ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /^node_modules$/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        exclude: /^node_modules$/,
        loader: "raw-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
         'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app/js")
  }
};
