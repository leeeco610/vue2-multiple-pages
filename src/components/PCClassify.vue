<template>
    <div class="pc_classify">
        <h3>{{ dictionary.title }}</h3>
        <p class="hint" v-show="dictionary.nextEdit_date">{{ dictionary.nextEdit_date }}</span></p>
        <a :href="'/' + dictionary.anchor" v-show="dictionary.edit_allow" class="icon"><img :src="url" alt="编辑"></a>
    </div>
</template>
<script>
    export default {
        name: 'pc_classify',
        data() {
            return {
                url: "http://publicst.jcy.cc/pc_master/img/edit2.png"
            }
        },
        props: ["dictionary"] // 复用组件，结构相似，数据由上层导入
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .pc_classify{
        width: 284px;
        overflow: hidden;
        font-size:12px;
        line-height:16px;
        h3{
            font-size:12px;
            line-height:16px;
            float: left;
            text-align: left;
            color: #222;
            font-weight:700;
        }
        p{
            float: right;
            text-align: right;
            color: #aaa;
        }
         a.icon{
             float: right;
             text-align: right;
             color: #aaa;
             padding-top:1px;
             padding-bottom: 1px;
             width: 14px;
             height: 14px;
         }
    }
</style>