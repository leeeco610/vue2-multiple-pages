var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var glob = require('glob');
var entries = getEntry('./src/views/**/*.js'); // 获得入口js文件

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  // entry: {
  //   app: './src/main.js'
  // },
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 19",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ]
      })
    ]
  }
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    console.log(entry);
    console.log(path.basename(entry), path.extname(entry));
    basename = path.basename(entry, path.extname(entry));
    console.log(basename);
    tmp = entry.split('/').splice(-3);
    console.log(entry.split('/'));
    console.log(tmp);
    pathname = tmp.splice(0, 1) + '\/' + basename; // 正确输出js和html的路径
    console.log(pathname);
    entries[pathname] = entry;
    console.log(entries[pathname]);
  });
  console.log(entries);
  return entries;
}
