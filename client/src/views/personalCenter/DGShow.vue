<template>
    <div class="dg_show">
        <!--上传案例组件-->
        <SWUpload></SWUpload>
        <template v-for="(item,index) in samples">
            <!--案例组件-->
            <SWCase :caseDetail="item" :idx="index" style="margin-left: 20px;margin-bottom: 20px;"></SWCase>
        </template>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import SWUpload from './SWUpload';
    import SWCase from './SWCase';
    export default {
        name: 'dg_show',
        computed: {
            // 从状态中映射组件数据
                ...mapState({
                    samples: state => state.personalCenter.data.samples
                })
        },
        components: {
            SWUpload,
            SWCase
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .dg_show{
        padding-top:20px;
        width: 895px;
        overflow: hidden;
    }
    .dg_show::after{
        content: "";
        display: block;
        clear: both;
    }
</style>