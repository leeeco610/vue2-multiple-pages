<template>
    <div class="pc_banner">
        <!--头部组件-->
        <PCHeader></PCHeader>
    </div>
</template>
<script>
    import PCHeader from './PCHeader';
    export default {
        name: 'pc_banner',
        components: {
            PCHeader
        }
    }
</script>
<style scoped>
    .pc_banner{
        min-width: 1440px;
        max-width: 1920px;
        margin: 0 auto;
        height: 340px;
        background: url(http://publicst.jcy.cc/pc_master/img/pcbg.png) no-repeat center top;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>