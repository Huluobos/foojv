<template>
  <div class="myMainPage">
    <indexHeader :xinXi="user"></indexHeader>
    <div class="box">
      <div class="content">
        <div class="content_top">
          <nuxt-link to="/">福居网</nuxt-link>><nuxt-link to="/">新房首页</nuxt-link>><nuxt-link to="/">新房</nuxt-link>
        </div>
        <div class="content_main clearfix">
          <div class="fleft lbox">
            <div class="useData">
              <div class="user_head">
                <img :src="this.user.userpic" alt="为啥图片出不来呢">
              </div>
              <div class="user_name">
                <span v-text="user.username"></span>
              </div>
            </div>
            <ul>
              <li :class="{active:this.$route.path =='/mypage/personalCenter'}">
                <nuxt-link to="/mypage/personalCenter" >
                    首页
                </nuxt-link>
              </li>
              <li :class="{active:this.$route.path =='/mypage/watchHouseDay'}">
                <nuxt-link to="/mypage/watchHouseDay">
                  看房日程
                </nuxt-link>
              </li>
              <li :class="{active:this.$route.path =='/mypage/watchHouseRecord'}">
                <nuxt-link to="/mypage/watchHouseRecord">
                  看房记录
                </nuxt-link>
              </li>
              <li :class="{active:this.$route.path =='/mypage/myLike'}">
                <nuxt-link to="/mypage/myLike">
                  我的关注
                </nuxt-link>
              </li>
              <li :class="{active:this.$route.path =='/mypage/mySon'}">
                <nuxt-link to="/mypage/mySon">
                  我的经纪人
                </nuxt-link>
              </li>
              <li :class="{active:this.$route.path =='/mypage/changeXinXi'}">
                <nuxt-link to="/mypage/changeXinXi">
                  修改资料
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="fright rbox">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>

    <friendshipsLinks></friendshipsLinks>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
    import axios2 from '~/plugins/axios2'
    import axios from '~/plugins/axios'
    import qs from "qs"
    import api from '~/mainApi/index'
    import indexHeader from '~/components/indexHeader'
    import friendshipsLinks from '~/components/friendshipsLinks.vue'
    import indexFooter from '~/components/indexFooter.vue'
    import cookies from 'js-cookie'
    export default {
        name: "personalCenter",
        data(){
            return{
                user:{
                    userid:"",
                    username:"",
                    userphone:"",
                    userpic :"",
                },
            }
        },
        components:{
            indexHeader,friendshipsLinks,indexFooter
        },
        methods:{
            getCookies(){
                if (cookies.get("userid")) {
                    this.user.userid = cookies.get("userid")
                    this.user.username = cookies.get("username")
                    this.user.userphone = cookies.get("userphone")
                    this.user.userpic = cookies.get("userpic")
                }
                console.log(this.user)
            },

        },
        created(){
            this.getCookies()
        },
    }
</script>
<style>
  .right_top{
    font-size: 30px;
    color: #333;
  }
  .test ul{
    border-bottom: 1px solid #ccc;
    padding: 0;
  }




  .myMainPage .box{
    border-top: 1px solid #ccc;
  }
  .myMainPage .content{
    width: 1100px;
    margin: 0 auto ;
  }
  .myMainPage .content>.content_top{
    font-size: 14px;
    color: #999;
    margin-top: 20px;
  }
  .myMainPage .content>.content_top a{
    color: #999;
  }
  .myMainPage .content .content_main {
    margin-top: 40px;
  }
  .myMainPage .content .content_main .lbox{
    width: 198px;
    border: 1px solid #ccc;
    padding-bottom: 200px;
  }
  .myMainPage .content .content_main .rbox{
    border: 1px solid #ccc;
    padding: 30px 30px 57px;
    margin-left: 20px;
    width: 818px;
  }
  .myMainPage .content .content_main .lbox .useData{
    text-align: center;
    margin-top: 30px;
  }
  .myMainPage .content .content_main .lbox .useData .user_head{
    text-align: center;
    height: 98px;
  }
  .myMainPage .content .content_main .lbox .useData .user_head img{
    width: 98px;
    height: 98px;
    border-radius: 50%;
  }
  .myMainPage .content .content_main .lbox .useData .user_name{
    text-align: center;
    margin-top: 10px;
  }
  .myMainPage .content .content_main .lbox ul{
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0;
  }
  .myMainPage .content .content_main .lbox ul li{
    box-sizing: border-box;
    padding-left: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #333;
  }
  .myMainPage .content .content_main .lbox .active{
    border-left: 4px solid #c30d23;
    background-color: #f4f4f4;
    color: #c30d23;
  }
</style>
<style>
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  /* 清除浮动*/
  .clearfix{
    clear: both;
    content: "";
    overflow: hidden;
  }
  /* 浮动*/
  .fleft {
    float: left;
  }
  .fright{
    float: right;
  }



  </style>