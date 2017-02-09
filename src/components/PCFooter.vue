<template>
    <div class="pc_footer" ref="footer">
        <!--底部导航组件-->
        <FTNav></FTNav>
        <!--版权信息组件-->
        <FTCopyright></FTCopyright>
    </div>
</template>
<script>
    import FTNav from './FTNav';
    import FTCopyright from './FTCopyright';
    export default {
        name: 'pc_footer',
        components: {
            FTNav,
            FTCopyright
        },
        mounted() {
            this.$store.state.personalCenter.footer_scrollTop = this.$refs.footer.offsetTop;
        }
    }
</script>
<style scoped>
    .pc_footer{
        position: relative;
        z-index: 99;
        max-width: 1920px;
        min-width: 1440px;
        height: 64px;
        margin: -64px auto 0;
        background-color: #222;
    }
</style>