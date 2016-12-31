
/**
 * 给headMessage提供数据的服务层，
 * 主要异步获取数据
 */
import $ from '../configs/api'
import * as urls from '../configs/urls'

module.exports = {
    getHeadMessage(userId = ''){
        return new Promise(function (resolve, reject) {
            //线上请求服务器使用
            $.post(urls.GET_HEAD_MESSAGE, {uid: userId}).then(function (res) {
                resolve(res);
            })
        })
    }
}