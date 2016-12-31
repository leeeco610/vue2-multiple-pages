/**
 * 给messageCenter提供数据的服务层，
 * 主要异步获取数据
 */
import $ from '../configs/api'
import * as urls from '../configs/urls'

module.exports = {
    getAllMessage(uid = ''){
        return new Promise(function (resolve, reject) {
            //线上请求服务器使用
            $.post(urls.GET_ALL_MESSAGE, {uid: uid}).then(function (res) {
                resolve(res);
            });
        })
    },

    //设置消息为已读
    setRead(message_id = ''){
        return new Promise(function (resolve, reject) {
            $.post(urls.SET_MES_READ, {message_id: message_id}).then(function (res) {
            });
        })
    },

    //删除消息
    deleteMes(message_id = ''){
        return new Promise(function (resolve, reject) {
            $.post(urls.DELETE_MES, {message_id: message_id}).then(function (res) {
            })
        })
    }


}