var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    jsx: [path.resolve(__dirname, "public/components/index.jsx"), path.resolve(__dirname, "public/components/index-layout.jsx")]
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "app/public/components")
  }
};
