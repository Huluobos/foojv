<template>
    <div>
        <div class="topHeader2">
            <div class="topHeader" style="height: 60px">
                <div class="nav">
                        <span class="nav-item">
                             <nuxt-link to="/">首页</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/secondHeadHouse">二手房</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/newHouse">新房</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/zuHouse">租房</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/shoolSecondHouse">学区房</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/smallQu">小区</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/son">经纪人</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/baiKe">百科</nuxt-link>
                        </span>
                    <span class="nav-item spinner">
                             <nuxt-link to="">在线委托</nuxt-link>
                             <div class="spinner-content">
                                <div>
                                    <nuxt-link to="/myhouse/homeOwer">我是业主</nuxt-link>
                                </div>
                                <div>
                                    <nuxt-link to="/myhouse/findHouse">帮我找房</nuxt-link>
                                </div>
                             </div>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/tool">工具</nuxt-link>
                        </span>
                    <span class="nav-item">
                             <nuxt-link to="/zhuanTi">专题</nuxt-link>
                        </span>
                </div>
                <div class="fright loginAndRegister">
                    <span class="login">

                        <nuxt-link to="/mypage/personalCenter" v-if="this.xinXi.username">{{this.xinXi.username}}</nuxt-link>
                        <nuxt-link to="/login" v-else>请登录</nuxt-link>
                    </span>
                    <span class="register">
                        <span @click="clearCookies" v-if="this.xinXi.username">退出</span>
                        <span v-else @click="toReg">立即注册</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "secondHeader",
        props: {
            xinXi: {

            }
        },
        methods:{
            clearCookies(){
                if (cookies.get("username")) {
                    cookies.remove("username")
                    cookies.remove("userid")
                    cookies.remove("userphone")
                    cookies.remove("userpic")
                    this.$router.go(0)
                }else {
                    this.$message({
                        message: "未登录",
                        type: 'warning'
                    })
                }

            },
            toReg(){
                this.$router.push("/register")
            }

        }
    }
</script>

<style scoped>
    .topHeader2{
        background-color: #f4f4f4;
    }
    .topHeader{
        width: 1100px;
        margin: 0 auto;
    }
    .nav{
        float: left !important;
        padding-top:10px;
    }
    .nav>.nav-item{
         padding-left: 30px;
         display: inline-block;
         position: relative;
     }
    .nav>.nav-item:nth-child(1){
        padding-left: 0;
    }
    .nav>.nav-item.active>a, .nav>.nav-item:hover>a{
        border-bottom-color:rgba(195,13,35,1);
        color: #c30d23;
    }
    .nav>.nav-item>a{
        border-bottom:2px solid rgba(195,13,35,0);
        padding: 10px 0 20px;
        display: inline-block;
        height: 100%;
    }
    .nav .spinner .spinner-content{
        position: absolute;
        width: 100%;
        top: 100%;
        left: 30px;
        display: none;
        z-index: 999999;
    }
    .nav>.spinner:hover>a+.spinner-content{
        display: block;
    }
    .nav .spinner .spinner-content>div{
        cursor: pointer;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 5px;
        background-color: #fff;
    }
    .loginAndRegister{
        padding-top: 20px;
    }
    .login{
        border-right: 1px solid #333;
    }
    .login, .register{
        display: inline-block;
        padding: 0 10px;
    }
    .login a, .register span{
        padding: 10px 0 ;
        font-size: 12px;
        color: #333;
    }
    .register{
        padding-right: 0;
    }


</style>