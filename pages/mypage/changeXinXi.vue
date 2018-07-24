<template>
    <div>
        <div>
            <div class="right_top">
                我的账户信息
            </div>
            <div class="test">
                <ul class="clearfix">
                    <li @click="changeActive('one')">
                        <nuxt-link to="" :class="{active:this.forActive=='one'}" >修改头像</nuxt-link>
                    </li>
                    <li @click="changeActive('two')">
                        <nuxt-link to="" :class="{active:this.forActive=='two'}">修改密码</nuxt-link>
                    </li>
                    <li @click="changeActive('three')">
                        <nuxt-link to="" :class="{active:this.forActive=='three'}" >修改昵称</nuxt-link>
                    </li>
                </ul>
                <div class="test0" v-if="this.forActive=='one'">
                    <div class="preview">
                        <span>图片预览</span>
                    </div>
                    <div class="btn"><button>选择文件</button></div>
                    <div class="describe">支持jpg、png，大小不能超过1M</div>
                    <div class="btn"><button>保存头像</button></div>
                </div>

                <div class="test1" v-if="this.forActive=='two'">
                    <div class="title">重置密码</div>
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

                <div class="test2" v-if="this.forActive=='three'">
                    <div class="title">修改昵称</div>
                    <div class="register_input_box">
                        <div class="register_input">
                            <input  type="text" v-model="newName" @keyup="testName"  placeholder="请输入新的昵称"/>
                            <i class="iconfont icon-nicheng"></i>
                            <div class="error-msg error-box" v-text="nameError" v-show="nameError"></div>
                        </div>
                        <div class="register_input_submit">
                            <input type="submit" value="提交" @click="postName">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import api from '~/mainApi/index'
    import md5 from 'md5'
    import qs from 'qs'
    import cookies from 'js-cookie'
    export default {
        name: "changeXinXi",
        layout:"myMain",
        data(){
            return{
                forActive:"one",
                imageUrl: '',
                mobile:"",
                newPwd:"",
                new2Pwd:"",
                pwdError:"",
                pwd2Error:"",
                newName:"",
                nameError:"",

            }
        },
        methods:{
            changeActive(val){
                this.forActive = val
            },
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
                    this.pwd2Error = "两次密码不一致！"   //如果密码都输一位 且密码一样会有bug，第一个输入框下出现格式不对，第二个出现不一致，其实只是格式不对，
                    return false
                }
            },
            postPwd(){
                if(this.test1Pwd()&&this.text2Pwd()){

                    let params = {
                        mobile:cookies.get('userphone'),
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
            testName(){
                let nameReg = /^.{1,20}$/
                this.nameError = nameReg.test(this.newName)? "" : "请输入1到20个字符作为您的昵称"
            },
            postName(){
                if(this.nameError===""){
                    let useid = cookies.get("userid")
                    let params = {
                        username:this.newName,
                        id:useid
                    }
                    this.$axios.post(api.paramToUrl(api.updateName),params).then(res=>{
                        if(res.data.code == 200){
                            cookies.set("username", this.newName, {expires: 15})
                            this.$message({
                                message: "修改昵称成功......",
                                type: 'success'
                            })
                            this.$router.go(0)
                        }else {
                            this.$message({
                                message: res.data.msg ,
                                type: 'warning'
                            })
                        }

                    })

                    // cookies.set("username", res.data.data.username, {expires: 15})
                //    if()
                }

            }

        }
    }
</script>

<style scoped>
    .test ul li{
        float: left;
        padding: 30px 0;
    }
    .test ul li a{
        margin-right: 30px;
        display: block;
    }
    .test ul li a:hover{
        color: #c30d23;
    }
    .active{
        color: #c30d23;
    }
    .test .test0{
        margin-top: 25px;
        clear: both;
    }
    .test .test0 .preview{
        text-align: center;
        line-height: 300;
        display: block;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        border: 1px solid #ccc;
        position: relative;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .test0 .btn{
        text-align: center;
    }
    .test0 .describe{
        text-align: center;
        color: #999999;
        margin-top: 10px;
    }
    .test0 .btn button{
        font-size:18px;
        width: 304px;
        border: none;
        margin-top: 40px;
        background: #c30d23;
        color: #fff;
        border-radius: 4px;
        padding: 16px 12px;
        line-height: 20px;
    }
    .test1 {
        text-align: center;
    }
    .title{
        color: #333333;
        font-size: 28px;
        text-align: center;
    }
    .register_input_box{
        padding-top: 35px;
        text-align: center;
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
        top: 18px;
        left: 238px;
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
    .error-box{
        color: #c30d23;
        margin-top: 20px;
    }

</style>