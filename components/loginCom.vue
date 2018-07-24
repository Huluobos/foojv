<template>
    <div class="box">
        <div class="content">
            <span class="close" @click="closeWin">
                <i class="iconfont icon-guanbi"></i>
            </span>
            <div class="main_content">
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
            </div>
        </div>
    </div>
</template>

<script>
    import api from '~/mainApi/index'
    import md5 from 'md5'
    import qs from 'qs'
    import $axios from '~/plugins/axios'
    import cookies from 'js-cookie'
    export default {
        name: "loginCom",
        data(){
            return{
                mobile:"17338148074",
                password:"111111",
                showWin:true,
            }
        },
        methods:{
            login(){
                let params ={
                    mobile:this.mobile,
                    password: md5(md5(this.password))+"fujuwang"
                }
                this.$axios.post(api.login,params).then(res=>{
                    if (res.data.code == 200){
                        cookies.set("userphone",res.data.data.mobile,{expires:15})
                        cookies.set("userid", res.data.data.id, {expires: 15});
                        cookies.set("username", res.data.data.username, {expires: 15})
                        cookies.set("userpic", res.data.data.face, {expires: 15})
                        this.$router.push("/mypage/personalCenter")
                    }else {
                        alert(res.data.msg)
                    }
                })
            },
            closeWin(){
                this.showWin = false
                this.$emit("showWin",false)
            },
        },
    }
</script>

<style scoped>
    .close{
        display: block;
        cursor: pointer;
        position: absolute;
        top:10px;
        right: 10px;
    }
    .close i{
        font-size: 30px;
    }
    .box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(47,79,79,.6);
        z-index: 9999;
    }
    .content{
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 99999;
    }
    .main_content{
        width: 360px;
        padding: 40px 130px;
        margin: 0 auto;
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
    .register_input_box{
        padding-top: 35px;
    }
    .register_input_box .register_input{
        margin-bottom: 20px;
        position: relative;
    }
    .register_input_box .register_input input{
        outline: none;
        width: 328px;
        height: 50px;
        border: 1px solid #ccc;
        padding-left: 30px;
        border-radius: 0;
        line-height: 1.15;
        font-size: 100%;
    }
    .register_input_box .register_input i{
        position: absolute;
        top: 20px;
        left: 10px;
    }
    .register_input_box .register_input_submit input{
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