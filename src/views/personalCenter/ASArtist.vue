<template>
    <div class="as_artist">
        <!--头像组件，跳转编辑页面-->
        <ATEditor></ATEditor>
        <!--姓名组件-->
        <ATName></ATName>
        <!--人气组件-->
        <ATFame></ATFame>
    </div>
</template>
<script>
    import ATEditor from './ATEditor';
    import ATName from './ATName';
    import ATFame from './ATFame';
    export default {
        name: 'as_artist',
        components: {
            ATEditor,
            ATName,
            ATFame
        }
    }
</script>
<style scoped>
    .as_artist{
        position: relative;
        padding-left:20px;
        padding-right:20px;
        margin-bottom:20px;
        height: 180px;
    }
</style>