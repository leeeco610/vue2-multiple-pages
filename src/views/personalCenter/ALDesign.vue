<template>
    <div class="al_design">
        <!--切换显示内容的标题组件-->
        <div class="ceil"><DGOrcomment></DGOrcomment></div>
        <!--作品组件-->
        <DGShow v-if="active_show === 0 "></DGShow>
        <!--评论组件-->
        <DGComment v-if="active_show === 1"></DGComment>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import DGOrcomment from './DGOrcomment';
    import DGShow from './DGShow';
    import DGComment from './DGComment';
    export default {
        name: 'al_design',
        components: {
            DGOrcomment,
            DGShow,
            DGComment
        },
        computed: {
                //得到当前显示内容状态
                ...mapState({
                    active_show: state => state.personalCenter.active_show
                })
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .al_design{
        margin-top:50px;
        width: 895px;
        overflow: hidden;
        .ceil{
            height: 29px;
            border-bottom: 1px solid #eee;
        }
    }
    .al_design::after{
        content:"";
        display: block;
        clear: both;
    }
</style>