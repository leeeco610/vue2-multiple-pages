<!--消息中心上部导航部分组件-->
<template>
    <div class="jcy_upper">
        <div class="inner">
            <div class="left">
                <h2>消息中心</h2>
                <p @click="deleteReadMes">删除已读消息</p>
            </div>
            <div class="right">
                <ul>
                    <!--分类-->
                    <template v-for="(type,index) in types">
                        <li :class="{active: activeIndex === index}" @click="upperSelected(index)">
                            {{type.title}}<span></span></li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import * as types from '../../store/types';

    export default {
        name: 'jcy_upper',
        data () {
            return {
                //默认选中的
                activeIndex: 0,
                types: [
                    {title: "全部"},
                    {title: "已读"},
                    {title: "未读"},
                    {title: "系统"}
                ]
            };
        },

        created(){
        },

        methods: {
            upperSelected: function (index) {
                this.activeIndex = index;
                switch (index) {
                    case 0:
                        this.showALLMes();
                        break;
                    case 1:
                        this.showReadedMes();
                        break;
                    case 2:
                        this.showNoReadMes();
                        break;
                    case 3:
                        this.showSysMes();
                        break;
                    default:
                        this.showALLMes();
                }
            },
            deleteReadMes: function () {
                this.changeSelect('');
                this.delreadMes();
            },
            ...mapActions({
                showALLMes: types.MC_A_SHOW_ALLMES,
                showReadedMes: types.MC_A_SHOW_READED,
                showNoReadMes: types.MC_A_SHOW_NOREAD,
                showSysMes: types.MC_A_SHOW_SYSMES,
                //删除已读消息
                delreadMes: types.MC_A_DELREAD_MES,
                //改变消息列表选中值
                changeSelect: types.MC_A_CHANGE_SELECT,
            })
        },
        computed: {}
    };
</script>
<style scoped>
    .jcy_upper {
        margin: 0 auto;
        max-width: 1920px;
        min-width: 1440px;
        height: 126px;
        background-color: #222;
    }

    .jcy_upper .inner {
        height: 126px;
    }

    .jcy_upper .inner::after {
        content: '';
        display: block;
        clear: both;
    }

    .jcy_upper .left {
        float: left;
        width: 400px;
        padding: 36px 0 20px;
    }

    .jcy_upper .left h2 {
        height: 50px;
        font-size: 36px;
        line-height: 50px;
        text-align: left;
        color: #fff;
    }

    .jcy_upper .left p {
        color: #009DF5;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        height: 20px;
        cursor: pointer;
    }

    .jcy_upper .right {
        width: 714px;
        float: left;
        padding: 86px 0 20px 44px;
    }

    .jcy_upper .right ul {
        height: 40px;
    }

    .jcy_upper .right ul li {
        float: left;
        padding: 0 25px;
        height: 40px;
        font-size: 14px;
        line-height: 20px;
        color: #aaa;
        position: relative;
        cursor: pointer;
    }

    .jcy_upper .right ul li span {
        position: absolute;
        font-size: 0px;
        border-color: transparent;
        border-width: 6px 9px 6px 9px;
        border-style: solid;
        border-bottom-color: #fff;
        left: 50%;
        margin-left: -9px;
        top: 28px;
        display: none;
        cursor: auto;
    }

    .jcy_upper .right ul li.active {
        color: #fff;
    }

    .jcy_upper .right ul li.active span {
        display: block;
    }
</style>