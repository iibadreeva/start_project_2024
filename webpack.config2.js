const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const filename = (ext) => (isDev ? `main.${ext}` : `main.[hash:8].${ext}`);

module.exports = {
  entry: { main: './srcTs/index.ts' },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: filename('js'),
  },
  devtool: isDev ? 'source-map' : false,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              useRelativePath: true,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new HtmlWebpackPlugin({
      template: './srcTs/index.html',
      filename: 'index.html',
      minify: {
        removeComments: !isDev,
        collapseWhitespace: !isDev,
      },
    }),
  ],
  devServer: {
    // inline: true,
    hot: isDev,
    port: 9000,
    historyApiFallback: true,
  },
};
