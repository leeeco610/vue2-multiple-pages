<template>
    <div class="sw_case">
        <a href="javascript:void(0)" @click.stop.prevent="jumpToPreview">
            <!--图片案例-->
            <div class="image">
                <img class="caseImg" :src="caseDetail.img_url">
                <div class="mask"></div>
                <!--弹出提示框-->
                <el-button type="text" @click.stop.prevent="open2"><img title="删除案例" class="delete" src="http://publicst.jcy.cc/pc_master/img/delete.png" alt="删除"></el-button>
                <a @click.stop.prevent="jumpToEdit" class="editor"><img title="编辑案例" src="http://publicst.jcy.cc/pc_master/img/edit.png" alt="编辑"></a>
            </div>
            <div class="describe">
                <p class="first">
                    <span class="description">{{ caseDetail.sample_describ }}</span>
                    <img src="../../../static/images/like.png" title="点赞数" alt="赞">
                    <span class="count" title="点赞数">{{ caseDetail.praise }}</span>
                </p>
                <p class="second"><span class="sample_info">{{ caseDetail.sample_info }}</span><span class="isAudit" :class="{audit : auditClass }">{{ auditText }}</span></p>
            </div>
        </a>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'sw_case',
        props: ["caseDetail", "idx"],
        computed: {
                ...mapState({
                    loadShow: state => state.personalCenter.loading_show,
                }),
                ...mapState({
                    promptMessage:state => state.personalCenter.prompt_message,
                }),
                auditText: function () {
                    if(this.caseDetail.audit == 1){
                        return "已发布";
                    }
                    return "待审核";
                },
                auditClass: function () {
                    if(this.caseDetail.audit == 1){
                        return true;
                    }
                    return false;
                }

        },
        methods: {
            // 删除按钮点击事件，插件中的方法
            open2() {


                this.$confirm('此操作将永久删除该作品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.state.personalCenter.loading_show = true;

                    let self = this;
                    let fun = function() {
                        self.$message({
                            type: 'success',
                            message: self.promptMessage,
                            //修改持续时间
                            duration: 3000
                        });
                        let msgDom = document.getElementsByClassName("el-message");
                        msgDom[0].style.borderColor = "#13ce66";
                    }
//                    this.$message({
//                        type: 'success',
//                        message: '删除成功!',
//                        //修改持续时间
//                        duration: 3000
//                    });
                    // 发送一个ajax请求，要求服务器也删除该案例。可以在其回调函数中进行下一步
                    let obj = {number:this.caseDetail.number, idx: this.idx, fun: fun};
                    this.$store.dispatch("actionPD", obj);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                        duration: 3000
                    });
                    let msgDom = document.getElementsByClassName("el-message");
                    msgDom[0].style.borderColor = "#50bfff";
                })
            },
            jumpToPreview() {
                window.open('/' + this.caseDetail.preview_url);
            },
            jumpToEdit() {
                window.location.href = '/' + this.caseDetail.edit_url;
            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    div.sw_case{
        border: 1px solid #CCCCCC;
        float: left;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        border-radius:4px;
        width: 276px;
        height: 276px;
        -webkit-transition: all .2s;
        transition: all .2s;

        .image{
            position: relative;
            -webkit-border-radius:4px;
            -moz-border-radius:4px;
            border-radius:4px;
            background: url(http://st.jcy.cc/image/logos/logo_imgbc.png?imageView2/1/q/80/interlace/1/format/jpg/w/500/h/500) no-repeat center center;
            width: 276px;
            height: 208px;
            .caseImg{
                width: 276px;
                height: 208px;
                -webkit-border-radius:4px 4px 0px 0px;
                -moz-border-radius:4px 4px 0px 0px;
                border-radius:4px 4px 0px 0px;
            }
            .mask{
                position: absolute;
                left: 0;
                top: 0;
                background-color: #fff;
                opacity: 0.5;
                width: 276px;
                height: 208px;
                display: none;
            }
            img.delete{
                position: absolute;
                top: 8px;
                right: 8px;
                display: none;
            }
            a.editor{
                position: absolute;
                top: 8px;
                right: 44px;
                display: none;
            }
            &:hover .mask{
                 display: block;
             }
             &:hover .delete{
                  display: block;
              }
              &:hover .editor{
                   display: block;
               }
        }
        .describe{
            width: 244px;
            height: 36px;
            padding: 16px;
            font-size:12px;
            line-height:16px;
            color: #aaa;
            .first{
                overflow: hidden;
                .description{
                    float: left;
                    text-align: left;
                    color: #222;
                    display:inline-block;
                    width: 160px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .count{
                    float: right;
                    color: #aaa;
                    margin-right:4px;
                }
                img{
                    padding-top: 4px;
                    padding-bottom:4px;
                    display: inline-block;
                    float: right;
                    vertical-align: middle;
                }
            }
            .second{
                /*float: left;*/
                .sample_info{
                    text-align: left;
                    float: left;
                    display: inline-block;
                    width: 180px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .isAudit{
                    color: #ff3b3b;
                    float: right;
                }
                span.audit{
                    color: #333;
                }
            }
        }
        &:hover{
            -webkit-box-shadow: 0 0 36px #999;
            box-shadow: 0 0 36px #999;
            /*margin-top: -2px;*/
            -webkit-transform: translateY(-2px);
            -moz-transform: translateY(-2px);
            -ms-transform: translateY(-2px);
            -o-transform: translateY(-2px);
            transform: translateY(-2px);
        }
    }
</style>