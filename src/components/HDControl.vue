<template>
    <div class="hd_control" @mouseover.stop.prevent="toShow" @mouseout.stop.prevent="toHide">
        <div class="shape">
            <a href="/ucenter/designer/yuyue-ordersCenter.html" class="hoverChange" style="display:block;"> <p class="orderCount">{{ ordersCount|| 0 }}</p>
                <a href="/ucenter/designer/yuyue-ordersCenter.html" class="order">订单中心</a>
            </a>
            <!--分隔线-->
            <p class="blackLine"></p>
            <p class="whiteLine"></p>
            <div class="box">
                <a href="/ucenter/designer-personalCenter.html" class="left">个人中心</a>
                <span class="whiteBetween"></span>
                <span class="blackBetween"></span>
                <a href="/ucenter/designer/verify-forwardPerson.html" class="right">修改资料</a>
            </div>
            <p class="blackLine"></p>
            <p class="whiteLine"></p>
            <a href="/ucenter/designer/verify-uploadCase.html" class="container">
                <p class="title">发布案例</p>
                <p class="icon"><img src="http://publicst.jcy.cc/pc_master/img/upload.png" alt="上传"></p>
            </a>
            <p class="blackLine"></p>
            <p class="whiteLine"></p>
            <a href="javascript:void(0);" class="container">
                <p class="title">收藏</p>
                <p class="icon"><img src="http://publicst.jcy.cc/pc_master/img/favorite.png" alt="收藏"></p>
            </a>
            <p class="blackLine"></p>
            <p class="whiteLine"></p>
            <a href="/passport-loginout.html" class="container">
                <p class="title">注销</p>
                <p class="icon"><img src="http://publicst.jcy.cc/pc_master/img/exit.png" alt="注销"></p>
            </a>
            <!--三角形-->
            <span class="arrow"></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "hd_control",
        props: ["ordersCount"],
        computed: {
            targetUrl: function () {
                return window.location.pathname.match(/personalCenter.html$/) ? 'javascript:void(0)':'/ucenter/designer-personalCenter.html';
            }
        },
        methods: {
            toShow: function () {
                this.$store.commit("hd.m.control_show")
            },
            toHide: function () {
                this.$store.commit("hd.m.control_hide")
            },
        }
    };
</script>
<style scoped lang="less" rel="stylesheet/less">
    .hd_control{
        position: absolute;
        left: -75px;
        top: 66px;
        width: 240px;
        height: 264px;
        font-size:12px;
        color: #aaa;
        .shape{
            text-align: left;
            position: absolute;
            padding: 12px 20px 0 20px;
            left: 0;
            bottom: 0;
            height: 244px;
            width: 200px;
            background-color: #222;
            -webkit-border-radius:4px;
            -moz-border-radius:4px;
            border-radius:4px;
            -webkit-box-shadow:  0px 4px 8px 0px rgba(0,0,0,0.16);
            -moz-box-shadow:  0px 4px 8px 0px rgba(0,0,0,0.16);
            box-shadow:  0px 4px 8px 0px rgba(0,0,0,0.16);
            .hoverChange:hover {
                a{
                    color: #fff;
                }
            }
            .arrow{
                position: absolute;
                width: 3px;
                font-size:0px;
                border-color: transparent;
                border-width: 8px 12px 8px 12px;
                border-bottom-color: #222;
                border-style: solid;
                top: -16px;
                right: 16px;
            }
            a.container{
                display: block;
                color: #aaa;
            }
            a.order{
                display: block;
                height: 16px;
                margin-bottom:12px;
                color: #666;
                font-size:12px;
                line-height:16px;
            }
            p.orderCount{
                color: #fff;
                line-height:32px;
                font-size:24px;
                letter-spacing:0px;

            }
            p.whiteLine{
                width: 200px;
                height: 1px;
                background-color: #fff;
                opacity: 0.1;
            }
            p.blackLine{
                width: 200px;
                height: 1px;
                background-color: #000;
            }
            .box{
                width: 200px;
                overflow: hidden;
                line-height:44px;
                text-align: center;
                a{
                    color: #aaa;
                    font-size:12px;
                    float: left;
                    width: 99px;
                }
                span{
                    float: left;
                    height: 44px;
                    width: 1px;
                }
                span.whiteBetween{
                    background-color: #fff;
                    opacity: 0.1;
                }
                span.blackBetween{
                    background-color: #000;
                }
            }
            a:hover{
                color: #fff;
            }
            .container{
                line-height: 44px;
                width: 200px;
                overflow: hidden;
                .title{
                    float: left;
                }
                .icon{
                    float: right;
                }
            }
        }
    }
</style>