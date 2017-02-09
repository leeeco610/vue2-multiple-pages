<template>
    <div class="m_aticle" ref="aticle">
        <!--暂时不显示此模块-->
        <ALInformation></ALInformation>
        <!--设计作品或评论组件-->
        <ALDesign></ALDesign>
    </div>
</template>
<script>
    import ALInformation from './ALInformation';
    import ALDesign from './ALDesign';
    export default {
        name: 'm_aticle',
        components: {
            ALInformation,
            ALDesign
        }
    }
</script>
<style scoped>
    .m_aticle{
        float: right;

        padding-top: 20px;

        width: 895px;
    }
</style>