<template>
    <div class="header2">
        <div class="header">
            <div class="top">
                <span class="login">
                    <nuxt-link to="/mypage/personalCenter" v-if="this.xinXi.username">{{this.xinXi.username}}</nuxt-link>
                    <nuxt-link to="/login" v-else>请登录</nuxt-link>
                </span>
                <span class="register">
                    <span @click="clearCookies" v-if="this.xinXi.username">退出</span>
                    <span v-else @click="toReg">立即注册</span>
                </span>
            </div>

            <div class="bottom clearfixx">
                <div class="logo" style="width: auto">
                    <nuxt-link to="/">
                        <img src="../static/imgs/logo.png" alt="">
                    </nuxt-link>
                </div>
                <div class="select-city">
                    <span>呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
                </div>
                <div class="nav clearfixx navbug">
                    <span class="nav-item" :class="{active:this.$route.path =='/'}">
                         <nuxt-link to="/">首页</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/secondHeadHouse'}">
                         <nuxt-link to="/secondHeadHouse">二手房</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/newHouse'}">
                         <nuxt-link to="/newHouse">新房</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/zuHouse'}">
                         <nuxt-link to="/zuHouse">租房</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/shoolSecondHouse'}">
                         <nuxt-link to="/shoolSecondHouse">学区房</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/smallQu'}">
                         <nuxt-link to="/smallQu">小区</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/son'}">
                         <nuxt-link to="/son">经纪人</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/baiKe'}">
                         <nuxt-link to="/baiKe">百科</nuxt-link>
                    </span>
                    <span class="nav-item nav-item-aa"
                          :class="{active: this.$route.path =='/myhouse/homeOwer' || this.$route.path =='/myhouse/findHouse'}"
                          style="position: relative">
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
                    <span class="nav-item" :class="{active:this.$route.path =='/tool'}">
                         <nuxt-link to="/tool">工具</nuxt-link>
                    </span>
                    <span class="nav-item" :class="{active:this.$route.path =='/zhuanTi'}">
                         <nuxt-link to="/zhuanTi">专题</nuxt-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from '~/plugins/axios'
    import qs from "qs"
    import api from '~/mainApi/index'
    import cookies from 'js-cookie'
    export default {
        name:"",
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
    .clearfixx{
        clear: both;
    }
    .spinner-content{
        position: absolute;
        width: 120%;
        top: 100%;
        left: 6px;
        display: none;
        z-index: 99999999999;
    }
    .nav-item-aa a:hover + .spinner-content{
        display: block;
    }
    .spinner-content:hover{
        display: block;
    }
    .spinner-content>div:hover>a{
        color: #c30d23;
    }
    .spinner-content>div{
        cursor: pointer;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 5px;
        background-color: #fff;
    }



    /* 手页头部*/
    .header{
        width: 1100px;
        margin: 0 auto 3px;
    }
    .header .top{
        text-align: right;
        font-size: 12px;
        color: #333;
        padding: 15px 0 5px;
    }
    .header .top .login{
        border-right: 1px solid #333;
    }
    .login{
        width: auto;
    }
    .header .top .login, .header .top .register{
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
    }
    .header .top .register{
        padding-right:0;
    }
    .header .bottom{
        font-size: 16px;
        height: 70.4px;
        position: relative;
    }
    .header .bottom .logo{
        margin-top:17px;
        float: left;
    }
    .header .bottom .select-city{
        padding-top:24px;
        float: left;
    }
    .header .bottom .select-city{
        cursor: pointer;
        position: relative;
    }
    .header .bottom .select-city>span{
        display: inline-block;
        font-size: 16px;
        padding: 4px 10px;
        margin-left: 20px;
        border: 1px solid #999;
        border-radius: 15px;
        color: #333;
    }
    .header .bottom .select-city i{
        font-size: 14px;
        font-weight: 700;
    }
    /*  头部导航*/
    .nav{
        float: right!important;

    }
    .navbug{
        position: absolute;
        top: 20px;
        right: 0;
    }
    .nav>.nav-item{
        padding-left: 30px;
        display: inline-block;
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


</style>