<template>
    <div class="tb_caption">
        <!--表头各项-->
        <ul>
            <li v-for="key in keys">{{ key }}</li>
            <li><span v-if="false">操作</span></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'tb_caption',
        data () {
          return {
              keys: [
                  "订单编号",
                  "时间",
                  "项目信息（所在地，房屋详情）",
                  "业主信息",
                  "订单状态"
              ]
          }
        },
        props: ['detail']
    };
</script>
<style scoped lang="less" rel="stylesheet/less">
    .tb_caption{
        ul{
            padding-left:50px;
            overflow: hidden;
            &::before{
                content: '';
                 display: block;
                 clear: both;
             }
             li{
                 text-align: left;
                 float: left;
                 font-size:12px;
                 line-height: 43px;
                 color: #222;
                 font-weight: bold;
             }
             li:nth-child(1){
                 width:148px;
             }
            li:nth-child(2){
                width:174px;
            }
            li:nth-child(3){
                width:318px;
            }
            li:nth-child(4){
                width:278px;
                    }
            li:nth-child(5){
                width:158px;
            }
        }
    }
</style>