<template>
    <div class="up_container">
        <div class="left">
            <!--标题组件-->
            <UPTitle></UPTitle>
            <!--解释组件-->
            <UPExplain></UPExplain>
        </div>
        <div class="right">
            <!--搜索组件-->
            <UPSearch></UPSearch>
        </div>
    </div>

</template>
<script>
    import UPTitle from './UPTitle';
    import UPExplain from './UPExplain';
    import UPSearch from './UPSearch';
    export default {
        name: 'up_container',
        components: {
            UPTitle,
            UPExplain,
            UPSearch
        }
    };
</script>
<style scoped lang="less" rel="stylesheet/less">
    .up_container{
        text-align: left;
        color: #fff;
        height: 171px;
        padding: 36px 0 15px;
        .left{
            float: left;
            width: 936px;

        }
        .right{
            float: left;
            width: 264px;
            padding-top:76px;
        }
    }
    .up_container::after{
        content: '';
        display: block;
        clear: both;
    }
</style>