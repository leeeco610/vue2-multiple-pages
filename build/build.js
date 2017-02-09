// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

//判断当前打包环境
function getENV() {
    return (process.argv[2] && process.argv[2].toLowerCase()) || 'test';
}

var spinner = ora('building for '+getENV()+'...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {

  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  //使用nodejs自动上传构建后的资源到七牛云存储
  exec('node build/uploadFileToQiniu.js '+getENV());

  //使用PHP脚本自动上传构建后的资源到七牛云存储
  // var arr = ['php', config.build.qiniu_param1, config.build.qiniu_param2, config.build.qiniu_param3];
  // cd('c:\\php')
  // console.log('Upload file to qiniu...')
  // exec(arr.join(' '))
  spinner.stop()
})
