<template>
    <div class="contenier">
        <register_header></register_header>
        <div class="r_center_w">
            <div class="content">
                <div class="content_top">
                    <span class="title">找回密码</span>
                    <span class="link">
                        <nuxt-link to="/login">
                            返回登录
                        </nuxt-link>
                    </span>
                </div>
                <div class="register_input_box">
                    <div class="register_input">
                        <input v-model="mobile" type="tel" @keyup="testMobile" placeholder="请输入手机号"/>
                        <i class="iconfont icon-z-phone"></i>
                        <div class="error-msg error-box" ></div>
                    </div>
                    <div class="register_input">
                        <input v-model="verify" placeholder="请输入短信验证码" type="text"/>
                        <i class="iconfont icon-mima"></i>
                        <button class="yanzheng" :disabled="canSend" @click="getMyVerify" v-text="btnText"></button>
                    </div>
                    <div class="register_input_submit">
                        <input type="submit" value="下一步" @click="nextPage">
                    </div>
                </div>
            </div>
        </div>
        <registerFooter></registerFooter>
    </div>
</template>

<script>
    import register_header from '~/components/register_header.vue'
    import registerFooter from '~/components/registerFooter.vue'
    import axios from '~/plugins/axios'
    import api from '~/mainApi/index'

    export default {
        name: "forgetPwd",
        components:{
            register_header,registerFooter
        },
        data(){
            return{
                    mobile:"17338148074",
                    verify:"",
                    btnText:"获取验证码",
                    phoneError:"",
                    isSending:false
            }
        },
        methods:{
            testMobile(){
                let mobileReg = /((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
                this.phoneError = mobileReg.test(this.mobile)? "" : "请输入正确的手机号码"
                return mobileReg.test(this.mobile)
            },
            getMyVerify(){
                if (this.testMobile()){
                    this.$axios.get(api.paramToUrl(api.mobileVerify,{mobile:this.mobile})).then(res=>{
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
                                    this.btnText = "重新获取";
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
            nextPage(){
                this.$axios.get(api.paramToUrl(api.mobileVerifyOk),{mobile:this.mobile,verify:this.verify}).then(res=>{
                    if(res.data.code!=200){
                        this.$message({
                            message: res.data.msg,
                            type: 'warning'
                        })
                    }else {
                        this.$router.push("/resetPwd?mobile="+ this.mobile)
                    }
                })
            }

        },
        computed:{
            canSend(){
                let mobile = this.mobile;
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
    .error-box{
        color: #c30d23;
        margin-top: 20px;

    }
</style>