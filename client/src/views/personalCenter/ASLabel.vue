<template>
    <div class="as_label">
        <!--通过组件属性，将数据传入子组件内部，通用组件可以保证简单的结构，以外界数据来更改组件内容与一些样式-->
        <!--分类组件-->
        <PCClassify :dictionary="labelsHandle" style="margin-bottom: 16px;"></PCClassify>
        <!--条目组件列表-->
        <template v-for="item in labelsHandle.dictionary">
            <PCItemB v-if="item" :msg="item"  style="margin-bottom: 16px;"></PCItemB>
        </template>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import PCClassify from '../../components/PCClassify';
    import PCItemB from '../../components/PCItemB';
    export default {
        name: 'as_label',
        components: {
            PCClassify,
            PCItemB
        },
        computed: {
            // 从状态中映射得到组件对应数据
                ...mapState({
                    labels: state => state.personalCenter.data.labels
                }),
            // 适配数据
            labelsHandle() {
                this.labels.title = this.labels.label_title;
                if(this.labels.dictionary && this.labels.dictionary.length > 0) {
                    this.labels.dictionary.forEach(function (value) {
                        value.describe = value.content;
                    })
                }
                return this.labels;
            }
        }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
    .as_label{
        padding-top:16px;
        border-top: 1px solid #eee;
        padding-right: 20px;
    }
</style>