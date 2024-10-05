const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");
const tailwindcss = require("tailwindcss");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: "development",
  // entry: "./src/index.tsx",
  entry: ["babel-polyfill", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // loaders: ["ts-loader", "babel-loader"],
        use: "ts-loader",
        // loader: ["ts-loader", "babel-loader"],
        // use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
          "sass-loader",
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: {
      //           namedExport: false,
      //         },
      //       },
      //     },
      //     "postcss-loader"
      //   ],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png)(\?[a-z0-9=&.]+)?$/i,
        loader: "file-loader",
        options: {
          name: "[sha512:hash:base64:7].[ext]",
        },
        // use: "base64-inline-loader?limit=1000&name=[name].[ext]",
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "images/[name].[ext]",
      //   },
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./www/index.html",
    }),
    tailwindcss,
    require("autoprefixer"),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
    new WebpackBar(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: true,
    hot: isDev,
    open: true,
    // port: 9000
  },
};
