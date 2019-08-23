const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [
          path.resolve(__dirname, 'client'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    ],
  },
};
