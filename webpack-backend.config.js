require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['babel-polyfill', './server.js'],
  output: {
    filename: './start.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: './external/[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          compact: false
        }
      }
    ]
  },
  mode: 'development'
};
