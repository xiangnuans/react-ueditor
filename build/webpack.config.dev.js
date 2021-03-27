const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = Object.assign({}, base, {
  mode: "development",
  devServer: {
    open: true,
    port: 8000,
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "YUI",
      template: "index.html",
    }),
  ],
});
