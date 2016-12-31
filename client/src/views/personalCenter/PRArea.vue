<template>
    <div class="pr_area">
        <template v-for="(item,index) in price_sheet">
            <span :class="{ cur: index == active_city }" @click="TOGGLECITY(index)">{{ item.city }}</span>
        </template>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'pr_area',
        computed: {
            // 数据映射
            ...mapState({
                price_sheet: state => state.personalCenter.data.price_sheet,
                active_city: state => state.personalCenter.active_city
            })
        },
        methods: {
            // 切换显示城市的状态
            TOGGLECITY(idx) {
                this.$store.commit('pc.m.toggle_city',idx);
            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .pr_area{
        margin: 0 auto;
        span{
            position: relative;
            z-index: 3;
            display: inline-block;
            /*float: left;*/
            color: #222;
            font-size: 14px;
            line-height: 20px;
            padding: 0px 2px 8px;
            margin-left: 16px;
            margin-right: 16px;
            border-bottom: 1px solid transparent;
            cursor: pointer;
        }
        span.cur{
            color: #009df5;
            border-bottom: 1px solid #009df5;
        }
    }
</style>