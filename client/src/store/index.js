import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
import messageCenter from './modules/messageCenter'
import headMessage from './modules/headMessage'
import ordersCenter from './modules/ordersCenter'
import personalCenter from './modules/personalCenter'
import setting from './configs/setting'

Vue.use(Vuex);

const debug = setting.ENV === "dev"
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false
export default new Vuex.Store({
    modules: {
        demo,
        messageCenter,
        ordersCenter,
        headMessage,
        personalCenter
    }
    // strict: debug
})

