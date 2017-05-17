var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: [
      'baggyui',
      'highlightjs',
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('examples')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new OpenBrowserPlugin({ 
      url: 'http://localhost:8080' 
    })
  ]
}