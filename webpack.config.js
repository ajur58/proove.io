var webpack = require('webpack')
var path = require('path')
var envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

module.exports = {
  entry: {
    bundle: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
    ],
    landingPage: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/landingPage.jsx'
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/javascripts/[name].js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app', // allows to access all files in the app root
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions',
      reducers: 'app/reducers',
      configureStore: 'app/store/configureStore.jsx',
      landingPageStyles: 'app/styles/landingPage.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.woff(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=application/font-woff2' },
      { test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=font/opentype' },
      { test: /\.ttf(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[hash:base64:5]-[name].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './node_modules/react-icons/fa'), path.resolve(__dirname, './node_modules/react-icons/md')],
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
}
