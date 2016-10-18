var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      { 
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader' 
      }, 
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      }
    ]
  }
};

module.exports = config;