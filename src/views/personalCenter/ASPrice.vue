<template>
    <div class="as_price">
        <template v-for="(item, index) in cityPriceDictionary" >
            <PCClassify style="margin-top:16px;" :dictionary="item"></PCClassify>
            <PRList :priceList="item.price_list"></PRList>
        </template>
    </div>
</template>
<script>
    import PCClassify from '../../components/PCClassify';
    import PRList from './PRList';
    export default {
        name: 'as_price',
        props: ["cityPrice"],// 数据由上层传入
        components: {
            PCClassify,
            PRList
        },
        computed: {
            // 适配数据，设计数据时考虑不周，只能在这里花费更多的功夫去适配了，如没有title字段，但组件却是公用的，所以补充此字段。
            cityPriceDictionary() {
                if(this.cityPrice && this.cityPrice.dictionary.length > 0) {
                    return this.cityPrice.dictionary.map(function (value) {
                        value.title = value.house_type;
                        return value;
                    })
                }
            }
        }
    }
</script>
<style scoped>
    .as_price{
        padding-right: 20px;
    }
</style>