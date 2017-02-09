<template>
    <div class="im_deal">
        <h3>交易数据</h3>
        <div class="deal_list">
            <template v-for="item in dealInfo">
                <DLItem :detail="item"></DLItem>
            </template>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import DLItem from './DLItem';
    export default {
        name: 'im_deal',
        components: {
            DLItem
        },
        computed: {
            ...mapState({
                dealInfo: state => state.personalCenter.data.deal_info,
            })
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .im_deal{
        border: 1px solid #eee;
        width: 510px;
        height: 148px;
        border-radius: 4px;
        background-color: #fff;
        padding-top: 14px;
        h3{
            text-align: left;
            padding-left: 20px;
            font-size: 12px;
            line-height: 16px;
            margin-bottom: 20px;
            color: #222;
        }
        .deal_list{
            overflow: hidden;
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }
</style>