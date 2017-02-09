// demo
import * as types from '../types'
import {getAllOrder} from '../services/demo';


const demoModule = {
    state: {
        ddd: 'dsfasd',
        isShow: true,
        data: {}
    },

    actions: {
        async [types.DEMO_A_DATA_SHOW] ({state, dispatch, commit}, payload) { //第一个参数context
            var data = await getAllOrder()
            // console.log(data);
            return commit(types.DEMO_M_DATA_SHOW, data)
        },
        actionA({state, dispatch, commit}, payload){
            return dispatch(types.DEMO_A_DATA_SHOW)
        }
    },

    mutations: {
        [types.DEMO_M_DATA_SHOW] (state, payload) {
            Object.assign(state, payload)
            // state.data = payload
        }
    },

    getters: {
        [types.DEMO_G_DATA_SHOW] (state) {

        }
    }
}

export default demoModule
