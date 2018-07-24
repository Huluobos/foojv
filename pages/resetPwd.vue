<template>
    <div class="contenier">
        <register_header></register_header>
        <div class="r_center_w">
            <div class="content">
                <div class="content_top">
                    <span class="title">重置密码</span>
                    <span class="link">
                        <nuxt-link to="/login">
                        </nuxt-link>
                    </span>
                </div>
                <div class="register_input_box">
                    <div class="register_input">
                        <input  type="password" v-model="newPwd" @keyup="test1Pwd"  placeholder="请输入新密码"/>
                        <i class="iconfont icon-mima"></i>
                        <div class="error-msg error-box" v-text="pwdError" v-show="pwdError"></div>
                    </div>
                    <div class="register_input">
                        <input  type="password" v-model="new2Pwd" @keyup="text2Pwd"  placeholder="请再次输入新密码"/>
                        <i class="iconfont icon-mima"></i>
                        <div class="error-msg error-box" v-text="pwd2Error" v-show="pwd2Error"></div>
                    </div>
                    <div class="register_input_submit">
                        <input type="submit" value="提交" @click="postPwd">
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
    import md5 from 'md5'
    import qs from 'qs'
    export default {
        name: "resetPwd",
        components:{
            register_header,registerFooter
        },
        data(){
            return{
                mobile:this.$route.query.mobile,
                newPwd:"",
                new2Pwd:"",
                pwdError:"",
                pwd2Error:"",
            }
        },
        methods:{
            test1Pwd(){
                let pwdReg = /^.{6,18}$/
                this.pwdError = pwdReg.test(this.newPwd) ? "" : "密码格式不正确"
                return pwdReg.test(this.newPwd)
            },
            text2Pwd(){
                if (this.test1Pwd()){
                    if(this.new2Pwd!=this.newPwd){
                        this.pwd2Error = "两次密码不一致！"
                        return false
                    }else {
                        this.pwd2Error = ""
                        return true
                    }
                }else{
                    this.pwd2Error = "两次密码不一致！"
                    return false
                }
            },
            postPwd(){
                if(this.test1Pwd()&&this.text2Pwd()){
                    let params = {
                        mobile:this.mobile,
                        password:md5(md5(this.new2Pwd))+"fujuwang",
                    }
                    this.$axios.post(api.paramToUrl(api.forgetPwd),params).then(res=>{
                        this.$message({
                            message: "密码更改成功，正在为您跳转......",
                            type: 'success'
                        })
                        setTimeout(()=>{
                            this.$router.push("/login")
                        },1000)
                    }).catch(err=>{
                        alert(err)
                    })
                }
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
    .error-box{
        color: #c30d23;
        margin-top: 20px;
    }
</style>