const webpack = require('webpack');

const config = {
  devtool: 'source-map', // for display source map in browser
  entry: ['babel-polyfill', './main.js'], // entry point
  output: {
    filename: 'index.js', // place where bundled app will be served
  },
  devServer: {
    inline: true, // autorefresh
    port: 8080, // development port server
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),


  ],
  module: {
    rules: [
      {
        test: /\.js?$/, // search for js files
        exclude: /node_modules(?!\/webpack-dev-server)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2016', 'stage-3', 'react'], // use es2016 and react
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],

      },
    ],
  },
};

module.exports = config;