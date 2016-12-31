<template>
    <div class="up_nav">
        <ul>
            <template v-for="value in items">
                <li :class="{cur: value.status === activeStatus}" @click="selected(value.status)">
                    {{ value.title }}
                    <span></span>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'up_nav',
        data () {
            return {
                items : [
                    {
                        title: "全部",
                        status: 0
                    },
                    {
                        title: "约谈中",
                        status: 1
                    },
                    {
                        title: "平面图",
                        status: 2
                    },
                    {
                        title: "施工图",
                        status: 3
                    },
                    {
                        title: "已完成",
                        status: 4
                    },
                    {
                        title: "已取消",
                        status: 5
                    }
                ]
            }
        },
        methods: {
            selected(s) {
                // 点击导航项目，发送过滤方式，字段
                this.$store.commit("oc.m.filter_order", s);
            }
        },
        computed: {
            ...mapGetters({
                // 得到过滤后指令
                orders: 'oc.g.all_order'
            }),
            activeStatus() {
                return this.$store.state.ordersCenter.active_status;
            }
        },
    };
</script>
<style scoped lang="less" rel="stylesheet/less">
    .up_nav{
        display: inline-block;
        font-size:14px;
        line-height: 20px;
        margin: 0 auto;
        color: #aaa;
        &::before{
             display: block;
             content: '';
            clear: both;
         }
         li{
             float: left;
             position: relative;
             font-size:14px;
             padding: 20px 18px;
             line-height:20px;
             height: 20px;
             cursor: pointer;
             span{
                 position: absolute;
                 font-size: 0px;
                 border-color: transparent;
                 border-width: 6px 9px 6px 9px;
                 border-style: solid;
                 border-bottom-color: #fff;
                 left: 50%;
                 margin-left: -9px;
                 bottom: 0;
                 cursor: auto;
                 display: none;
             }
              &.cur span{
                   display: block;
                    cursor: auto;
               }
               &.cur{
                    color: #fff;
                }
        }
    }

</style>