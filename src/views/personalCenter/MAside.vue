<template>
    <div class="m_aside" ref="aside">
        <p abc="abc" ref="bcd"></p>
        <ASArtist></ASArtist>
        <!--地区切换，配合报价表组件使用，点击改变状态-->
        <div class="ceil"><PRArea v-if="asprice" ></PRArea></div>
        <!--一下所有组件都有基本组件组合而成-->
        <!--合成组件： 分类组件，列表组件，列表组件又由条目组件组成-->
        <!--报价表组件，v-if仅当有数据时才编译，只将选定城市的数据传入-->
        <ASPrice v-if="asprice" style="margin-bottom: 20px;" :cityPrice="city_price"></ASPrice>
        <!--以下每个组件均有分类组件与条目组件B组成-->
        <!--标签组件-->
        <ASLabel v-if="aslabel" style="margin-bottom: 20px;"></ASLabel>
        <!--获奖组件-->
        <ASCup v-if="ascup" style="margin-bottom: 20px;"></ASCup>
        <!--协会组件-->
        <ASMember v-if="asmember" style="margin-bottom: 20px;"></ASMember>
        <!--任职组件-->
        <ASWork v-if="aswork" style="margin-bottom: 20px;"></ASWork>
        <!--简介组件-->
        <ASIntro v-if="asintro" style="margin-bottom: 20px;"></ASIntro>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex';
    import PRArea from './PRArea';
    import ASArtist from './ASArtist';
    import ASPrice from './ASPrice';
    import ASCup from './ASCup';
    import ASLabel from './ASLabel';
    import ASMember from './ASMember';
    import ASWork from './ASWork';
    import ASIntro from './ASIntro';
    export default {
        name: 'm_aside',
        computed: {
                ...mapGetters({
                    city_price: 'pc.g.city_price'
                }),
                ...mapState({
                    //当组件数据不存在时，不显示组件，且不会报错
                    asprice: state => state.personalCenter.data.price_sheet,
                    aslabel: state => state.personalCenter.data.labels,
                    ascup: state => state.personalCenter.data.win_prizes,
                    asmember: state => state.personalCenter.data.associations,
                    aswork: state => state.personalCenter.data.works,
                    asintro: state=>state.personalCenter.data.intro
                })
        },
        components: {
            PRArea,
            ASArtist,
            ASPrice,
            ASLabel,
            ASCup,
            ASMember,
            ASWork,
            ASIntro
        },
        data() {
            return {
                asideHeight:0,

            }
        },
        created() {
//            this.$nextTick(function () {
//                this.bindEvent()
//            });
        },
        updated() {
            this.$nextTick(function() {
                this.changedValue();
                this.bindEvent();
            })
        },
        methods:{
            changedValue: function () {
                this.$store.state.personalCenter.aside_height = this.$refs.aside.offsetHeight;
            },
            bindEvent:function () {
                document.addEventListener('scroll',winScroll,false);
                let asideDemo = this.$refs.aside;
                let distance = 360 + this.$store.state.personalCenter.aside_height - window.innerHeight;
                let top = distance - 360;
                let aside_content = 360 + this.$store.state.personalCenter.aside_height + 64;
//                let bodyClient = document.body.clientHeight >= document.documentElement.clientHeight ? document.body.clientHeight: document.documentElement.clientHeight
                function winScroll () {
                    if(distance > 0){
                        if(document.body.clientHeight >aside_content &&  (document.body.scrollTop >= distance || document.documentElement.scrollTop >= distance)){
                            asideDemo.classList.add('fixed');
                            asideDemo.style.top = -top + "px";
                        } else {
                            asideDemo.classList.remove('fixed');
                        }
                    } else {
                        if(document.body.clientHeight >window.innerHeight && (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)){
                            asideDemo.classList.add('fixed');
                            asideDemo.style.top = 160 + "px";
                        }else{
                            asideDemo.classList.remove('fixed');
                        }
                    }

                }
            }
        }
    }
</script>
<style scoped>
    .m_aside{
        float: left;

        padding-top: 20px;

        /*position: fixed;*/
        /*bottom: 20px;*/
        /*top: 360px;*/
        width: 304px;
        border-right: 1px solid #eee;
        padding-bottom: 58px;
        background-color: #fff;
    }
    div.fixed{
        position: fixed;
        /*bottom: 64px;*/
        float: none;
        z-index: 9;
    }
    /*.test{*/
        /*background-color: yellow;*/
    /*}*/
    .m_aside .ceil{
        height: 28px;
        border-bottom: 1px solid #eee;
    }
    .m_aside::after{
        content: "";
        display: block;
        clear: both;
    }
</style>