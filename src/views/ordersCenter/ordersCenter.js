import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../../../static/css/normalize.css';
import JcyOrdersCenter from './JcyOrdersCenter';
import store from '../../store'

/* eslint-disable no-new */

Vue.use(ElementUI);

new Vue({
  el: '#ordersCenter',
  store,
  template: '<JcyOrdersCenter/>',
  components: { JcyOrdersCenter },
  // render: h => h(JcyOrdersCenter)
});
