const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/favalid.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin()]
};
