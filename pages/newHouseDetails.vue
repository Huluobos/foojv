<template>
    <div>
        <secondHeader :xinXi="user"></secondHeader>
        <newHouseSearch></newHouseSearch>
        <div class="content">
            <div class="top_title">
                <span class="top_title_l">
                    福居网> 新房首页> 新房列表> 盛世国际
                </span>
            </div>
            <div class="index-container">
                <div class="banner" style="overflow: hidden;" v-banner>
                    <div v-swiper:mySwiper="swiperOption" id="banner">
                        <div class="swiper-wrapper" style="height: 100%;position: relative">
                            <div class="swiper-slide" v-for="(item,index) in bannerDatas" :key="index" style="height: 100%;overflow: hidden;">
                                <img :src="'http://www.fooju.cn/fjw/uploads/housePic/20170927/59cb1bd47e689.jpg'" class="my-pic">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner_list">
                    <div class="topLayer">
                        <div class="box">
                            <div class="inThSaleOf">有效</div>
                            <h3>盛世国际</h3>
                            <div class="junjia">均价
                                <span>8800元/平</span>
                            </div>
                            <div class="zuixin">最新更新时间：
                                <span>2018年7月4日</span>
                            </div>
                            <div class="type">物业类型：
                                <span>综合体</span>
                            </div>
                            <div class="kaipan">最新开盘：
                                <span></span>
                            </div>
                            <div class="dong"></div>
                            <nuxt-link to="" class="phone">
                                <i class="iconfont icon-dianhua"></i>
                                400-898-1018 转 0471-6551333
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <nuxt-link to="/newHousePhoto" class="xiangce" data-name="盛世国际">
                    <i class="iconfont icon-xiangce"></i>
                        相册
                </nuxt-link>
            </div>
            <div class="houseDetails">
                <div class="houseDetails_top_ul">
                    <!--写到这了  再写写js-->
                    <div @click="changBorder" class="changBorder" :class="{active:this.border=='1'}">
                        <a href="#top">户型介绍</a>
                    </div>
                    <div @click="changBorder" class="changBorder" :class="{active:this.border=='2'}">
                        <a href="#down">楼盘详情</a>
                    </div>
                    <!--<a name="top" id="top">12222</a>-->
                    <!--<a name="down" id="down">33</a>-->
                </div>
                <div class="houseDetails_content">
                    <div class="test0">
                        <div class="top clearfix">
                            <div class="title fleft">户型介绍</div>
                            <div class="topTab fright">
                                <div class="topTab_item fleft ">全部</div>
                                <div class="topTab_item fleft ">一居室</div>
                                <div class="topTab_item fleft ">二居室</div>
                                <div class="topTab_item fleft ">三居室及以上</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <friendshipsLinks></friendshipsLinks>
        <indexFooter></indexFooter>
        <right_nav></right_nav>
    </div>
</template>
<style>
    .houseDetails{
        width: 1100px;
        margin: 80px auto 0;
    }
    .houseDetails_top_ul .changBorder{
        display: inline-block;
        margin-right: 15px;
        padding: 12px 20px;
        box-sizing: border-box;
    }
    .houseDetails_top_ul .active{
        border: 1px solid #c30d23;
        border-radius: 20px;
    }
    .houseDetails .houseDetails_content .top{
        margin-top: 80px;
        height: 40px;
        line-height: 40px;
    }
    .houseDetails .houseDetails_content .title{
        font-size: 30px;
        color: #333;
        display: inline-block;
        width: 300px;
    }
    .houseDetails .houseDetails_content .topTab{
        display: inline-block;
    }
    .houseDetails .houseDetails_content .topTab .topTab_item{
        margin-left: 30px;
        font-size: 14px;
        color: #333;
        display: inline-block;
    }



