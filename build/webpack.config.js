const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../lib/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "../dist/lib"),
    library: "YUI",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
          {
            loader: "eslint-loader",
            options: {
              formatter: require("eslint-friendly-formatter"),
              emitWarning: false,
            },
          },
        ],
      },
    ],
  },
};
