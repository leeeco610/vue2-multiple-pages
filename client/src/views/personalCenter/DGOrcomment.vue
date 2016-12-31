<template>
    <div class="dg_orComment">
        <template v-for="(item,index) in title">
            <span :class="{cur: active_show === index }" @click="toggleShow(index)">{{ item }}</span>
        </template>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'dg_orComment',
        computed: {

        },
        computed: {
            //得到当前显示内容状态
            ...mapState({
                active_show: state => state.personalCenter.active_show
            })
        },
        methods: {
            // 切换显示内容
            toggleShow(idx) {
                this.$store.commit('pc.m.toggle_show', idx);
            }
        },
        data () {
            return {
                title: [
                    "作品",
                    "评论"
                ]
            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .dg_orComment{
        margin: 0 auto;
        width: 144px;
        span{
            position: relative;
            z-index: 3;
            float: left;
            color: #222;
            font-size: 14px;
            line-height: 20px;
            padding: 0px 4px 9px;
            margin-left: 18px;
            margin-right: 18px;
            border-bottom: 1px solid transparent;
            cursor: pointer;
        }
        span.cur{
            color: #009df5;
            border-bottom: 1px solid #009df5;
        }
    }
</style>