//消息中心
import * as types from '../types';
import * as servers from '../services/messageCenter';

const messCenterModule = {
    state: {
        //消息详情是否显示
        detail_show: false,
        //消息详情数据
        detail_message: {},
        //存储服务器取回的消息中心数据
        des_data: {},
        //消息列表的数据
        des_list: [],
        //消息列表的选中值
        listAcIndex: '',
    },

    actions: {
        //获取页面所有数据
        async [types.MC_A_ALL_MESSAGE] ({state, dispatch, commit}, uid){
            var serverData = await servers.getAllMessage(uid);
            commit([types.MC_M_ALL_MESSAGE], serverData.data);
            commit([types.MC_M_SHOW_ALLMES]);
        },

        //显示消息详情页
        [types.MC_A_SHOW_DETAIL]({state, dispatch, commit}, index){
            commit([types.MC_M_SHOW_DETAIL], index);
        },

        //所有消息
        [types.MC_A_SHOW_ALLMES]({state, dispatch, commit}){
            commit([types.MC_M_SHOW_ALLMES]);
        },

        //已读消息
        [types.MC_A_SHOW_READED]({state, dispatch, commit}){
            commit([types.MC_M_SHOW_READED]);
        },

        //未读消息
        [types.MC_A_SHOW_NOREAD]({state, dispatch, commit}){
            commit([types.MC_M_SHOW_NOREAD]);
        },

        //系统消息
        [types.MC_A_SHOW_SYSMES]({state, dispatch, commit}){
            commit([types.MC_M_SHOW_SYSMES]);
        },
        //删除消息
        [types.MC_A_DELETE_MES]({state, dispatch, commit}, index){
            let message_id = state.des_list[index].message_id;
            servers.deleteMes(message_id);
            commit([types.MC_M_DELETE_MES], index);
        },

        //删除已读消息
        [types.MC_A_DELREAD_MES]({state, dispatch, commit}){
            let mesIdArr = [];
            for (let i = 0; i < state.des_list.length; i++) {
                if (state.des_list[i].read == 1) {
                    mesIdArr.push(state.des_list[i].message_id);
                    commit([types.MC_M_DELETE_MES], i);
                    i = i - 1;
                }
            }
            servers.deleteMes(mesIdArr);
        },

        //改变消息列表选中值
        [types.MC_A_CHANGE_SELECT]({state, dispatch, commit}, index){
            commit([types.MC_M_CHANGE_SELECT],index);
        }

    },

    mutations: {
        //获取页面所有数据
        [types.MC_M_ALL_MESSAGE](state, payload){
            // Object.assign(state, payload)
            state.des_data = payload;
        },

        //显示消息详情并改变状态为已读
        [types.MC_M_SHOW_DETAIL](state, index){
            state.detail_show = true;
            let acMessage = state.des_list[index];
            state.detail_message = acMessage;
            if (acMessage.read == 0){
                let message_id = acMessage.message_id;
                acMessage.read = 1;
                servers.setRead(message_id);
            }
        },

        //过滤返回所有消息
        [types.MC_M_SHOW_ALLMES](state){
            state.des_list = state.des_data.des_message;
        },

        //过滤返回已读消息
        [types.MC_M_SHOW_READED](state){
            state.des_list = state.des_data.des_message.filter(mes=> mes.read == 1);
        },

        //过滤返回未读消息
        [types.MC_M_SHOW_NOREAD](state){
            state.des_list = state.des_data.des_message.filter(mes=> mes.read == 0);
        },

        //过滤返回系统消息
        [types.MC_M_SHOW_SYSMES](state){
            state.des_list = state.des_data.des_message.filter(mes=> mes.from == 'system');
        },

        //删除消息
        [types.MC_M_DELETE_MES](state, index){
            //清除详情显示
            let message_id = state.des_list[index].message_id;
            if (message_id === state.detail_message.message_id) {
                state.detail_show = false;
                state.detail_message = {};
            }
            state.des_list.splice(index, 1);
        },
        //改变消息列表选中值
        [types.MC_M_CHANGE_SELECT](state, index){
            state.listAcIndex = index;
        },

    },

    getters: {}
}

export default messCenterModule
