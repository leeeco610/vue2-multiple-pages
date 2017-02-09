<template>
    <div class="pr_list">
        <template v-if="priceList" v-for="item in priceList">
            <PCItem :msg="item"></PCItem>
        </template>
    </div>
</template>
<script>
    import PCItem from '../../components/PCItem';
    export default {
        name: 'pr_list',
        props: ["priceList"], //数据由外部导入
        components: {
            PCItem
        }
    }
</script>
<style scoped>
    .pr_list{
        width: 284px;
        margin-top:4px;
    }
</style>