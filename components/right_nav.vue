<template>
  <div>
    <ul class="right-box">
      <li class="box-item" @click="getCookie1">
        <nuxt-link to="">
          <i class="iconfont icon-rili"></i>
          <div class="icon-desc">
            日程
          </div>
          <div class="hidden-box">
            我的日程
          </div>
        </nuxt-link>

      </li>
      <li class="box-item" @click="getCookie2">
        <nuxt-link to="">
          <i class="iconfont icon-shoucang1"></i>
          <div class="icon-desc">
            关注
          </div>
          <div class="hidden-box">
            我的关注
          </div>
        </nuxt-link>
      </li>
      <li class="box-item">
        <nuxt-link to="/myhouse/homeOwer">
          <i class="iconfont icon-fangzi"></i>
          <div class="icon-desc">
            卖房
          </div>
          <div class="hidden-box">
            在线卖房
          </div>
        </nuxt-link>
      </li>
      <li class="box-item">
        <nuxt-link to="/tool">
          <i class="iconfont icon-toolsbar"></i>
          <div class="icon-desc">
            工具
          </div>
          <div class="hidden-box">
            房贷计算器
          </div>
        </nuxt-link>
      </li>
      <li class="box-item">
        <i class="iconfont icon-z-phone"></i>
        <div class="icon-desc">
          App
        </div>
        <div class="hidden-box-last">
          <img src="../static/imgs/2wm.png" alt="" style="width: 100%;height: 100%">
        </div>
      </li>
    </ul>
    <loginCom v-show="showLogin" @showWin="hanshu"></loginCom>
  </div>

</template>

<script>
    import cookies from "js-cookie"
    import loginCom from "./loginCom"
    export default {
        name: "right-box",
        components:{
            loginCom,
        },
        data(){
         return{
            showLogin:false
         }
        },
        methods:{
            getCookie1(){
                if(cookies.get("userid")){
                    this.$router.push("/mypage/watchHouseDay")
                }else {
                    this.showLogin = true
                }
            },
            getCookie2(){
                if(cookies.get("userid")){
                    this.$router.push("/mypage/myLike")
                }else {
                    this.showLogin = true
                }
            },
            hanshu(item){
                if(item==false){
                    this.showLogin = false
                }
            },
        },

    }
</script>

<style scoped>
  .right-box {
    position: fixed;
    z-index: 998;
    right: 0;
    top: 50%;
    /*transform: translateY(-50%);*/
    height: 480px;
    margin-top:-295px;
    width: 40px;
    padding: 15px 0;
    text-align: center;
    background: #fff;
    color: #000;
    display: block;
  }
  .right-box li {
    display: block;
    position: relative;
    padding: 5px 0;
    margin-bottom: 30px;
    cursor: pointer;
  }
  .right-box li:hover {
    color: #fff;
    background: #5f1985;
  }
  .right-box li:last-child {
    margin-bottom: 0;
  }
  .right-box li .iconfont{
    font-size: 26px;
  }
  .right-box li:hover .hidden-box {
    display: block;
  }
  .hidden-box {
    display: none;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 4px;
    background: #5f1985;
    color: #fff;
  }
  .hidden-box-last{
    width: 200px;
    height: 200px;
    display: none;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
  }
  .right-box li:hover .hidden-box-last {
    display: block;
  }
  .hidden-box::after {
    content: "";
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    border: 8px solid transparent;
    border-left: 8px solid #5f1985;

  }
</style>