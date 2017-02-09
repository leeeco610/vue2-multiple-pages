'use strict';
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var util = require('./server/util/index');
var setting = require('./server/configs/index');
var home = require('./server/routes/index');

var app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'dist/views')]);
app.engine('.html',require('ejs').__express);  //app.engine('.html',require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', express.static(path.join(__dirname, 'dist/static')));
app.use('/',home);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//登录拦截器
/*
app.use(function (req, res, next) {
  var url = req.originalUrl;
  console.log("url==="+url);
  var user = req.session.user;
  if(user){
    next();
  }else{
    res.redirect('/');
  }
});
*/

// error handlers
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   if(err.status == 404){
//     res.render('404', {title:'404'});
//   }else{
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   }
// });



console.log('Http server: http://'+util.getIPAddress()+':'+(process.env.PORT || setting.SERVER_PORT));
module.exports = app;
