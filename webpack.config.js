const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { config } = require("dotenv");

config();

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    compress: true,
  },
  watch: true,
  watchOptions: {
    ignored: [
      path.resolve(__dirname, "dist"),
      path.resolve(__dirname, "node_modules"),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
