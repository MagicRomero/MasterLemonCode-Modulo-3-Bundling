const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { config } = require("dotenv");

config();

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[id].[chunkhash].js",
  },
  devServer: {
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 8080,
    compress: true,
    hot: true,
    inline: true,
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: isDevelopment ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevelopment,
              modules: {
                localIdentName: isDevelopment ? "[local]" : "[sha1:hash:hex:4]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-typescript",
                {
                  targets: {
                    browsers: ["last 2 versions", "safari >= 7"],
                    node: "6.10",
                  },
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
              "react-hot-loader/babel",
            ],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        //Lossless
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    new MiniCssExtractPlugin({ filename: "index.css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/public", "index.html"),
      hash: true,
    }),
  ],
};
