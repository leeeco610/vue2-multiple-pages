<template>
    <div class="dl_item">
        <img :src="detail.icon_url" alt="" class="icon">
        <p class="record">{{ detail.record }}</p>
        <p class="title">{{ detail.title }}</p>
    </div>
</template>
<script>
    export default {
        name: 'dl_item',
        props: ['detail']
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .dl_item{
        position: relative;
        float: left;
        width: 129px;
        margin-left: 20px;
        margin-bottom: 20px;
        height: 36px;
        padding-left: 21px;
        img{
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        P{
            text-align: left;
        }
        p.record{
            font-size: 14px;
            line-height: 20px;
            font-weight: bolder;
            color: #222;
        }
        p.title{
            font-size: 12px;
            line-height: 16px;
            color: #80848f;
        }
    }
</style>