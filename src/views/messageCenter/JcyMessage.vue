<!--消息中心组件，由顶部与下面的内容组件组成-->
<template>
    <div class="jcy_message">
        <JcyContent></JcyContent>
    </div>
</template>
<script>

    import JcyContent from './JcyContent';
    export default {
        name: 'jcy_message',
        components: {
            JcyContent
        }
    };
</script>
<style scoped>
    .jcy_message{
        max-width: 1920px;
        min_width: 1440px;
        margin: 0 auto;
        overflow: hidden;
    }
</style>