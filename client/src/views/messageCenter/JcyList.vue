<!--设计师收到的所有消息列表-->
<template>
    <div class="jcy_list" ref="jcy_list">
        <transition-group name="list" tag="ul">
            <!--<ul>-->
            <!--循环渲染-->
            <li v-for="(item,index) in des_list" @click="selected(index)"
                :class="{active: activeIndex === item.message_id}" :key="index">
                <!--如果是系统发送的消息则有特殊标记，否则没有-->
                <h3><span class="from" v-if="item.from === 'system'">系统</span>{{ item.title }}</h3>
                <span class="sign" v-if="item.read == 0"></span>
                <p class="content">{{ item.content }}</p>
                <span class="time">{{ item.short_time }}</span>
                <p class="delete" @click.stop="delete_mes(index)"><span>删除</span><span class="el-icon-delete"></span>
                </p>
            </li>
            <!--</ul>-->
        </transition-group>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import * as types from '../../store/types';

    export default {
        name: 'jcy_list',
        data () {
            return {};
        },
        created(){
            let uid = this.getCookie('JHome-uid');
            //加载时获取数据
            this.getDesMessage(uid);
            this.$nextTick(function () {
                this.initCSS()
            });
        },
        methods: {
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
            // 初始化时根据屏幕高度改变消息列表的maxHeight
            initCSS: function () {
                let winH = window.innerHeight;
                let headH = this.$refs.jcy_list.offsetTop;
                this.$refs.jcy_list.style.maxHeight = `${winH - headH - 100}px`;
            },
            selected: function (index) {
                if (this.des_list[index]) {
                    let read = this.des_list[index].read;
                    let message_id = this.des_list[index].message_id;
                    this.changeSelect(message_id);
                    this.showDetail(index);
                    //顶部未读计数减少
                    if (read == 0) {
                        this.subNoreadMes();
                    }
                }
            },
            delete_mes: function (index) {
                let read = this.des_list[index].read;
                //选中变化
                if (this.activeIndex === index) {
                    this.changeSelect('');
                }
                //顶部未读计数减少
                if (read == 0) {
                    this.subNoreadMes();
                }
                this.deleteMes(index);
            },
            ...mapActions({
                //获取页面数据
                getDesMessage: types.MC_A_ALL_MESSAGE,
                //显示消息详情
                showDetail: types.MC_A_SHOW_DETAIL,
                //减少头部未读消息数量
                subNoreadMes: types.HD_A_SUB_NOREADMES,
                //删除消息
                deleteMes: types.MC_A_DELETE_MES,
                // 改变消息列表选中值
                changeSelect: types.MC_A_CHANGE_SELECT,
            }),

        },
        computed: {
            ...mapState({
                des_list: state => state.messageCenter.des_list,
                activeIndex: state => state.messageCenter.listAcIndex,
            }),
        }
    };
</script>
<style scoped>
    .jcy_list {
        box-sizing: border-box;
        width: 400px;
        min-height: 425px;
        max-height: 600px;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: 1px solid #eee;
    }

    .jcy_list ul {
        overflow: hidden;
    }

    .jcy_list li {
        position: relative;
        padding: 20px;
        height: 44px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        transition: all .5s;
    }

    .jcy_list li.active {
        background-color: #f6f6f6;
    }

    .jcy_list li.list-enter, .list-leave-active {
        opacity: 0;
        transform: translateX(-10px);
    }

    .jcy_list li.list-move {
        transition: transform .5s;
    }

    .jcy_list li h3 {
        float: left;
        max-width: 300px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #222;
        text-align: left;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .jcy_list li p.content {
        height: 16px;
        width: 308px;
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        margin-top: 8px;
        color: #aaa;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .jcy_list li span.time {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 12px;
        line-height: 16px;
        height: 16px;
        width: 34px;
        color: #aaa;
    }

    .jcy_list li p.delete {
        position: absolute;
        right: 20px;
        top: 20px;
        display: none;
        font-size: 14px;
        line-height: 20px;
        color: #aaa;
    }

    .jcy_list li:hover p.delete {
        display: block;
    }

    .jcy_list li:hover p.delete span:hover {
        color: #009df5;
    }

    .jcy_list li:hover span.time {
        display: none;
    }

    .jcy_list li h3 .from {
        padding-left: 4px;
        padding-right: 4px;
        margin-right: 4px;
        width: 20px;
        height: 14px;
        border-radius: 3px;
        background-color: #fbc700;
        font-size: 10px;
        line-height: 20px;
        color: #fff;
        vertical-align: middle;
    }

    .jcy_list li .sign {
        float: left;
        margin-top: 6px;
        margin-left: 4px;
        font-size: 0px;
        padding: 4px;
        vertical-align: middle;
        background-color: #ff5522;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
</style>