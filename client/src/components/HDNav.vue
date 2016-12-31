<template>
    <div class="nav" :class="{other: place}">
        <ul>
            <li v-for="item in items">
                <a :href="item.url">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'hd_nav',
        props: ["place"],// 样式控制数据，切换为不同的类
        data () {
            return {
                items : [
                    {
                        title: "首页",
                        url: "/"
                    },
                    {
                        title: "串门",
                        url: "/case.html"
                    },
                    {
                        title: "家喻户晓",
                        url: "/jyhx.html"
                    },
//                    {
//                        title: "看案例",
//                        url: "#"
//                    },
//                    {
//                        title: "立即预约",
//                        url: "#"
//                    },
                    {
                        title: "选设计师",
                        url: "/designer.html"
                    },
                    {
                        title: "家资讯",
                        url: "/article.html"
                    },
                    {
                        title: "微致",
                        url: "/weizhi.html"
                    },
//                    {
//                        title: "设计抢单",
//                        url: "#"
//                    }
                ]
            };
        }
    };
</script>
<style scoped lang="less" rel="stylesheet/less">
    .nav{
        /*float: left;*/
        margin: 0 auto;

        width: 538px;
        height: 72px;
        ul{
            height: 72px;
            li{
                float: left;
                height: 72px;
                a{
                    display: block;
                    padding:24px 25px 28px;
                    color: rgba(255,255,255,1);
                    font-size:14px;
                    line-height:20px;
                    letter-spacing: 0px;
                    &:hover{
                        color:rgba(255,255,255,0.5);
                    }
                }
            }
        }
    }
    div.other{
        margin:0;
        position: absolute;
        left: 360px;
        top: 0;
    }
</style>