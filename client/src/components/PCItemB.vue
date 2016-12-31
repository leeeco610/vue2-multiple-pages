<template>
    <div class="pc_item_b">
        <p v-show="msg.icon" class="icon_b"><img :src="msg.icon" :alt="msg.title"></p>
        <p v-show="msg.title" class="title">{{ msg.title }}</p>
        <p v-show="msg.describe || msg.time" class="about" style="max-width:168px;">{{ msg.describe || msg.time}}</p>
    </div>
</template>
<script>
    export default {
        name: 'pc_item_b',
        props: ["msg"] // 复用组件，数据由上层传入，结构相似，内容不同
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .pc_item_b{
        width: 284px;
        overflow: hidden;
        p{
            float: left;
            font-size:12px;
            line-height:16px;
        }
        .icon_b{
            padding-top:1px;
            padding-bottom:1px;
            width: 14px;
            height: 14px;
            margin-right: 16px;
        }
        .title{
            text-align: left;
            color:#222;
            float: left;
        }
        .about{
            float: right;
            text-align: right;
            color: #666;
        }
    }
</style>
