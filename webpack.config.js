const webpack = require('webpack')
const path = require('path')
const envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

module.exports = {
  entry: {
    bundle: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      'app/styles/app.scss',
      'app/app.jsx'
    ],
    landingPage: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      'app/styles/landingPage.scss',
      'app/landingPage.jsx'
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
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
    modules: [
      __dirname,
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app', // allows to access all files in the app root
      actions: 'app/redux/actions',
      reducers: 'app/redux/reducers',
      configureStore: 'app/redux/configureStore.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'node_modules/react-icons/fa'),
          path.resolve(__dirname, 'node_modules/react-icons/md')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules/foundation-sites/scss']
            }
          }]
      },
      { test: /\.woff(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=application/font-woff2' },
      { test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=font/opentype' },
      { test: /\.ttf(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[hash:base64:5]-[name].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[hash:base64:5]-[name].[ext]&limit=8192&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
}
