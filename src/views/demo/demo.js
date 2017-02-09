import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";
import Demo from "./Demo.vue";
import store from "../../store";

/* eslint-disable no-new */

Vue.use(ElementUI);

new Vue({
    el: '#demo',
    template: '<Demo/>',
    components: {
        Demo
    },
    store,
    created(){
        console.log("--- demo created ---");
    },
    mounted(){
        console.log("--- demo mounted ---");
    }
})
