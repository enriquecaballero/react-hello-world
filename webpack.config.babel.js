import webpack from 'webpack';

// this is roughly the ES2015 equivalent of
// var resolve = require('path').resolve;
import { resolve } from 'path';

// your webpack configuration is just a javascript file, so it can
// include whatever variables you want it to.
const BUILD_DIR = resolve (__dirname, 'dist');
const APP_DIR = resolve (__dirname, 'src');

// basically the equivalent of
// module.exports = { default: { ... } };
export default {

  // list of all of the entry points for webpack
  // webpack will start at the listed file and follow
  // its dependency tree, using the module loaders
  // below on any file that matches the provided regex.
  // Each dependency tree is then bundled up into one file.
  entry: [
    resolve (APP_DIR, 'index.html'),
    resolve (APP_DIR, 'index.jsx')
  ],

  // after the dependencies all get bundled up together, this
  // output attribute tells webpack where to put them.
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  // which file extensions should be tried when resolving dependencies?
  // for example, if somewhere we require('Hello'), webpack would look for
  // a file called 'Hello', a file called 'Hello.js' and a file called
  // 'Hello.jsx' until it found one of them.  With this configuration, a
  // file called 'Hello.less' or 'Hello.coffee' would not be used unless
  // the require was changed to require('Hello.less') or require('Hello.coffee'),
  // or if those extensions were added to the array below.
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  // module loaders are applied to any file that passes the test as it is being
  // bundled.  For example, the 'babel-loader' below will be applied to any file
  // with a '.js' or '.jsx' extension.  The babel loader, specifically, runs the
  // file through babel before using it, with the configuration from '.babelrc'.
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
    ]
  }
};
