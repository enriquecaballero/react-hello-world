import path from 'path';

const BUILD_DIR = path.resolve (__dirname, 'dist');
const APP_DIR = path.resolve (__dirname, 'src');

export default {
  entry: [
    path.resolve (APP_DIR, 'index.html'),
    path.resolve (APP_DIR, 'index.jsx')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(html)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }
};
