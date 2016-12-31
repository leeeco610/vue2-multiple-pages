<template>
  <div id="personal_center">
      <!--上部的通栏图组件，头部被包括在里面-->
      <div class="full" id="full" refs="full">
          <PCBanner></PCBanner>
          <!--中间的主要内容组件-->
          <PCMain></PCMain>
      </div>

      <!--页脚组件-->
      <PCFooter></PCFooter>
  </div>
</template>
<script>
    import { mapActions } from 'vuex';
    import PCBanner from './PCBanner';
    import PCMain from './PCMain';
    import PCFooter from '../../components/PCFooter';
    export default {
        name: 'personalCenter',
        components: {
            PCBanner,
            PCMain,
            PCFooter
        },
        mounted() {
            this.bindEvent();
            // 当最小高度小于窗口高度时，强制设置等于窗口高度，就不用强制设置html和body的高度，而影响拿到的文档高度。
            this.setHeight();

        },
        methods: {
            // 掩藏控制组件，在根组件上定义事件
            ...mapActions({
                HIDE: "hd.a.control_hide"
            }),
            setHeight:function () {
                let fullDom = document.getElementById("full");
                if(fullDom.offsetHeight < window.innerHeight){
                    fullDom.style.minHeight = window.innerHeight + "px";
                }
            },
            bindEvent: function () {
                window.onresize = function () {
                    let fullDom = document.getElementById("full");
                    if(fullDom.offsetHeight < window.innerHeight){
                        fullDom.style.minHeight = window.innerHeight + "px";
                    }
                }
            }

        }
    }
</script>

<style>
    /*全局样式*/
#personal_center {
    font-family: 'PingFang SC',"Microsoft YaHei",'PingFangSC-Semibold','Avenir', Helvetica, Arial, sans-serif;
    /*font-family: "Microsoft YaHei";*/
    /*height: 100%;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  /*margin-top: 60px;*/
}
    #personal_center .full{
       /*min-height: 100%;*/
        /*overflow: hidden;*/
    }
.el-dragger{
    width: 160px;
    height: 160px;
    border-radius: 0px;
    /*border: none;*/
}
.el-upload{
    width: 160px;
    height: 160px;
}
.el-dragger .el-icon-plus{
    color: #99a9bf;
    margin: 56px 0 6px;
    line-height: 16px;
}
.el-message{
    border: 2px solid #50bfff;
}
    .el-message-fade-enter-active{
        transform: translateX(-50%) translateY(-65px);
    }
</style>
