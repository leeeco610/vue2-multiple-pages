<!--头部组件，可以共享使用-->
<template>
    <div class="mc_header">
            <!--logo组件-->
            <HDLogo></HDLogo>
            <!--头部导航-->
            <HDNav></HDNav>
            <!--用户信息组件-->
            <HDUser></HDUser>
        </div>
</template>

<script>
    import store from '../store'
    import HDLogo from './HDLogo';
    import HDNav from './HDNav';
    import HDUser from './HDUser';
    export default {
        name: 'mc_header',
        components: {
            HDLogo,
            HDNav,
            HDUser
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mc_header{
        position: relative;
        margin: 0 auto;
        color: #fff;
        max-width: 1920px;
        min-width: 1440px;
        height: 72px;
        background-color: #222;
        border-bottom: 1px solid #393939;
        letter-spacing: 0px;
    }
    /*组件细分，将logo单独细分为一个组件*/
    /*.mc_header .logo{*/
        /*float: left;*/
        /*width: 128px;*/
        /*height: 28px;*/
        /*padding: 20px 36px 24px;*/
    /*}*/
    /*.mc_header .logo a{*/
        /*display: block;*/
        /*height: 28px;*/
        /*background-color: yellow;*/

    /*}*/
    /*.mc_header .logo a h1{*/
        /*height: 28px;*/
        /*text-indent: -999px;*/
        /*font-size: 0px;*/
    /*}*/
    /*单独作为头部导航分出去了*/
    /*.mc_header .nav{*/
        /*float: left;*/
        /*width: 725px;*/
        /*height: 72px;*/
        /*padding-left:315px;*/
    /*}*/
    /*.mc_header .nav ul{*/
        /*height: 72px;;*/
    /*}*/
    /*.mc_header .nav ul li{*/
        /*float: left;*/
        /*height: 72px;*/
    /*}*/
    /*.mc_header .nav ul li a{*/
        /*display: block;*/
        /*color: #fff;*/
        /*font-size:14px;*/
        /*line-height:20px;*/
        /*padding: 24px 25px 28px;*/
        /*letter-spacing: 0px;*/
    /*}*/
    /*细分为单独的组件*/
    /*.mc_header .user{*/
        /*font-size:14px;*/
        /*line-height:20px;*/
        /*float: left;*/
        /*width: 154px;*/
        /*height: 72px;*/
        /*padding: 0px 36px 0px 10px;*/
    /*}*/
    /*.mc_header .user::after{*/
        /*content: '';*/
        /*display: block;*/
        /*clear:both;*/
    /*}*/
    /*.mc_header .user p{*/
        /*float: left;*/
        /*display: inline-block;*/
    /*}*/
    /*.mc_header .user p.news{*/
        /*padding: 28px 0px 24px;*/
        /*width: 24px;*/
        /*height: 20px;*/
        /*margin-right:36px;*/
        /*position: relative;*/
    /*}*/
    /*.mc_header .user p.news .el-icon-message{*/
        /*-webkit-transform: scale(1.5,1.75);*/
        /*-moz-transform:scale(1.5,1.75);*/
        /*-ms-transform: scale(1.5,1.75);*/
        /*-o-transform: scale(1.5,1.75);*/
        /*transform: scale(1.5,1.75);*/
    /*}*/
    /*.mc_header .user p.news .count{*/
        /*position: absolute;*/
        /*width: 14px;*/
        /*height: 14px;*/
        /*border-radius: 50%;*/
        /*background-color: #FF5522;*/
        /*line-height: 14px;*/
        /*text-align: center;*/
        /*font-size:12px;*/
        /*top: 21px;*/
        /*left: 14px;*/
    /*}*/
    /*.mc_header .user p.figure{*/
        /*height: 24px;*/
        /*padding: 26px 0 22px;*/
        /*margin-right: 58px;*/
        /*position: relative;*/
    /*}*/
    /*.mc_header .user p.figure .pic{*/
        /*display: block;*/
        /*width: 24px;*/
        /*height: 24px;*/
        /*background-color: green;*/
        /*border-radius: 50%;*/
    /*}*/
    /*.mc_header .user p.figure .nick{*/
        /*position: absolute;*/
        /*top: 26px;*/
        /*left: 32px;*/
        /*height: 24px;*/
        /*width: 42px;*/
        /*font-size:14px;*/
        /*line-height:24px;*/
        /*overflow: hidden;*/
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/
    /*}*/
    /*.mc_header .user p.arrow{*/
        /*width: 12px;*/
        /*height: 8px;*/
        /*padding: 34px 0 30px;*/
    /*}*/
    /*.mc_header .user p.arrow span{*/
        /*display: block;*/
    /*}*/

</style>