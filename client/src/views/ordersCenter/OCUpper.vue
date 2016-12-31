<!--订单中心上部组件-->
<template>
    <div class="oc_upper">
        <div class="ceil">
            <div class="inner">
                <UPContainer></UPContainer>
            </div>
        </div>
        <div class="floor">
            <div class="inner">
                <!--切换表格显示内容的组件-->
                <UPNav></UPNav>
            </div>
        </div>
    </div>
</template>
<script>
    import UPContainer from './UPContainer';
    import UPNav from './UPNav';

    export default {
        name: 'oc_upper',
        components: {
            UPContainer,
            UPNav
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .oc_upper{
        min-width: 1440px;
        max-width: 1920px;
        margin: 0 auto;
        height: 232px;
        background-color: #222;
        .ceil{
            height: 171px;
            border-bottom: 1px solid #393939;
        }
        .floor{
            height: 60px;
        }
    }
</style>