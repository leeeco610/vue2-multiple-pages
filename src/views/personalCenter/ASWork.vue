<template>
    <div class="as_work">
        <PCClassify :dictionary="works" style="margin-bottom: 16px;"></PCClassify>
        <template v-for="item in worksDictionaryHandle">
            <PCItemB :msg="item"></PCItemB>
            <PCItemB :msg="{time: item.period}" style="margin-bottom: 16px;"></PCItemB>
        </template>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import PCClassify from '../../components/PCClassify';
    import PCItemB from '../../components/PCItemB';
    export default {
        name: 'as_work',
        components: {
            PCClassify,
            PCItemB
        },
        computed: {
            // 从状态中映射组件数据
                ...mapState({
                    works: state => state.personalCenter.data.works
                }),
            // 适配数据
            worksDictionaryHandle() {
                if(this.works.dictionary && this.works.dictionary.length > 0){
                    return this.works.dictionary.map(function (value){
                        value.title = value.job;
                        value.describe = value.company;
                        return value;
                    })
                }
            }
        }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
    .as_work{
        padding-top:16px;
        border-top: 1px solid #eee;
        padding-right: 20px;
    }
</style>