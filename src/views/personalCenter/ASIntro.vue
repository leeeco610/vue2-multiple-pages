<template>
    <div class="as_intro">
        <PCClassify :dictionary="intro" style="margin-bottom: 8px;"></PCClassify>
        <PCItemB :msg="{title: intro.content }"></PCItemB>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import PCClassify from '../../components/PCClassify';
    import PCItemB from '../../components/PCItemB';
    export default {
        name: 'as_intro',
        components: {
            PCClassify,
            PCItemB
        },
        computed: {
            // 从状态中映射组件数据
                ...mapState({
                    intro: state => state.personalCenter.data.intro
                })
        }
    }

</script>
<style>
    .as_intro{
        padding-top:16px;
        border-top: 1px solid #eee;
        padding-right: 20px;
    }
    .as_intro .title{
        color: #666!important;
    }
</style>