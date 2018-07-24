<template>

    <div>
        <indexHeader :xinXi="user"></indexHeader>

        <div class="index-container">
            <div class="banner" style="overflow: hidden;" v-banner>
                <div v-swiper:mySwiper="swiperOption" id="banner">
                    <div class="swiper-wrapper" style="height: 100%;position: relative">
                        <div class="swiper-slide" v-for="(banner,index) in bannerDatas" :key="index" style="height: 100%;overflow: hidden;">
                            <img :src="'http://www.fooju.cn/'+banner.picurl" class="my-pic">
                        </div>
                        <div class="index-search" style="z-index: 999999">
                            <ul style="margin: -1px">
                                <li :class="{active:seletedIndex == 0 }" @click="seletedIndex = 0 ">
                                    <nuxt-link to="/">找二手房</nuxt-link>
                                </li>
                                <li :class="{active:seletedIndex == 1 }" @click="seletedIndex = 1 ">
                                    <nuxt-link to="/">找新房</nuxt-link>
                                </li>
                                <li :class="{active:seletedIndex == 2 }" @click="seletedIndex = 2 ">
                                    <nuxt-link to="/">找租房</nuxt-link>
                                </li>
                                <li :class="{active:seletedIndex == 3 }" @click="seletedIndex = 3 ">
                                    <nuxt-link to="/">找学区房</nuxt-link>
                                </li>
                                <li :class="{active:seletedIndex == 4 }" @click="seletedIndex = 4 ">
                                    <nuxt-link to="/">找小区</nuxt-link>
                                </li>
                            </ul>
                            <div class="index-search-bottom">
                                <input type="text" class="fll" v-model="searchWord" :placeholder="placeholderText">
                                <span class="search-btn1 search-btn" >
                                    <nuxt-link :to="'/secondHeadHouse?q='+ searchWord" v-if="seletedIndex==0">搜索</nuxt-link>
                                    <nuxt-link :to="'/newHomesList?q='+ searchWord" v-if="seletedIndex==1">搜索</nuxt-link>
                                    <nuxt-link :to="'/zuHouse?q='+ searchWord" v-if="seletedIndex==2">搜索</nuxt-link>
                                    <nuxt-link :to="'/shoolNewHouse?q='+ searchWord" v-if="seletedIndex==3">搜索</nuxt-link>
                                    <nuxt-link :to="'/smallQu?q='+ searchWord" v-if="seletedIndex==4">搜索</nuxt-link>
                                </span>
                                <span class="search-btn2 search-btn" v-if="seletedIndex==0 || seletedIndex==1 || seletedIndex==2">
                                    <nuxt-link to="/" >
                                        <img src="../static/imgs/mapSearch.png" alt="" class="img-map">
                                        地图找房
                                    </nuxt-link>
                                </span>
                            </div>
                            <div class="headline clearfix" style="position: absolute;bottom: 0px;left: 0px">
                                <img src="../static/imgs/tt.png" alt="" style="width: 100px;height: 30px ;float: left">
                                <div class="fleft headline-swiper swiper-container-vertical"
                                     style="line-height:30px;height: 30px; width: 300px;color: #fff;font-size: 16px;
                                     text-align: left;margin-left: 20px" >
                                    <div class="wrap" style="height:30px;overflow: hidden;
                                    position: absolute;top: 30px;left: 100px;width: 100%">
                                        <div class="box1">
                                            <p style="margin:0;height: 30px;width: 100%;position: absolute;">二手房交易流程详解</p>
                                            <p style="margin:0;height: 30px;width: 100%;position: absolute;">“租”生活让时代镜像更精彩</p>
                                            <p style="margin:0;height: 30px;width: 100%;position: absolute;">二手房交易流程详解</p>
                                            <p style="margin:0;height: 30px;width: 100%;position: absolute;">“租”生活让时代镜像更精彩</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="opacity" ></div>

                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="top-btngroup">
                <div class="btn">
                    <nuxt-link to="">
                        <img src="../static/imgs/store.png" alt="">
                        <div class="title">查门店</div>
                        <div class="text">查优质门店</div>
                    </nuxt-link>
                </div>
                <div class="btn">
                    <nuxt-link to="/myhouse/homeOwer">
                        <img src="../static/imgs/entrust.png" alt="">
                        <div class="title">在线委托</div>
                        <div class="text">有问题我们帮你</div>
                    </nuxt-link>
                </div>
                <div class="btn">
                    <nuxt-link to="">
                        <img src="../static/imgs/mapBlue.png" alt="">
                        <div class="title">地图找房</div>
                        <div class="text">地图找房</div>
                    </nuxt-link>
                </div>
                <div class="btn">
                    <nuxt-link to="/baiKe">
                        <img src="../static/imgs/encyclopedias.png" alt="">
                        <div class="title">福居百科</div>
                        <div class="text">看百科了解更多</div>
                    </nuxt-link>
                </div>
            </div>

            <div class="features clearfix">
                <div class="feature fleft">
                    <nuxt-link to="">
                        <img src="../static/imgs/3.png" alt="">
                        <div class="featureText">真房源，假一赔百</div>
                    </nuxt-link>
                </div>
                <div class="feature fleft">
                    <nuxt-link to="">
                        <img src="../static/imgs/2.png" alt="">
                        <div class="featureText">青城率先取消二手房贷款高额代办费</div>
                    </nuxt-link>
                </div>
                <div class="feature fleft">
                    <nuxt-link to="">
                        <img src="../static/imgs/1.png" alt="">
                        <div class="featureText">六大安全保障</div>
                    </nuxt-link>
                </div>
            </div>


            <div class="newHouse house-common">
                <div class="top clearfix">
                    <div class="title fleft">精品新房</div>
                    <div class="more fright">
                        <nuxt-link to="/newHomesList">
                            更多新房
                            <i class="iconfont icon-mjiantou"></i>
                        </nuxt-link>
                    </div>
                </div>
                <div class="house-tagLine">
                    在这里为您寻觅一个新家
                </div>
                <div class="houses clearfix">
                    <div class="house fleft"  v-for="(newsHouse,index) in recommendDatas.new.slice(0,3)" :key="index">
                        <div class="house-img">
                            <nuxt-link to="">
                                <img :src="'http://www.fooju.cn/'+ newsHouse.pic" alt=""
                                     style="overflow: hidden; width: 342px; height: 257px; left: 0; top: 0;">
                            </nuxt-link>
                        </div>
                        <div class="bottom-content clearfix">
                            <div class="name fleft" v-text="newsHouse.title"></div>
                            <div class="price fright">{{newsHouse.average_price}}元/平</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="second-hand house-common">
                <div class="top clearfix">
                    <div class="title fleft">二手优品</div>
                    <div class="more fright">
                        <nuxt-link to="/secondHeadHouse">
                            更多二手房
                            <i class="iconfont icon-mjiantou"></i>
                        </nuxt-link>
                    </div>
                </div>
                <div class="house-tagLine">
                    生活因为宽广，才会不断延伸
                </div>
                <div class="houses clearfix">
                    <div style="width: 342px;overflow: hidden;white-space: nowrap;" class="house fleft"
                         v-for="(usedHouse,index) in recommendDatas.used" :key="index">
                        <div class="house-img">
                            <nuxt-link to="/">
                                <img :src="'http://www.fooju.cn'+usedHouse.pic" alt=""
                                     style="overflow: hidden; width: 342px; height: 257px; left: 0px; top: 0px;">
                            </nuxt-link>
                        </div>
                        <div class="price-tag">{{usedHouse.total_price}}万</div>
                        <div class="bottom">
                            <div class="addr-name">
                                <span class="name" v-text="usedHouse.title"></span>
                            </div>
                            <div class="house-feature clearfix">
                                <div class="feature fleft">
                                    <span>{{usedHouse.bedroom}}室{{usedHouse.livingroom}}厅{{usedHouse.wc}}卫</span>
                                    <span>{{usedHouse.built_area}}㎡</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rental house-common">
                <div class="top clearfix">
                    <div class="title fleft">
                        精品租房
                    </div>
                    <div class="more fright">
                        <nuxt-link to="/zuHouse">
                            更多租房
                            <i class="iconfont icon-mjiantou"></i>
                        </nuxt-link>
                    </div>

                </div>
                <div class="house-tagLine">与其等待，不如坐享繁华</div>
                <div class="houses clearfix">
                    <div class="house fleft" v-for="(retalHouse,index) in recommendDatas.retal" :key="index">
                        <div class="house-img">
                            <nuxt-link to="/">
                                <img :src="'http://www.fooju.cn'+retalHouse.pic" alt="" style="overflow: hidden; width: 342px; height: 257px; left: 0; top: 0;">
                            </nuxt-link>
                        </div>
                        <div class="bottom">
                            <div class="addr-name">
                                <span class="addr"></span>
                                <span class="name">{{retalHouse.title}}</span>
                            </div>
                            <div class="house-feature clearfix">
                                <div class="feature fleft">

                                    <span>{{retalHouse.bedroom}}室{{retalHouse.livingroom}}厅{{retalHouse.wc}}卫</span>
                                    <span>{{retalHouse.built_area}}㎡</span>
                                    <span></span>
                                </div>
                                <div class="price fright">{{retalHouse.rent}}{{retalHouse.rent_type}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <friendshipsLinks></friendshipsLinks>
        <indexFooter></indexFooter>
        <right_nav/>

    </div>
</template>

<script>
    import axios from '~/plugins/axios2'
    import qs from "qs"
    import api from '~/mainApi/index'
    import indexHeader from '~/components/indexHeader'
    import friendshipsLinks from '~/components/friendshipsLinks.vue'
    import indexFooter from '~/components/indexFooter.vue'
    import right_nav from '~/components/right_nav.vue'
    import cookies from 'js-cookie'
    export default {
        components: {
            indexHeader,friendshipsLinks,indexFooter,right_nav,
        },
        data() {
            return {
                seletedIndex: 0,
                placeholderText: "输入小区名查找二手房",
                swiperOption: {
                    autoplay: true
                },
                user:{},
                searchWord:"",
            }
        },
        async asyncData() {
            let recommendData = await axios.get(api.paramToUrl(api.recommend))
            let bannerData = await axios.get(api.paramToUrl(api.adLists, {type: 0, position: 0}));
            return {
                recommendDatas:recommendData.data,
                bannerDatas: bannerData.data.data
            }
        },
        methods:{
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
        directives: {
            banner: {
                inserted(el, binding, vnode) {
                    function setBannerHeight() {
                        let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 106;
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
        watch: {
            seletedIndex(newIndex, oldIndex) {
                switch (newIndex) {
                    case 0:
                        this.placeholderText = "输入小区名查找二手房";
                        break;
                    case 1:
                        this.placeholderText = "输入楼盘名进行搜索";
                        break;
                    case 2:
                        this.placeholderText = "输入小区名查找出租的房屋";
                        break;
                    case 3:
                        this.placeholderText = "输入小区名搜索学区房";
                        break;
                    case 4:
                        this.placeholderText = "找小区要输入小区名";
                        break;
                }
            }
        }
    }
</script>
<style scoped>
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
    @-webkit-keyframes anim1{
        0% {top: -30px;opacity: 1}
        25% {top: 30px;opacity: 1}
        50% {top: 30px ;opacity: 0}
        75%{top:30px;opacity: 0}
        100%{top:30px;opacity: 0}
    }
    @-webkit-keyframes anim2{

        0% {top: -30px;opacity: 0}
        25% {top: -30px;opacity: 1}
        50% {top: 30px;opacity: 1}
        75%{top:30px;opacity: 0}
        100%{top: 30px;opacity: 0}
    }
    @-webkit-keyframes anim3{
        0% {top: -30px;opacity: 0}
        25% {top: -30px;opacity: 0}
        50% {top: -30px;opacity: 1}
        75%{top: 30px;opacity: 1}
        100%{top: 30px;opacity: 0}
    }
    @-webkit-keyframes anim4{
        0% {top: -30px;opacity: 0}
        25% {top: -30px;opacity: 0}
        50% {top: -30px;opacity: 0}
        75%{top: -30px;opacity: 1}
        100%{top: 30px;opacity: 1}
    }
    .box1 p:nth-child(1){

        -webkit-animation: anim1 6s linear infinite;
    }

    .box1 p:nth-child(2){

        -webkit-animation: anim2 6s linear infinite;
    }
    .box1 p:nth-child(3){

        -webkit-animation: anim3 6s linear infinite;
    }
    .box1 p:nth-child(4){

        -webkit-animation: anim4 6s linear infinite;
    }

    /**/

    .content .house-common .houses .house .bottom-content{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 16px;
        background-color: rgba(0,0,0,.5);
    }

    #banner {
        position: relative;
    }

    .opacity {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
        z-index: 99;
    }

    .index-search {
        z-index: 999;
        float: left;
        position: absolute;
        bottom: 30px;
        right: 0;
        left: 0;
        display: block;
        width: 1100px;
        margin: 0 auto;
    }

    .my-pic {
        display: block;
        width: 100%;
    }

    .banner {
        width: 100%;
    }

    ul {
        display: flex;
        justify-content: flex-start;
    }

    li {
        padding-bottom: 30px;
        margin-right: 30px;
        cursor: pointer;
        position: relative;
        height: 48px;
        box-sizing: border-box;
        overflow: hidden;
    }

    li a {
        font-size: 16px;
        color: #fff;
    }

    li a:hover {
        font-weight: 700;
    }

    li.active::after {
        content: "";
        border: 10px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -10px
    }

    .index-search-bottom input {
        outline: none;
        width: 740px;
        height: 60px;
        border-width: 0;
        padding: 0 0 0 10px;
        margin-bottom: 70px;
        box-sizing: border-box;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
    }

    .index-search-bottom .search-btn {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        cursor: pointer;
        display: inline-block;
        width: 160px;
        height: 60px;
        line-height: 60px;
    }

    .index-search-bottom .search-btn a {
        color: #ffffff;
        display: inline-block;
        width: 160px;
        height: 60px;
        line-height: 60px;
    }

    .index-search-bottom .search-btn1 a {
        background-color: #c30d23;
        text-align: center;
    }

    .index-search-bottom .search-btn2 {
        margin-left: 20px;
        border-radius: 3px;
        background-color: #5f1985;
        display: inline-block;
        width: 180px;
    }

    .index-search-bottom .search-btn2 a {
        display: inline-block;
        width: 180px;
        height: 60px;
        line-height: 60px;
        color: #ffffff;
        padding-left: 75px;
        position: relative;
        box-sizing: border-box;
    }

    .index-search-bottom .search-btn2 a img {
        position: absolute;
        top: 50%;
        left: 35px;
        transform: translateY(-50%);
    }

    .content {
        display: block;
        width: 1100px;
        /*height: 500px;*/
        margin: 0 auto;
    }

    .top-btngroup {
        width: 100%;
        margin: 40px 0;
        display: table;
    }

    .content .top-btngroup .btn {
        text-align: center;
        box-sizing: border-box;
        padding: 0 40px;
        width: 25%;
        display: table-cell;
        vertical-align: top;
    }

    .content .top-btngroup .btn > a {
        display: inline-block;
        width: 100%;
    }

    .content .top-btngroup .btn > a img {
        height: 90px;
        border-style: none;
    }

    .content .top-btngroup .btn > a .title {
        font-size: 20px;
        color: #333;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .content .top-btngroup .btn > a .text {
        font-size: 14px;
        color: #666;
    }

    .content .features {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .content .features .feature:first-child {
        margin-left: 0;
    }

    .content .features .feature {
        display: inline-block;
        width: 300px;
        position: relative;
        margin-left: 100px;
    }

    .container > .content .features .feature img {
        width: 100%;
    }

    .content .features .feature .featureText {
        position: absolute;
        color: #fff;
        font-size: 24px;
        top: 140px;
        width: 220px;
        left: 50%;
        margin-left: -110px;
        text-align: center;
        letter-spacing: 2px;
    }

    .content .house-common {
        margin-bottom: 40px;
        width: 100%;
    }

    .content .house-common .top {
        margin-bottom: 20px;
    }

    .content .house-common .top .title {
        font-size: 30px;
        font-weight: bolder;
        color: #333;
    }

    .content .house-common .top .more a {
        font-size: 16px;
        color: #999;
    }

    .content .house-common .house-tagLine {
        margin-bottom: 40px;
        color: #666;
    }

    .content .house-common .houses > :first-child.house {
        margin-left: 0;
    }

    .content .house-common .houses .house {
        position: relative;
        margin-left: 37px;
        width: 342px;
    }

    .content .house-common .houses .house .house-img {
        width: 342px;
        height: 257px;
        overflow: hidden;
        position: relative;
    }

    .content .house-common .houses .house .house-img a:hover img {
        transform: scale(1.1);
    }

    .content .house-common .houses .house .house-img a img {
        /*cursor: pointer;*/
        transition: all 0.5s;
    }

    .content .house-common .houses .house .price-tag {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        min-width: 70px;
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        padding-right: 20px;
        background: url("../static/imgs/pricetag.png") no-repeat;
        background-size: 100% 100%;
        font-size: 20px;
        color: #fff;
    }

    .content .house-common .houses .house .bottom .addr-name {
        font-size: 16px;
        color: #333;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .content .house-common .houses .house .bottom span {
        margin-right: 5px;
    }

    .content .house-common .houses .house .bottom .house-feature {
        font-size: 14px;
    }

    .content .house-common .houses .house .bottom .house-feature .feature {
        color: #666;
    }
    .content .house-common .houses .house .bottom span {
        margin-right: 5px;
    }
    .content .house-common .houses .house .bottom .house-feature .price {
        color: #c30d23;
    }

</style>
