<template>
    <div class="pc_header">
        <!--头部logo组件-->
        <HDLogo></HDLogo>
        <!--头部导航组件，place属性是控制器内部样式的开关，两种样式设计-->
        <HDNav :place="isShow"></HDNav>
        <!--头部用户信息组件-->
        <HDUser :place="isShow"></HDUser>
        <!--头部搜索组件-->
        <div class="spe" v-show="isShow"><HDSearch></HDSearch></div>

    </div>
</template>
<script>
    import HDLogo from '../../components/HDLogo';
    import HDNav from '../../components/HDNav';
    import HDUser from '../../components/HDUser';
    import HDSearch from './HDSearch';
    export default {
        name: 'pc_header',
        components: {
            HDLogo,
            HDNav,
            HDUser,
            HDSearch
        },
        data () {
            return {
                //    注意ishow值是头部样式控制开关，一旦设置为true，除logo组件外，其它三个组件样式（位置）都会变化。搜索组件会显示。
                isShow:false
            };
        }
    };
</script>
<style scoped>
    .pc_header{
        letter-spacing: 0px;
        position: relative;
        width: 100%;
        padding-top: 4px;
        height: 196px;
        margin: 0 auto;
        color: #fff;
        background-image: -webkit-linear-gradient(rgba(34,34,34,0.50) 0%, rgba(34,34,34,0.00) 100%);
        background-image: -ms-linear-gradient(rgba(34,34,34,0.50) 0%, rgba(34,34,34,0.00) 100%);
        background-image: -o-linear-gradient(rgba(34,34,34,0.50) 0%, rgba(34,34,34,0.00) 100%);
        background-image: -moz-linear-gradient(rgba(34,34,34,0.50) 0%, rgba(34,34,34,0.00) 100%);
    }
    /*.pc_header .logo{*/
        /*position: absolute;*/
        /*left: 0;*/
    /*}*/
    .pc_header .spe{
        height: 44px;
        width: 264px;
        padding: 16px 36px 12px 0px;
        position: absolute;
        right: 0;
    }
</style>