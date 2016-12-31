<!--消息内容组件，由左边的列表和右边的详细组件组成-->
<template>
    <div class="jcy_content">
        <div class="inner">
            <div class="left">
                <!--列表组件-->
                <JcyList></JcyList>
            </div>
            <div class="right">
                <!--详细组件-->
                <JcyDetail></JcyDetail>
            </div>
        </div>
    </div>
</template>
<script>
    import JcyList from './JcyList';
    import JcyDetail from './JcyDetail';
    export default {
        name: 'jcy_content',
        components: {
            JcyList,
            JcyDetail
        }
    };
</script>
<style scoped>
    .left {
        float: left;
        width: 400px;
        overflow: hidden;
    }

    .right {
        float: left;
        width: 800px;
        overflow: hidden;
    }
</style>