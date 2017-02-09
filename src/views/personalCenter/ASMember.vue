<template>
    <div class="as_member test">
        <PCClassify :dictionary="members" style="margin-bottom: 16px;"></PCClassify>
        <template v-for="item in membersDictionaryHandle">
            <PCItemB v-if="item" :msg="item"></PCItemB>
            <PCItemB v-if="item" :msg="{time: item.period}" style="margin-bottom: 16px;"></PCItemB>
        </template>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import PCClassify from '../../components/PCClassify';
    import PCItemB from '../../components/PCItemB';
    export default {
        name: 'as_member',
        components: {
            PCClassify,
            PCItemB
        },
        computed: {
            // 从状态中映射组件数据
                ...mapState({
                    members: state => state.personalCenter.data.associations
                }),
            // 适配数据
            membersDictionaryHandle() {
                if(this.members.dictionary && this.members.dictionary.length > 0){
                    return this.members.dictionary.map(function (value){
                        value.title = value.position;
                        value.describe = value.associations_name;
                        return value;
                    })
                }
            }
        }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
    .as_member{
        padding-top:16px;
        border-top: 1px solid #eee;
        padding-right: 20px;
    }
</style>