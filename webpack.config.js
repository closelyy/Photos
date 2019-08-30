const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /coverage/,
          /database/,
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    ],
  },
};
