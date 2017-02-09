<template>
    <div class="search">
        <span class="el-icon-search"></span>
        <input type="text" placeholder="客厅 书房 背景墙">
    </div>
</template>
<script>

</script>
<style scoped lang="less" rel="stylesheet/less">
    .search{
        /*position: absolute;*/
        /*right: 0;*/
        /*top: 0;*/
        height: 20px;
        width: 230px;
        text-align: left;
        padding: 11px 16px 11px 16px;
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