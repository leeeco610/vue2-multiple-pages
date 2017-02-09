/**
 * Created by lihaipeng on 16/7/18.
 */
module.exports = {
    ENV: 'test',
    RECEIVE_DATA_WHITE_LIST: ['192.168.1.16'],   //接受数据服务器白名单
    NO_INTERCEPT_URL: ['/static/', '/ucenter/', '/help', '/receive/'],  //获取数据白名单
    SECRET_KEY: '1f32a83588848d341c89f102dde11d4f',  //密钥串
    SERVER_PORT: '8080',
    REDIS_HOST: '192.168.1.16',  //redis host
    REDIS_PORT: '6379',  //redis port
    REDIS_PASSWORD: '2d1bdaa03900477d:JcyXxj1024',
    DATA_AGREEMENT: 'http://',
    // DATA_HOST_NAME: '120.76.124.85',  //取数据url
    DATA_HOST_NAME: '192.168.1.16',  //取数据url
    DATA_PORT: '9566',  //取数据端口
    DATA_PORT_SOCKET: '9567',  //取数据端口
    DATA_API_sync: '/api/multisync',  //取数据api  -- 同步
    DATA_API_NO_RESULT: '/api/multinoresult',  //取数据api  -- 异步
    DATA_API_CMD: '/server/cmd'  //执行脚本
};
