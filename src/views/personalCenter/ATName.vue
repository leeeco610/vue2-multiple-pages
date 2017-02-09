<template>
    <div class="at_name">
        <h2>{{ designer_name }}</h2>
        <a v-if="real_name" href="javascript:void(0)"><img :src="isReal" title='已实名认证'></a>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'at_name',
        computed: {
            // 从状态中映射姓名和是否认证的状态
                ...mapState({
                    designer_name: state => state.personalCenter.data.designer_primary ? state.personalCenter.data.designer_primary.designer_name : undefined,
                    real_name: state => state.personalCenter.data.designer_primary ? state.personalCenter.data.designer_primary.real_name : undefined
                }),
                isReal: function () {
                    return encodeURI(this.rlUrl);
                }
        },
        data () {
            return {
                rlUrl: "http://st.jcy.cc/实名认证icon.png",
                unrlUrl:"http://st.jcy.cc/机构认证icon.png"

            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .at_name{
        position: absolute;
        left: 50%;
        /*margin-left:-40px;*/
        transform: translateX(-50%);
        bottom:80px;
        /*width: 80px;*/
        font-size:18px;
        text-align: center;
        h2{
            /*float: left;*/
            display:inline-block;
            font-weight:700;
            color: #222;
            font-size:18px;
            line-height:24px;
            margin-right:8px;
        }
        a{
            display:inline-block;
        }
        img{
            vertical-align: middle;
        }
    }
</style>