</style>
<script>
    import secondHeader from "../components/secondHeader"
    import newHouseSearch from "../components/newHouseSearch"
    import friendshipsLinks from '~/components/friendshipsLinks.vue'
    import right_nav from '~/components/right_nav.vue'
    import indexFooter from '~/components/indexFooter.vue'
    import axios from "../plugins/axios";
    import axios2 from "../plugins/axios2";
    import cookies from 'js-cookie'
    import qs from "qs";
    import api from "../mainApi/index";

    export default {
        // name: "houseDetails",
        components:{
            newHouseSearch,secondHeader,friendshipsLinks,right_nav,indexFooter
        },
        data(){
            return{
                user:{},
                swiperOption: {
                    autoplay: true
                },
                border:"1",
            }
        },
        async asyncData() {
            let bannerData = await axios2.get(api.paramToUrl(api.ProductNew_detail, {id:96}));
            return {
                bannerDatas: bannerData.data.data
            }
        },
        directives: {
            banner: {
                inserted(el, binding, vnode) {
                    function setBannerHeight() {
                        let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 40;
                        let bannerWidth = document.documentElement.clientWidth || document.body.clientWidth;
                        el.style.height = bannerHeight + 'px';
                        let bannerRate = bannerWidth / bannerHeight;
                        let imgArr = el.querySelectorAll('.my-pic');
                        imgArr.forEach(item => {
                            let imgHeight = item.offsetHeight;
                            let imgWidth = item.offsetWidth;
                            let imgRate = imgWidth / imgHeight;

                            if (bannerRate > imgRate) {
                                item.style.width = bannerWidth + "px";
                                item.style.height = "auto";
                                item.style.marginTop = -(item.offsetHeight - bannerHeight) / 2 + 'px';
                            }
                            else {
                                item.style.height = bannerHeight + "px";
                                item.style.width = "auto";
                                item.style.marginLeft = -(item.offsetWidth - bannerWidth) / 2 + 'px';
                            }
                        })
                    }
                    setBannerHeight();
                    window.onresize = setBannerHeight
                },
                unbind(el) {
                    window.onresize = null;
                }
            },
        },
        methods:{
            changBorder(){
                if(this.border == "1"){
                    this.border = "2"
                }else if(this.border == "2"){
                    this.border = "1"
                }
                console.log(this.border);
            },
            getCookies(){
                if (cookies.get("userid")) {
                    this.user.userid = cookies.get("userid")
                    this.user.username = cookies.get("username")
                    this.user.userphone = cookies.get("userphone")
                    this.user.userpic = cookies.get("userpic")
                }
            },
        },
        created(){
            this.getCookies()
        },
    }
</script>

<style scoped>
    .top_title{
        width: 1100px;
        margin: 20px auto 0;
    }
    .top_title span{
        color: #999;
        font-size: 14px;
    }
    .index-container{
        margin-top:40px ;
        position: relative;
    }
    .my-pic {
        display: block;
        width: 100%;
    }
    .banner {
        width: 100%;
    }
    #banner{
        position: relative;
    }
    .banner_list{
        width: 100%;
        position: absolute;
        top:22%;
        z-index: 999;
    }
    .topLayer{
        margin: 0 auto;
        width: 1100px;
    }
    .topLayer .box{
        width: 380px;
        padding-bottom: 20px;
        background-color: #ffffff;
        padding-left: 20px;
        padding-right: 20px;
        overflow: hidden;
        position: relative;
    }
    .topLayer .inThSaleOf{
        background-color: #5f1985;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(40px) translateY(-10px) rotateZ(45deg);
        color: #ffffff;
        width: 120px;
        height: 60px;
        line-height: 70px;
        text-align: center;
    }
    .topLayer h3{
        margin: 30px 0 0;
        font-size: 14px;
        color: #333333;
    }
    .junjia{
        margin-top: 20px;
        font-size: 14px;
        color: #333;
    }
    .topLayer .junjia span{
        color: #c30d23;
        font-size: 20px;
    }
    .topLayer .kaipan,  .topLayer .type,  .topLayer .zuixin{
        margin-top: 20px;
        color: #333;
    }
     .topLayer .dong{
        font-size: 14px;
         color: #999999;
         margin-top: 20px;
    }
    .topLayer .phone{
        display: block;
        margin: 20px auto;
        width: 320px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background-color: #c30d23;
        color: #fff;
        border-radius: 3px;
    }
     .topLayer .phone i{
         margin-right: 10px;
     }
    .index-container .xiangce{
        position: absolute;
        bottom: 120px;
        right: 150px;
        background-color: rgba(255,255,255,.7);
        height: 40px;
        width: 120px;
        text-align: center;
        line-height: 40px;
        z-index: 999;
        font-size: 14px;
        border-radius: 2px;
        display: block;
    }

</style>