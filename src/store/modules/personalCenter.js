// demo
import * as types from '../types'
import {getPersonal, deleteCase} from '../services/personalCenter';


const personalModule = {
    state: {
        prompt_message: '',
        aside_height: 0,
        active_city: 0,
        active_show: 0,
        loading_show: false,
        data: {
            designer_primary: {
            },
            price_sheet: [
                {
                    dictionary: [

                    ]
                },
            ]
        }
    },

    actions: {
        async [types.PC_A_ALL_PERSONAL] ({state, dispatch, commit}, payload) { //第一个参数context
            var data = await getPersonal(payload)
            return commit(types.PC_M_ALL_PERSONAL, data)
        },
        actionP({state, dispatch, commit}, payload){
            return dispatch(types.PC_A_ALL_PERSONAL, payload)
        },
        // 服务器删除数据
        async [types.PC_A_DELETE_CASE] ({state, dispatch, commit}, payload) { //第一个参数context
            var data = await deleteCase(payload.number)
            if(data.data.ret === 'true'){
                commit(types.PC_M_DELETE_SAMPLE, payload.idx);
                state.prompt_message = '刪除成功！'
                payload.fun();
            } else{
                state.prompt_message = '刪除失敗！'
                payload.fun();
            }
        },
        actionPD({state, dispatch, commit}, payload){
            return dispatch(types.PC_A_DELETE_CASE, payload)
        }
    },

    mutations: {
        [types.PC_M_ALL_PERSONAL] (state, payload) {
            Object.assign(state, payload)
        },
        // 切换城市
        [types.PC_M_TOGGLE_CITY] (state, payload) {
            state.active_city = payload;
        },
        // 切换显示 作品或评论
        [types.PC_M_TOGGLE_SHOW] (state, payload) {
            state.active_show = payload;
        },
        // 删除作品
        [types.PC_M_DELETE_SAMPLE] (state, payload) {
            // state.data.samples = state.data.samples.filter(function (value) {
            //     return value.number !== payload;
            // })
            state.data.samples.splice(payload, 1);
            state.loading_show = false;
        }
    },

    getters: {
        [types.PC_G_ALL_PERSONAL] (state) {
            return state.data;
        },
        // 得到选中城市的数据
        [types.PC_G_CITY_PRICE] (state) {
            return state.data.price_sheet[state.active_city];
        }
    }
}

export default personalModule