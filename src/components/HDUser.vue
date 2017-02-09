<template>
    <!--在根组件上触发掩藏组件的事件，在目标组件上组织冒泡-->
    <div class="user text" :class="{another:place}" onselectstart="return false;" id="hd_user" @click.stop="">
        <p class="news">
            <a href="/ucenter/designer/message-Center.html" class="el-icon-message"></a>
            <a  href="/ucenter/designer/message-Center.html" class="count" v-show="+messages.messages_count">{{ messages.messages_count }}</a>
        </p>
        <!--切换显示掩藏-->
        <div class="box" @mouseover.stop.prevent="toShow" @mouseout.stop.prevent="toHide" @click.stop.prevent="">
            <p class="figure">
                <img :src="messages.header_pic || pic_replace" class="pic">
                <span class="nick">{{ messages.designer_name }}</span>
            </p>
            <p class="arrow" :class="{turn: isActive}">
                <span class="el-icon-arrow-down"></span>
            </p>
        </div>
        <HDControl v-show="isActive" :ordersCount="messages.orders_count" @mouseover.stop.prevent="toShow" @mouseout.stop.prevent="toHide"></HDControl >
    </div>
</template>
<script>
    import store from '../store'
    import { mapGetters, mapActions, mapState } from 'vuex'
    import HDControl from './HDControl';
    export default {
        name: 'hd_user',
        components: {
            HDControl
        },
        data() {
          return {
              pic_replace: "http://publicst.jcy.cc/pc_master/img/head_pic.png"
          }
        },
        store,// 头部单独引入状态数据，便于复用
        created() {
            let uid = this.getCookie('JHome-uid');
            this.$store.dispatch('actionH',uid);// 头部数据进入状态
        },
        props: ["place"],// 样式控制数据，有外层控制内部元素的样式，
        computed: {
                ...mapGetters({
                    messages: "hd.g.all_message"
                }),
                ...mapState({
                    isActive: state => state.headMessage.isActive
                })
        },
        methods: {
            toggleShow: function (e) {

                this.$store.commit("hd.m.control_toggle")
            },
            toShow: function () {
                this.$store.commit("hd.m.control_show")
            },
            toHide: function () {
                this.$store.commit("hd.m.control_hide")
            },
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
    }
</script>
<style scoped>
    .user {
        font-size: 14px;
        line-height: 20px;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 154px;
        height: 72px;
        padding: 0px 36px 0px 10px;
    }
    .user .box{
        overflow: hidden;
        cursor: pointer;
    }
    div.another {
        top: 0;
        right: 310px;
    }

    .user::after {
        content: '';
        display: block;
        clear: both;
    }

    .user p {
        float: left;
        /*display: inline-block;*/
    }

    .user p.news {
        padding: 28px 0px 24px;
        width: 24px;
        height: 20px;
        margin-right: 36px;
        position: relative;
    }

    .user p.news .el-icon-message {
        font-size: 24px;
        color: rgba(255,255,255,1);
    }
    .user p.news .el-icon-message:hover{
        color: rgba(255,255,255,0.5);
    }
    .user p.news .count {
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #FF5522;
        line-height: 14px;
        text-align: center;
        font-size: 12px;
        top: 21px;
        left: 14px;
        color: rgba(255,255,255,1);
    }
    .user p.news .count:hover{
        color: rgba(255,255,255,0.5);
    }
    .user p.figure {
        height: 24px;
        padding: 26px 0 22px;
        margin-right: 58px;
        position: relative;
    }

    .user p.figure .pic {
        display: block;
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        background-color: green;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,1);
    }

    .user p.figure .nick {
        position: absolute;
        top: 26px;
        left: 32px;
        height: 24px;
        width: 42px;
        font-size: 14px;
        line-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgba(255,255,255,1);
    }
    .user p.arrow {
        width: 12px;
        height: 8px;
        margin: 34px 0 30px;
        transition: all 0.6s ease 0s;
    }
    .user p.arrow span {
        font-size: 12px;
        display: block;
        color: rgba(255,255,255,1);
    }
    .user .box:hover p.figure .nick{
        color: rgba(255,255,255,0.5);
    }
    .user .box:hover p.arrow span{
        color: rgba(255,255,255,0.5);
    }
    .user .box:hover p.figure .pic{
        border-color: rgba(255,255,255,0.5);
    }
    .user p.turn{
        transform: rotate(180deg);
    }
</style>