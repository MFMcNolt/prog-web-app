const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');


// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // HtmlWebpackPlugin configurations...
      new WebpackPwaManifest({
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your app description',
        background_color: '#ffffff',
        theme_color: '#000000',
        start_url: '/',
        icons: [
          // Specify icons for your manifest
        ],
      }),
      new GenerateSW(), // This will generate the service worker using Workbox
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};