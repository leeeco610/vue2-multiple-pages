<template>
    <div class="oc_table">
        <div class="inner">
            <!--表头组件-->
            <TBCaption></TBCaption>
            <!--分隔线-->
            <div class="line"></div>
            <!--表格内容组件-->
            <TBBody></TBBody>
        </div>
    </div>
</template>
<script>
    import TBCaption from './TBCaption';
    import TBBody from './TBBody';

    export default {
        name: 'oc_table',
        components:{
            TBCaption,
            TBBody
        }
    };
</script>
<style scoped>
    .oc_table{
        max-width: 1920px;
        min-width: 1440px;
        margin: 0 auto;
        padding-top: 50px;
    }
    .oc_table .inner{
        border:  1px solid #eee;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        border-radius:4px;
        background-color: #f6f6f6;
    }
    .oc_table .line{
        height: 1px;
        background-color: #000;
        border-radius: 4px;
        opacity: 0.1;
    }
</style>