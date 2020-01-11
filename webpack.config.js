const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let SERVER_URL = 'http://localhost:8080/';
let CLIENT_URL = 'http://localhost:3000/';

let isDevelopment = true;

switch (process.env.TARGET) {
  case "local":
  default:
    break;
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.module\.(scss|css)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
          test: /\.(scss|css)$/,
          exclude: /\.module.(scss)$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                  sourceMap: isDevelopment
              }
            }
          ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify(SERVER_URL),
      CLIENT_URL: JSON.stringify(CLIENT_URL)
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
    port: 3000
  }
};