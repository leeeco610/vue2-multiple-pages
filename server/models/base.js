/**
 * Created by lihaipeng on 16/7/12.
 */
'use strict';
const net = require('net');
const rest = require('restler');
const util = require('util');
const path = require('path');
const crypto = require('crypto');
const Q = require('q');

const setting = require('../configs/index');

let tools = {};
(function ($) {
    //获取客户端IP 第一段判断是否有反向代理IP(头信息：x-forwarded-for)，在判断connection的远程IP，以及后端的socket的IP。
    $.getClientIp = (req) => {
        return req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
    };
    //获取范围随机数
    $.rd = (n, m) => {
        return Math.floor(Math.random()*(m-n+1)+n);
    };
    //对象的复制
    $.extend = (deep, target, options) => {
        for (let name in options) {
            let copy = options[name];
            if (deep && copy instanceof Array) {
                target[name] = $.extend(deep, [], copy);
            } else if (deep && copy instanceof Object) {
                target[name] = $.extend(deep, {}, copy);
            } else {
                target[name] = options[name];
            }
        }
        return target;
    };

    //md5
    $.md5 = (str) => {
      return crypto.createHash('md5').update(str).digest('hex');
    };

    //加密方法
    $.createSecretKey = (ua, uid) => {
      let s_ua = $.md5(ua);
      let s_sk = $.md5(setting.SECRET_KEY);
      let temp = String(uid)+String(s_ua)+String(s_sk);
      return $.md5(temp);
    };

    //打印日志，默认console.log(),只解析2层对象，再深的就是Object;
    $.log = (obj) => {
      console.log(util.inspect(obj, { depth: null, colors:true}));
    };


    //向后台发送post请求
    $.post = (type, data, cb) => {
        const defer = Q.defer();

        cb = cb || function () {};

        let random = $.rd(1000000, 9999999)+Date.now();
        let guid = crypto.createHash('md5').update(random.toString()).digest('hex');
        if(setting.ENV === 'test'){
            util.log('guid ==> '+guid);
        }
        let param = {
            "guid": guid,
            "api": data
        };
        let options = {
            "headers":{
                'Accept': '*/*',
                "Content-Type":"application/x-www-form-urlencoded"
            },
            data:{
                params:JSON.stringify(param)
            }
        };
        //去数据api类型
        let dataApi;
        if(type === 'cmd'){
            dataApi = setting.DATA_API_CMD;
        }else if(type === 'no_result'){
            dataApi = setting.DATA_API_NO_RESULT;
        }else{
            dataApi = setting.DATA_API_sync;
        }
        let url = setting.DATA_AGREEMENT+setting.DATA_HOST_NAME+':'+setting.DATA_PORT + dataApi;
        let startTime, endTime;
        if(setting.ENV === 'test'){
            util.log('*************************** START -- ('+url+') ***************************');
            util.log('*************************** options -- ('+guid+') ***************************');
            $.log(options);
            startTime = Date.now();
        }
        rest.post(url, options).on('complete',function (result) {
            if(setting.ENV === 'test'){
                endTime = Date.now();
                util.log('*************************** result -- ('+guid+') ***************************');
                $.log(result);
                util.log('************* (Spend Time:'+(endTime-startTime)+'ms) ************** END -- ('+guid+') ***************************');
            }
            if(!result){
              cb({
                  code: 999,
                  msg: '数据获取出错，请稍后重试'
              });
              defer.resolve({
                code: 999,
                msg: '数据获取出错，请稍后重试'
              });
              return false;
            }
            if (result instanceof Error) {
                cb(result && result.message);
                defer.resolve(result && result.message);
                //this.retry(5000); // try again after 5 sec
            } else {
                if(result && result.code == 0){
                    cb(result.data);
                    defer.resolve(result.data);
                }else{
                    if(setting.ENV === 'test'){
                        util.log(result && result.message);
                        defer.resolve();
                    }
                }
            }
        });
        return defer.promise;
    };
})(tools);

module.exports = tools;
