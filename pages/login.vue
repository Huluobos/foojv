<template>
    <div class="contenier">
        <register_header></register_header>
        <div class="r_center_w">
            <div class="content">
                <div class="content_top">
                    <span class="title">登录</span>
                    <span class="link">
                        <nuxt-link to="/register">
                            没有账号，立即注册
                        </nuxt-link>
                    </span>
                </div>
                <div class="register_input_box">
                    <div class="register_input">
                        <input v-model="mobile" type="tel" placeholder="请输入手机号"/>
                        <i class="iconfont icon-z-phone"></i>
                    </div>
                    <div class="register_input">
                        <input v-model="password" placeholder="请输入密码" type="password"/>
                        <i class="iconfont icon-mima"></i>
                    </div>
                    <div class="register_input_submit">
                        <input type="submit" value="登录" @click="login">
                    </div>
                </div>
                <div class="missPwd">
                    <nuxt-link to="/forgetPwd">忘记密码?</nuxt-link>
                </div>
                <!--<div class="linkLiogn">-->
                <!--</div>-->
            </div>
        </div>
        <registerFooter></registerFooter>
    </div>
</template>

<script>
    import register_header from '~/components/register_header.vue'
    import registerFooter from '~/components/registerFooter.vue'
    import api from '~/mainApi/index'
    import md5 from 'md5'
    import qs from 'qs'
    import $axios from '~/plugins/axios'
    import cookies from 'js-cookie'
    export default {
        name: "login",
        components:{
            register_header,registerFooter
        },
        data(){
            return{
                mobile:"17338148074",
                password:"111111"
            }
        },
        methods:{
            login(){

                let params ={
                    mobile:this.mobile,
                    password: md5(md5(this.password))+"fujuwang"
                }
                this.$axios.post(api.login,params).then(res=>{
                    console.log(res)
                    if (res.data.code == 200){
                        this.$message({
                            message: "登录成功，正在为您跳转......",
                            type: 'success'
                        })
                        cookies.set("userphone",res.data.data.mobile,{expires:15})
                        cookies.set("userid", res.data.data.id, {expires: 15});
                        cookies.set("username", res.data.data.username, {expires: 15})
                        cookies.set("userpic", res.data.data.face, {expires: 15})
                        setTimeout(()=>{
                            this.$router.push("/mypage/personalCenter")
                        },1000)
                    }else {
                        this.$message({
                            message: res.data.msg,
                            type: 'warning'
                        })
                    }
                })
            },
        },
    }
</script>

<style scoped>
    .content{
        margin: 0 auto;
        padding: 40px 130px;
        width: 360px;
        background-color: #fff;
    }
    .content_top .title{
        font-size: 28px;
        color: #666;
    }
    .content_top .link{
        float: right;
        margin-top: 16px;
    }
    .content_top .link a{
        font-size: 14px;
        color: #f90;
    }
    .content .register_input_box{
        padding-top: 35px;
    }
    .content .register_input_box .register_input{
        margin-bottom: 20px;
        position: relative;
    }
    .content .register_input_box .register_input input{
        outline: none;
        width: 328px;
        height: 50px;
        border: 1px solid #ccc;
        padding-left: 30px;
        border-radius: 0;
        line-height: 1.15;
        font-size: 100%;
    }
    .content .register_input_box .register_input i{
        position: absolute;
        top: 20px;
        left: 10px;
    }
    .content .register_input_box .register_input_submit input{
        outline: none;
        border: none;
        width: 360px;
        height: 50px;
        border-radius: 0;
        line-height: 1.15;
        font-size: 100%;
        color: #fff;
        background-color: #c30d23;
        cursor: pointer;
    }
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
    .missPwd{
        text-align: center;
        margin-top: 30px;
        padding-bottom: 20px;
    }
    .missPwd a{
        color: #666;
        text-align: center;
        font-size: 14px;
    }
</style>