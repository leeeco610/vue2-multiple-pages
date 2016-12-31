<template>
    <div class="ft_nav">
        <ul>
            <li v-for="item in items">
                <a :href="item.url">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'ft_nav',
        data () {
            return {
                items: [
                    {
                        title: "关于我们",
                        url: "/index-about.html"
                    },
                    {
                        title: "商务合作",
                        url: "/index-contact.html"
                    },
                    {
                        title: "改变世界",
                        url: "/index-join.html"
                    },
                    {
                        title: "使用条款",
                        url: "/index-permit.html"
                    }
                ]
            };
        }
    };
</script>
<style scoped lang="less" rel="stylesheet/less">
    .ft_nav{
        float: left;
        padding: 0 36px;
        ul{
            overflow: hidden;
            li{
                float: left;
                margin-right:32px;
                a{
                    display: block;
                    height: 64px;
                    font-size:12px;
                    color: #ccc;
                    line-height:64px;
                }
            }
        }
    }
</style>