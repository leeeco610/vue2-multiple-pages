<template>
    <div class="as_cup test">
        <PCClassify :dictionary="cups" style="margin-bottom: 16px;"></PCClassify>
        <template v-for="item in cupsDictionaryHandle">
            <PCItemB v-if="item" :msg="item"></PCItemB>
            <PCItemB v-if="item" :msg="{ time: item.time}" style="margin-bottom: 16px;"></PCItemB>
        </template>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import PCClassify from '../../components/PCClassify';
    import PCItemB from '../../components/PCItemB';
    export default {
        name: 'as_cup',
        components: {
            PCClassify,
            PCItemB
        },
        computed: {
                // 从状态中映射组件数据
                ...mapState({
                    cups: state => state.personalCenter.data.win_prizes
                }),
                // 数据适配
                cupsDictionaryHandle() {
//                    console.log(this.cups.dictionary);
                    if (this.cups.dictionary && this.cups.dictionary.length > 0){
                        return this.cups.dictionary.map(function (value){
                            value.title = value.prize;
                            value.describe = value.Competition;
                            return value;
                        })
                    }

                }

        }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
    .as_cup{
        padding-top:16px;
        border-top: 1px solid #eee;
        padding-right: 20px;
    }
    .test{

    }
</style>