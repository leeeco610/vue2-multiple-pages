<template>
    <div class="al_information">
        <IMDeal></IMDeal>
        <!--<IMAttestation></IMAttestation>-->
    </div>
</template>
<script>
    import IMDeal from './IMDeal';
    export default {
        name: 'al_information',
        components: {
            IMDeal
        },
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .al_information{
        /*border: 1px solid #eee;*/
        margin-left: 20px;
        width: 875px;
        height: 164px;
        /*border-radius: 4px;*/
        background-color: #fff;
    }
</style>