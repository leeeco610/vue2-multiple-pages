import Vue from 'vue';
import ElementUI from 'element-ui';//　引入插件
import 'element-ui/lib/theme-default/index.css';// 引入插件样式
import '../../../static/css/normalize.css';// 引入全局初始样式
import JcyPersonalCenter from './JcyPersonalCenter';// 根组件
import store from '../../store';// 引入状态

/* eslint-disable no-new */

Vue.use(ElementUI);// 使用插件

new Vue({
  el: '#personalCenter',// 挂载元素
  template: '<JcyPersonalCenter/>',// 模板
  components: { JcyPersonalCenter },// 根组件
  store // 状态
});
