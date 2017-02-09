<template>
    <div class="tb_body">
        <transition-group name="list" tag="ul">
            <!--订单列表的每一列-->
            <li v-for="val in orders" v-bind:key="val">
                <ol>
                    <li class="number">{{ val.number }}</li>
                    <li class="time">{{ val.time }}</li>
                    <!--可以显示提示栏，在内容过长时，用省略号显示，然后在提示栏中显示完整内容-->
                    <el-tooltip class="item project" effect="light" :content="val.project_info" placement="right">
                        <li class="project_info">{{ val.project_info }}</li>
                    </el-tooltip>
                    <!--<li class="project_info" :title="val.project_info ">{{ val.project_info }}</li>-->
                    <el-tooltip class="item owner" effect="light" :content="val.owner_info" placement="right">
                        <li class="owner_info">{{ val.owner_info }}</li>
                    </el-tooltip>
                    <!--<li class="owner_info" :title="val.owner_info ">{{ val.owner_info }}</li>-->
                    <li class="status_name">{{ val.status_name }}</li>
                    <li class="delete"><span @click="DELETE" :id="val.number" v-if="false">删除</span></li>
                </ol>
            </li>
        </transition-group>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'tb_body',
        computed: {
            ...mapGetters({
                orders: 'oc.g.filter_order'
            })
        },
//        methods: {
//            ...mapActions({
//                'DELETE': 'oc.a.delete_order'
//            })
//        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less" >
    .tb_body{
        font-size:12px;
        color: #666;
        line-height: 43px;
        ul{
            li{
                ol {
                    padding-left: 49px;
                    li{
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        height: 43px;
                        float: left;
                        text-align: left;
                        span{
                            color:#ccc;
                            cursor: pointer;
                            &:hover{
                                color: #009DF5;
                             }
                        }
                    }
                    li.number{
                        width:112px;
                        padding-right:36px;
                        /*letter-spacing: 0px;*/
                    }
                    li.time{
                        padding-right:36px;
                        width:138px;
                    }
                    .item{
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        height: 43px;
                        float: left;
                        text-align: left;
                        li{
                            float: none;
                        }
                    }
                    .project{
                        width: 318px;
                    }
                    .owner{
                        width: 278px;
                    }
                    /*li.project_info{*/
                        /*padding-right:36px;*/
                        /*width:282px;*/
                    /*}*/
                    /*li.owner_info{*/
                        /*padding-right:36px;*/
                        /*width:242px;*/
                    /*}*/
                    li.status_name{
                        padding-right:36px;
                        width:122px;
                    }
                    li.delete{
                        width: 24px;
                        padding-right:49px;
                    }
                }
            }
        }
    }
    .list-enter-active, .list-leave-active {
        transition: all 0.6s;
    }
    .list-enter, .list-leave-active {
        opacity: 0;
    }
</style>