/**
 * Created by Administrator on 2017/2/9.
 * 工具
 */

'use strict';
var util = {};
util.getIPAddress = function () {
    var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
};

module.exports = util;
