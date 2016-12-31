<template>
    <div class="at_editor">
        <img :src="header_pic">
        <a class="mask" :href="'/' + edit_url"></a>
        <a class="word"  :href="'/' + edit_url">编辑资料</a>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'at_editor',
        data() {
            return {
                pic_replace: "http://publicst.jcy.cc/pc_master/img/head_pic.png"
            }
        },
        computed: {
            // 状态中的头像数据
                ...mapState({
                    header_pic: state =>state.personalCenter.data.designer_primary ? state.personalCenter.data.designer_primary.header_pic : undefined
                }),
                ...mapState({
                    edit_url: state =>state.personalCenter.data.intro ? state.personalCenter.data.intro.anchor : undefined
                })
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .at_editor{
        position: relative;
        left: 50%;
        top: -100px;
        margin-left: -80px;
        width: 160px;
        height: 160px;
        z-index: 999;
        background: #F6F6F6;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.08);
        img{
            width: 144px;
            height: 144px;
            border: 8px solid #fff;
        }
        .mask{
            position: absolute;
            width: 160px;
            height: 160px;
            left: 0;
            top: 0;
            line-height:160px;
            text-align: center;
            background: #000;
            opacity:0.5;
            display: none;
            color: #fff;
        }
        .word{
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            display: none;
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            cursor: pointer;
        }
        &:hover span{
             display: block;
         }
        &:hover a{
             display: block;
         }
    }
</style>