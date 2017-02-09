import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../../../static/css/normalize.css';
import JcyMessageCenter from './JcyMessageCenter';
import store from '../../store'


Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#messageCenter',
  store,
  template: '<JcyMessageCenter/>',
  components: { JcyMessageCenter },
});
