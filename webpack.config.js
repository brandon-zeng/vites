var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: "/",
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
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
        new webpack.DefinePlugin({
              "process.env": { 
                NODE_ENV: JSON.stringify("production") 
              }
            }),
        // minify output
        new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;