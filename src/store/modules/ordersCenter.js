// demo
import * as types from '../types'
import {getAllOrder} from '../services/ordersCenter';


const ordersModule = {
    state: {
        isShow: true,
        active_status: 1,//显示的订单状态
        filter_key: "",//默认搜索关键字
        filter_from: 0,// 通过什么来决定显示内容 0订单状态，1搜索，2删除
        delete_id: "",
        data:{
            orders:[]
        },
    },

    actions: {
        async [types.OC_A_ALL_ORDER] ({state, dispatch, commit}, payload) { //第一个参数context
            var data = await getAllOrder(payload)
            return commit(types.OC_M_ALL_ORDER, data)
        },
        actionO({state, dispatch, commit}, payload){
            return dispatch(types.OC_A_ALL_ORDER, payload)
        }
    },

    mutations: {
        [types.OC_M_ALL_ORDER] (state, payload) {
            Object.assign(state, payload)
        },
        // 导航的过滤,改变过滤条件
        [types.OC_M_FILTER_ORDER] (state, payload) {
            state.filter_from = 0;
            state.active_status = payload;
        },
        // 搜索过滤
        [types.OC_M_SEARCH_ORDER] (state, payload) {
            state.filter_from = 1;
            state.filter_key = payload;
        }
    },

    getters: {
        [types.OC_G_ALL_ORDER] (state) {
            return state.data.orders;
        },
        //过滤
        [types.OC_G_FILTER_ORDER] (state) {
            if(state.data.orders && state.data.orders.length > 0){
                return state.data.orders.filter(function (val) {
                    // 通过点击状态栏，获取状态过滤
                    if(state.filter_from === 0){
                        return state.active_status === 0 ? true : (+val.status === state.active_status);
                        // 通过搜索栏获取关键字进行过滤
                    } else if(state.filter_from === 1){
                        return val.project_info.indexOf(state.filter_key) > -1 || val.owner_info.indexOf(state.filter_key) > -1;
                    }
                })
            }
        }
    }
}

export default ordersModule