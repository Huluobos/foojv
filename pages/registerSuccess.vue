<template>
    <div class="contenier">
        <register_header></register_header>
        <div class="r_center_w">
            <div class="r_center_n">
                <p>
                    <img src="../static/imgs/u165.png" alt="">
                </p>
                <p>
                    <span>恭喜你，注册成功，赶紧登录找房源吧！</span>
                </p>
                <p>
                    <nuxt-link to="/login">立即登录</nuxt-link>
                </p>
            </div>
        </div>
        <registerFooter></registerFooter>
    </div>
</template>

<script>
    import register_header from '~/components/register_header.vue'
    import registerFooter from '~/components/registerFooter.vue'
    export default {
        name: "registerSuccess",
        components:{
            register_header,registerFooter
        },
    }
</script>

<style scoped>
    .contenier{
        width: 100%;
        background-color: rgba(242,242,242,1);
    }
    .r_center_w{
        width: 1150px;
        height: 100%;
        margin: 0 auto;
        padding-top: 30px;
    }
    .r_center_n{
        width: 627px;
        height: 412px;
        background-color: #fff;
        margin: 0 auto;
    }
    .r_center_n p{
        margin:0 auto;
        display: flex;
        justify-content: center;
    }
    .r_center_n p:nth-child(1){
        padding: 60px 0 40px;
    }
    .r_center_n p:nth-child(1) img{
        display: block;
        width: 136px;
        height: 136px;
    }
    .r_center_n p:nth-child(2) span{
        font-size: 14px;
        color: #515151;
        text-align: center;
        font-weight: 400;
    }
    .r_center_n p:nth-child(3){
        width: 114px;
        height: 31px;
        border: 1px solid rgba(255, 102, 51, 1);
        border-radius: 5px;
        margin-top: 25px;
    }
    .r_center_n p:nth-child(3) a{
        color: #666666;
        font-size: 14px;
        line-height: 31px;
    }
</style>