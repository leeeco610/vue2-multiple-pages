/**
 * Created by lihaipeng on 16/11/30.
 */
var env = require('./env');
var BASE_SETTING = {
    ENV: 'prod', //dev  test  prod
    DATA_AGREEMENT: 'http://',
    DATA_PORT_SOCKET: '9567',  //socket方式取数据端口
    DATA_API_sync: '/api/multisync',  //取数据api  -- 同步
    DATA_API_NO_RESULT: '/api/multinoresult',  //取数据api  -- 异步
    DATA_API_CMD: '/server/cmd',  //执行脚本
};


//判断当前打包环境
function getENV() {
    return process.argv.env && process.argv.env.toUpperCase() || 'TEST';
}

module.exports = Object.assign(BASE_SETTING, env[getENV()]);
