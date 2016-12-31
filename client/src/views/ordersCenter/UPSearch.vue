<template>
    <div class="search">
        <span class="el-icon-search"></span>
        <!--双向绑定-->
        <!--空白处理-->
        <input v-model.trim="msg" type="text" placeholder="项目/业主信息" @keyup.enter="search">
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'search',
        data() {
            return {
                msg: ""
            }
        },
        methods: {
               search() {
                   // 先返回全部，在搜索，发送搜索关键词，用来过滤
                   this.$store.commit("oc.m.filter_order", 0);
                   this.$store.commit("oc.m.search_order", this.msg);
               }
        }
    }
</script>
<style scoped>
    .search{
        padding: 12px 0 12px 16px;
        background-color: #fff;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        border-radius:4px;
        border: 1px solid #ccc;
        -webkit-box-shadow: 0 2px ;
        -moz-box-shadow: 0 2px ;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
    }
    .search .el-icon-search{
        font-size:14px;
        color: #aaa;
    }
    .search input{
        font-size: 14px;
        line-height: 20px;
        width: 208px;
        height: 20px;
        border: none;
    }
</style>