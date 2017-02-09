<template>
    <div class="pc_main" ref="pc_main">
        <div class="inner">
            <!--左侧边栏组件-->
            <MAside></MAside>
            <!--右边内容组件-->
            <MAticle></MAticle>
        </div>
    </div>
</template>
<script>
    import MAside from './MAside';
    import MAticle from './MAticle';
    export default {
        name: 'pc_main',
        created() {
            // 得到全部数据，进行状态管理
            let uid = this.getCookie('JHome-uid');
            this.$store.dispatch("actionP",uid);
        },
        components: {
            MAside,
            MAticle
        },
        methods: {
            getCookie: function (NameOfCookie) {
                if (document.cookie.length > 0) {
                    let begin = document.cookie.indexOf(NameOfCookie + "=");
                    if (begin != -1) {
                        begin += NameOfCookie.length + 1;//cookie值的初始位置
                        let end = document.cookie.indexOf(";", begin);//结束位置
                        if (end == -1) end = document.cookie.length;//没有;则end为字符串结束位置
                        return decodeURI(document.cookie.substring(begin, end));
                    }
                }
                return null;
            }
        }
    }
</script>
<style scoped>
    .pc_main{
        min-width: 1440px;
        max-width: 1920px;
        /*padding-top: 20px;*/
        padding-bottom: 64px;
        margin: 0 auto;
    }
    .pc_main .inner{
        overflow: visible;
    }
    .pc_main .inner:after{
        content: '';
        display: block;
        clear:both;
    }
</style>