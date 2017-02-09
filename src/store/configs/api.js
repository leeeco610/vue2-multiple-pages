/**
 * Created by lihaipeng on 16/11/30.
 */
import Vue from 'vue'
import vueResource from 'vue-resource'
import crypto from 'crypto'

import setting from './setting'

Vue.use(vueResource)
Vue.http.options.emulateJSON = true

let api = {};
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

    $.isTest = () => {
      return setting.ENV === 'dev';
    }

    //向后台发送post请求
    $.post = (url, query, options) => {
        options = options || {};
        let random = $.rd(1000000, 9999999)+Date.now();
        let guid = crypto.createHash('md5').update(random.toString()).digest('hex');
        var api = {
            ["rpc_" + random]: {
                "name": url,
                "params": query || {}
            }
        };

        //回调
        var cb = options.cb || function () {};

        //rpc请求需要数据
        let rpc_data = {
            "guid": guid,
            "api": api
        };
        let rpc_opt = {
            "headers":{
                'Accept': '*/*',
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
            },
            "data":{
                "params": JSON.stringify(rpc_data)
            }
        };

        //去数据api类型
        let dataApi;
        let type = options.type;
        if(type === 'cmd'){
            dataApi = setting.DATA_API_CMD;
        }else if(type === 'no_result'){
            dataApi = setting.DATA_API_NO_RESULT;
        }else{
            dataApi = setting.DATA_API_sync;
        }
        let rpc_url = setting.DATA_AGREEMENT+setting.DATA_HOST_NAME+':'+setting.DATA_PORT + dataApi;

        let startTime, endTime;
        if($.isTest()){
            // console.log('[RPC] ========= ('+guid+') === START === ('+rpc_url+')')
            // console.log('[RPC] ========= ('+guid+') === Params: ')
            // console.log(rpc_opt.data);
            startTime = Date.now();
        }

        //发送请求
        return new Promise(function(resolve, reject){
            Vue.http['post'](rpc_url, rpc_opt.data || {}, {
              // emulateJSON: true，
              headers: rpc_opt.headers
            }).then(
              result => {
                  result = result.body;
                  // console.log('aaa');
                  // console.log(result.body);


                  if($.isTest()){
                      endTime = Date.now()
                      // console.log('[RPC] ========= ('+guid+') === Result: ')
                      // console.log(result);
                  }

                  if(!result){
                    result = {
                      code: 999,
                      msg: '数据获取出错，请稍后重试'
                    }
                    cb(result);
                    resolve(result);
                    return false;
                  }
                  if (result instanceof Error) {
                      cb(result && result);
                      resolve(result && result);
                  } else {
                      if(result && result.code == 0){
                          var res_data;
                          Object.keys(result.data).forEach(function(key, index){
                            res_data = result.data[key]
                          })
                          var res_result = {
                            guid: result.guid,
                            ...res_data
                          }
                          cb(res_result);
                          resolve(res_result);
                      }else{
                          resolve(result);
                      }
                  }
                  if($.isTest()){
                      endTime = Date.now();
                      // console.log('[RPC] ========= ('+guid+') === END === (Spend Time:'+(endTime-startTime)+'ms) ************************');
                  }
              },
              err => {
                  var res = {
                    code: 999,
                    msg: '数据获取出错，请稍后重试'
                  }
                  cb(res);
                  resolve(res);
              }
            );
        });
    };
})(api);

module.exports = api;
