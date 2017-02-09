<template>
  <div id="orders_center">
      <!--头部组件-->
      <MCHeader></MCHeader>
      <!--上部组件-->
      <OCUpper></OCUpper>
      <!--表格组件-->
      <OCTable></OCTable>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';
  import MCHeader from '../../components/MCHeader';
  import OCUpper from './OCUpper';
  import OCTable from './OCTable';

export default {
  name: 'ordersCenter',
    created() {
        let uid = this.getCookie('JHome-uid');
        this.$store.dispatch('actionO', uid);
    },
  components: {
      MCHeader,
      OCUpper,
      OCTable
  },
  methods: {
      // 掩藏控制组件，在根组件上定义事件
          ...mapActions({
              HIDE: "hd.a.control_hide"
          }),
        getCookie: function (NameOfCookie) {
          if (document.cookie.length > 0) {
              let begin = document.cookie.indexOf(NameOfCookie + "=");
              if (begin != -1) {
                  begin += NameOfCookie.length + 1;//cookie值的初始位置
                  let end = document.cookie.indexOf(";", begin);//结束位置
                  if (end == -1) end = document.cookie.length;//没有;则end为字符串结束位置
                  return unescape(document.cookie.substring(begin, end));
              }
          }
          return null;
        },
  }
};
</script>

<style>
#orders_center {
  font-family: 'PingFang SC','PingFangSC-Semibold','Avenir', Helvetica, Arial, sans-serif;
  font-family: "Microsoft YaHei";

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
        /*margin-top: 60px;*/
}
    h2{
        font-weight:300;
    }
</style>
