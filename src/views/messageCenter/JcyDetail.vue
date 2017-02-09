<!--被选中查看消息的详细内容以及回复组件-->
<template>
    <div v-show="detail_show" class="jcy_detail">
        <!--消息的标题-->
        <div class="detail-head">
            <img :src="des_headImg" class="des-head">
            <h3>{{ message.title }}</h3>
        </div>
        <!--消息的查看时间以及内容-->
        <div class="msg">
            <p class="watch-time"><span>{{ message.time }}</span><span class="watch"
                                                                       v-if="message.from !== 'system'">查看</span></p>
            <p class="msg-content">{{ message.content }}</p>
        </div>
        <div v-if="message.from !== 'system'" class="answer">
            <ul>
                <!--消息的回复时间以及内容-->
                <li v-for="item in message.answer">
                    <p class="answer-time">{{ item.answerTime }}</p>
                    <p class="answer-info">{{ item.answerInfo }}</p>
                </li>
            </ul>
        </div>
        <div class="input" v-if="message.from !== 'system'">
            <textarea name="" id="" placeholder="请输入回复的内容"></textarea>
        </div>

    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import * as types from '../../store/types';

    export default {
        name: 'jcy_detail',
        //   消息数据
        data () {
            return {};
        },

        computed: mapState({
            detail_show: state => state.messageCenter.detail_show,
            message: state => state.messageCenter.detail_message,
            des_headImg: state => state.headMessage.data.header_pic,
        })
    };
</script>
<style scoped>
    .jcy_detail {
        overflow: hidden;
    }

    .jcy_detail .detail-head {
        padding: 18px 20px;
        border-bottom: 1px solid #eee;
    }

    .jcy_detail .des-head {
        float: left;
        margin-right: 20px;
        width: 28px;
        height: 28px;
        border-radius: 14px;
        background-color: orange;
        font-size: 0px;
    }

    .jcy_detail .detail-head h3 {
        text-align: left;
        color: #222;
        font-size: 18px;
        line-height: 28px;
    }

    /*.jcy_detail h3::before {*/
    /*content: '';*/
    /*padding: 14px;*/
    /*margin-right: 20px;*/
    /*background-color: orange;*/
    /*font-size: 0px;*/
    /*position: relative;*/
    /*bottom: 4px;*/
    /*}*/

    .jcy_detail .msg {
        padding: 20px;
        overflow: hidden;
        text-align: left;
    }

    .jcy_detail .msg .watch-time {
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        margin-bottom: 4px;
        color: #aaa;
    }

    .jcy_detail .msg .watch-time .watch {
        margin-left: 4px;
        color: #009df5;
        cursor: pointer;
    }

    .jcy_detail .msg .msg-content {
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        color: #666;
    }

    .jcy_detail .answer ul li {
        text-align: right;
        margin-bottom: 10px;
    }

    .jcy_detail .answer ul li .answer-time {
        color: #aaa;
        font-size: 12px;
        margin-bottom: 4px;
        line-height: 16px;
    }

    .jcy_detail .answer ul li .answer-info {
        color: #666;
        font-size: 14px;
        line-height: 20px;
    }

    .jcy_detail .input {
        overflow: hidden;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

    .jcy_detail .input textarea {
        resize: none;
        padding: 12px 16px;
        border: 1px solid #eee;
        border-radius: 4px;
        background-color: #f6f6f6;
        width: 728px;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
    }


</style>