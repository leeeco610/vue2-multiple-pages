<template>
    <div id="message_center">
        <MCHeader></MCHeader>
        <JcyUpper></JcyUpper>
        <JcyMessage></JcyMessage>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import MCHeader from '../../components/MCHeader';
    import JcyUpper from './JcyUpper';
    import JcyMessage from './JcyMessage';

    export default {
        name: 'messageCenter',
        data(){
            return {}
        },
        created() {
        },
        components: {
            MCHeader,
            JcyUpper,
            JcyMessage
        },
        methods: {
            // 掩藏控制组件，在根组件上定义事件
            ...mapActions({
                HIDE: "hd.a.control_hide"
            })
        }
    };
</script>

<style>
    #message_center {
        font-family: 'PingFang SC', 'PingFangSC-Semibold', 'Avenir', Helvetica, Arial, sans-serif;
        font-family: "Microsoft YaHei";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    h2 {
        font-weight: 300;
    }
</style>
