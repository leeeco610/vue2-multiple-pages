<template>
    <div class='data-show' :data="data">{{JSON.stringify(data)}} {{ this.$store.state.demo }}</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        // methods: mapActions([
        //   "actionA"
        // ]),
        created(){
            this.$store.dispatch('actionA');
//      console.log(this.data)
        },
        data () {
            return {
                data: {
                    name: 'demo数据测试',
                    ...this.$store.state.demo
                }

            }
        }
    };
</script>
<style scoped lang='less'>
    .data-show {
        color: #ff0000;
        font-size: 16px;
        margin-top: 100px;
    }
</style>
