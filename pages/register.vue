<template>
    <div>
        <register_header></register_header>
        <div class="main">
            <div class="content">
                <div class="content_top">
                    <span class="title">创建账号</span>
                    <span class="link">
                        <nuxt-link to="/login">
                            已有账号，立即登录
                        </nuxt-link>
                    </span>
                </div>
                <div class="register_input_box">
                    <div class="register_input">
                        <input v-model="formData.mobile" type="tel" @keyup="testMobile" placeholder="请输入手机号"/>
                        <i class="iconfont icon-z-phone"></i>
                        <div class="error-msg error-box" v-text="phoneError" v-show="phoneError"></div>
                    </div>
                    <div class="register_input">
                        <input v-model="formData.verify" placeholder="请输入短信验证码" type="text"/>
                        <i class="iconfont icon-mima"></i>
                        <button class="yanzheng" :disabled="canSend" @click="getMyVerify" v-text="btnText"></button>
                    </div>
                    <div class="register_input">
                        <input v-model="formData.password" placeholder="请输入6-18位密码" @keyup="testPwd" type="password"/>
                        <i class="iconfont icon-mima"></i>
                        <div class="error-msg error-box" v-text="pwdError" v-show="pwdError"></div>
                    </div>
                    <div class="register_input">
                        <input v-model="formData.name" placeholder="请输入昵称" @keyup="testName" type="text"/>
                        <i class="iconfont icon-nicheng"></i>
                        <div class="error-msg error-box" v-text="nameError" v-show="nameError"></div>
                    </div>
                    <div class="register_input_submit">
                        <input type="submit" value="立即注册" @click="registerSubmit">
                    </div>
                </div>

            </div>
            <registerFooter></registerFooter>
        </div>


    </div>

</template>

<script>
    import register_header from '~/components/register_header.vue'
    import registerFooter from '~/components/registerFooter.vue'
    import axios from '~/plugins/axios'
    import api from '~/mainApi/index'
    import md5 from 'md5'
    import qs from 'qs'
    export default {
        name: "register",
        components:{
            register_header,registerFooter
        },
        data(){
            return{
                formData: {
                    mobile: "", //手机号
                    verify: "", //验证码
                    password: "", //密码
                    name: "" //昵称
                },
                btnText: "获取验证码",
                isSending: false, //发没发 ？ 发了 true    没法 false
                canCommit: false,
                phoneError: "",
                smsError: "",
                pwdError: "",
                nameError: ""
            }
        },
        methods:{
            //判断手机号的正则
            testMobile(){
                let mobileReg = /((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
                this.phoneError = mobileReg.test(this.formData.mobile)? "" : "请输入正确的手机号码"
                return mobileReg.test(this.formData.mobile)
            },
            getMyVerify(){
                if (this.testMobile()){
                    axios.get(api.paramToUrl(api.mobileVerify,{mobile:this.formData.mobile})).then(res=>{
                        if(res.data.code == 200){
                            this.$message({
                                message: res.data.msg,
                                type: 'success'
                            })
                            this.isSending = true;
                            let timer = 20;
                            this.btnText = timer + "s后重新获取";
                            setInterval(()=>{
                                timer--;
                                this.btnText = timer + "s后重新获取";
                                if (timer<=0){
                                    clearInterval(timer)
                                    this.btnText = "重新获取验证码";
                                    this.isSending = false
                                }
                            },1000)

                        }else {
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            })
                        }
                    }).catch(err=>{
                        alert(err)
                    })
                }
            },
            //判断密码的正则
            testPwd(){
                let pwdReg = /^.{6,18}$/
                this.pwdError = pwdReg.test(this.formData.password) ? "" : "请输入6-18位密码"
            },
            //判断昵称的正则
            testName(){
                let nameReg = /^.{1,20}$/
                this.nameError = nameReg.test(this.formData.name)? "" : "请输入1到20个字符作为您的昵称"
            },
            registerSubmit(){
                if(this.formData.verify.length<4 || this.phoneError||this.nameError||this.pwdError){
                    return
                }else {
                    axios.get(api.paramToUrl(api.mobileVerifyOk,{mobile:this.formData.mobile,verify:this.formData.verify})).then(res=>{
                        if(res.data.code!=200){
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            })
                        }else{
                            let params = {
                                mobile: this.formData.mobile,
                                password: md5(md5(this.formData.password))+"fujuwang",
                                name: this.formData.name
                            }
                            axios.post(api.paramToUrl(api.register,params)).then(res=>{
                                if(res.data.code==200){
                                    this.$router.push("/registerSuccess")
                                    this.$message({
                                        message: res.data.msg,
                                        type: 'success'
                                    })
                                }else {
                                    this.$message({
                                        message: res.data.msg,
                                        type: 'warning'
                                    })
                                }
                            })
                        }
                    })
                }

            },

        },
        computed:{
          canSend(){
              let mobile = this.formData.mobile;
              let mobileReg = /((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
              if(mobileReg.test(mobile)&&!this.isSending){
                  return false
              }
              else {
                  return true
              }
          }
        },

    }
</script>

<style scoped>
    .register_input_submit a{
        display: block;
        width: 360px;
        height: 50px;
        background-color: rgba(0,0,0,.3);
    }
    .border{
        width: 100%;
        height: 1px;
        box-sizing: border-box;
        background-color: #f00;
    }
    .main{
        background-color: rgba(242,242,242,1);
        padding-top: 30px;
    }
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
    .content .register_input_box .register_input:nth-child(2) input{
        width: 206px;
        display: inline-block;
    }
    .content .register_input_box .register_input:nth-child(2) .yanzheng{
        outline: none;
        background-color: #fff;
        display: inline-block;
        float: right;
        width: 110px;
        height: 54px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
        text-align: center;
        line-height: 54px;
        cursor: pointer;
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
    .error-box{
        color: #c30d23;
        margin-top: 20px;

    }

</style>