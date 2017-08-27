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
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
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
    path: path.resolve(__dirname, "app/public/components")
  }
};
