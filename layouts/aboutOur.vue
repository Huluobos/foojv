<template>
  <div class="aboutOur">
    <indexHeader :xinXi="user"></indexHeader>
    <div class="box">
      <div class="content">
          <div class="ab-nav">
            <a href="/" target="_blank">福居网</a>
            >
            <a href="#" v-if="this.$route.path == '/about/we'">关于我们</a>
            <a href="#" v-if="this.$route.path == '/about/tel'">联系方式</a>
            <a href="#" v-if="this.$route.path == '/about/mimi'">隐私声明</a>
            <a href="#" v-if="this.$route.path == '/about/banQuan'">版权声明</a>
            <a href="#" v-if="this.$route.path == '/about/baoHu'">法律保障</a>
          </div>
          <div class="adDetails_content">
            <div class="about-title" v-if="this.$route.path == '/about/we'">关于我们</div>
            <div class="about-title" v-if="this.$route.path == '/about/tel'">联系方式</div>
            <div class="about-title" v-if="this.$route.path == '/about/mimi'">隐私声明</div>
            <div class="about-title" v-if="this.$route.path == '/about/banQuan'">版权声明</div>
            <div class="about-title" v-if="this.$route.path == '/about/baoHu'">法律保障</div>
            <div class="line"></div>
            <nuxt/>
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

  .aboutOur .box{
    border-top: 1px solid #ccc;
  }
  .aboutOur .content{
    width: 1100px;
    margin: 0 auto ;
  }
  .aboutOur .ab-nav{
    font-size: 14px;
    color: #999999;
    margin: 20px auto;
  }
  .aboutOur .ab-nav a{
    color: #999999;
  }
  .aboutOur .adDetails_content{
    margin-top: 20px;
    color: #333;
    padding: 0 10px;
    width: 1080px;
    background: #fff;
    margin-bottom: 80px;
  }
  .aboutOur .about-title{
    text-align: left;
    margin-bottom: 15px;
    margin-top: 50px;
    font-size: 20px;
  }
  .aboutOur .line{
    width: 100%;
    height: 1px;
    background-color: #aaa;
    margin-bottom: 30px;
  }
  .aboutOur .adcontent{
    margin-top: 40px;
    color: #333;
    line-height: 1.8;
    text-align: left;
  }
  .aboutOur .adcontent p{
    padding: 0;
    margin: 10px auto;
    line-height: 25.2px;
    text-indent: 2em;
    color: rgb(51, 51, 51);
    font-size: 14px;
    white-space: normal;
    background-color: rgb(255, 255, 255);
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