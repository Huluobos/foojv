<template>
    <div class="header">
        <div class="content">
            <nuxt-link to="/"><img src="../static/imgs/logo.png" alt="" id="img1"></nuxt-link>
            <div class="right">
                <nuxt-link to="/"><span>返回福居网首页</span>
                <img src="../static/imgs/right.png" alt="" id="img2">
                </nuxt-link>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "register_header"
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 80px;
        background-color: #fff;
    }
    #img1 {
        border-width: 0px;
        width: 120px;
        height: 37px;
        position: absolute;
        left: 0px;
        top: 32px;
    }
    .content{
        width: 1150px;
        margin: 0 auto;
        height: 80px;
        position: relative;
    }
    .right{
        float: right;
        margin-top: 34px;
        width: 127px;
        text-align: left;
        height: 23px;
        line-height: 23px;

        font-size: 13px;
        font-weight: 400;
        position: relative;
    }
    .right span{
        color: #666;
    }
    #img2{
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 20px;
        height: 20px;

    }

</style>