/**
 * 编译打包后模拟服务器本地测试使用
 */
var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/messageCenter', function (req, res, next) {
    req.url = '/views/messageCenter.html';
    next();
});

router.get('/ordersCenter', function (req, res, next) {
    req.url = '/views/ordersCenter.html';
    next();
});

router.get('/personalCenter', function (req, res, next) {
    req.url = '/views/personalCenter.html';
    next();
});

app.use(router);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});
