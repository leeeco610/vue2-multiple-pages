<template>
    <div class="at_fame">
        <div>
            <p class="num">{{ popularity || 0 }}</p>
            <p>人气</p>
        </div>
        <span></span>
        <div class="last">
            <p class="num">{{ likes || 0 }}</p>
            <p>收到赞</p>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'at_fame',
        computed: {
            // 从状态中映射得到人气与收到赞的数据
            ...mapState({
                popularity: state => state.personalCenter.data.designer_primary ? state.personalCenter.data.designer_primary.popularity : undefined,
                likes: state => state.personalCenter.data.designer_primary ? state.personalCenter.data.designer_primary.likes : undefined
            })
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .at_fame{
        position: absolute;
        bottom: 0;
        left: 20px;
        color:#666;
        border: 1px solid #eee;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        border-radius:4px;
        width: 262px;
        height: 62px;
        div{
            float: left;
            width: 131px;
            padding-top:12px;
            padding-bottom: 12px;
            p{
                text-align: center;
                font-size: 12px;
                line-height:16px;
                height: 16px;
            }
            p.num{
                font-size:18px;
                line-height:24px;
                height: 24px;
            }
        }
        div.last{
            float: right;
        }
        span{
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -11px;
            margin-left:-1px;
            width: 0;
            height: 22px;
            border-left: 2px dotted #ccc;
        }
    }
</style>