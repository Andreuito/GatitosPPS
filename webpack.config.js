const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  entry: './src/js/application.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
 },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Gatitos',
        template: './src/index.html'
    }),    
    new WebpackObfuscator ({
      rotateStringArray: true
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
//   optimization: {
//     runtimeChunk: 'single',
//   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};