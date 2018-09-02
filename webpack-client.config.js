require('webpack');
const path = require('path');

module.exports = {
  entry: {
    client: ['./src/client.js'],
    'client-part': ['./src/client-part.js'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname,'public')
  },
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
        test: /\.(js|jsx)$/,
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
