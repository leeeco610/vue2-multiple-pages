<template>
    <div class="pc_item">
        <p class="area">{{ msg.area }}</p>
        <p class="money">{{ msg.price }}</p>
    </div>
</template>
<script>
    export default {
        name: 'pc_item',
        props: ["msg"] // 复用组件，数据由上层传入，结构一致，内容不同
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .pc_item{
        width: 284px;
        overflow: hidden;
        p{
            font-size:12px;
            color: #666;
            line-height:18px;
        }
        .area{
            float: left;
            text-align: left;
        }
        .money{
            float: right;
            text-align: right;
        }
    }
</style>