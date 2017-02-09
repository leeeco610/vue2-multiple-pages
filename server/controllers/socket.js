/**
 * Created by lihaipeng on 16/7/29.
 */
var http = require('http'),
    net = require('net'),
    app = http.createServer().listen('8001'),
    io = require('socket.io').listen(app),
    nodeServer = new net.Socket();

const setting = require('../configs/setting');

// 连接到Tomcat
nodeServer.connect(setting.DATA_PORT_SOCKET, setting.DATA_HOST_NAME, function () {
    console.log('Connected to '+setting.DATA_HOST_NAME);
});
// 存储客户端的WebSocket连接实例
var aSocket = {};
// 同客户端建立连接
io.sockets.on('connection', function (socketIO) {
    // 从客户端接收数据，然后发送至Tomcat
    socketIO.on('fromWebClient', function (webClientData) {
        // 存储至映射表
        aSocket[socketIO.id] = socketIO;
        // 发送至Tomcat的数据中添加socket_id
        webClientData['sid'] = socketIO.id;
        // 发送String类型的数据至Tomcat
        nodeServer.write(JSON.stringify(webClientData));
    });
    // 客户端断开连接
    socketIO.on('disconnect', function () {
        console.log('DISCONNECTED FROM CLIENT');
    });
});

// 从Tomcat接收数据
nodeServer.on('data', function (data) {
    var jsonData = JSON.parse(data.toString());
    // 分发数据至客户端
    for (var i in jsonData.list) {
        aSocket[jsonData.list[i]['sid']].emit('pushToWebClient', jsonData.list[i].data);
    }
});