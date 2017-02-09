// demo
import * as types from '../types'
import {getHeadMessage} from '../services/headMessage';


const headMessageModule = {
    state: {
        isActive: false,
        data:{
        },
    },

    actions: {
        async [types.HD_A_ALL_MESSAGE] ({state, dispatch, commit}, payload) { //第一个参数context
            var data = await getHeadMessage(payload)
            return commit(types.HD_M_ALL_MESSAGE, data)
        },
        actionH({state, dispatch, commit}, payload){
            return dispatch(types.HD_A_ALL_MESSAGE, payload)
        },

        [types.HD_A_SUB_NOREADMES]({state, dispatch, commit}){
            commit(types.HD_M_SUB_NOREADMES);
        },
        [types.HD_A_CONTROL_HIDE] ({state, dispatch, commit}) {
            // commit(types.HD_M_CONTROL_HIDE);
        }
    },

    mutations: {
        [types.HD_M_ALL_MESSAGE] (state, payload) {
            Object.assign(state, payload)
        },
        //已读消息数量减少
        [types.HD_M_SUB_NOREADMES](state){
            if (state.data.messages_count > 0){
                state.data.messages_count --;
            }
        },
        //切换显示
        [types.HD_M_CONTROL_TOGGLE] (state) {
            state.isActive = !state.isActive;
        },
        // 掩藏控制器
        [types.HD_M_CONTROL_HIDE] (state) {
            state.isActive = false;
        },
        // 显示控制器
        [types.HD_M_CONTROL_SHOW] (state) {
            state.isActive = true;
        },
    },

    getters: {
        [types.HD_G_ALL_MESSAGE] (state) {
            return state.data;
        }
    }
}

export default headMessageModule