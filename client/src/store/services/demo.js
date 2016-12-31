/**
 * 给demo提供数据的服务层，
 * 主要异步获取数据
 */
import $ from '../configs/api'
import * as urls from '../configs/urls'

//本地模拟数据直接使用vue-resource
import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)

module.exports = {
    getAllOrder(){
        return new Promise(function (resolve, reject) {
            // //线上请求服务器使用
            $.post(urls.GET_ALL_ORDER).then(function (res) {
                resolve(res);
            })
//            本地模拟数据使用
//             Vue.http['get']('/api/orders').then((response) => {
//                 response = response.body;
// //                console.log(response);
//                 if (response.code === 0) {
//                     resolve(response);
//                     console.log(response);
//                 }
//             });
        })
    }
}
