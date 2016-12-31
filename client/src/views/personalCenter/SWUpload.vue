<template>
    <div class="sw_upload">
        <a href="/ucenter/designer/verify-uploadCase.html" target="_blank">
            <div class="mid">
                <p class="el-icon-plus"></p>
                <p class="words">上传案例</p>
            </div>
        </a>

    </div>
</template>
<script>

</script>
<style scoped lang="less" rel="stylesheet/less">
    .sw_upload{
        margin-left:20px;
        margin-bottom: 20px;
        float: left;
        width: 274px;
        height: 274px;
        border: 2px dashed #CCCCCC;
        border-radius: 4px;
        &:hover{
            border-color: #aaa;
         }
        a{
            position: relative;
            display: block;
            height: 274px;
        }
        &:hover .mid{
            color: #999;
         }
        .mid{
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left:-28px;
            margin-top: -25px;
            text-align: center;
            width: 56px;
            color: #aaa;
            .el-icon-plus{
                font-size:22px;
                line-height:22px;
            }
            .words{
                font-size:14px;
                line-height:20px;
                letter-spacing: 0px;
            }
        }
    }
</style>