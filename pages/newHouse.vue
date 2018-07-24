<template>
    <div>
        <secondHeader :xinXi="user"></secondHeader>
        <newHouseSearch></newHouseSearch>

        <div class="index-container">
            <div class="banner" style="overflow: hidden;" v-banner>
                <div v-swiper:mySwiper="swiperOption" id="banner">
                    <div class="swiper-wrapper" style="height: 100%;position: relative">
                        <div class="swiper-slide" v-for="(banner,index) in bannerDatas" :key="index" style="height: 100%;overflow: hidden;">
                            <img :src="'http://www.fooju.cn/'+banner.picurl" class="my-pic">
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="content_box">
                        <div class="searchForm">
                            <div class="quyu">
                                <select name="quyu"  v-model="formDate.r_id" class="select-item">
                                    <option value='0' disabled selected style='display:none;'>区域</option>
                                    <option value="0">不限</option>
                                    <option v-for="item in r_idData" :key="item.id" :value="item.id">{{item.area}}</option>
                                </select>
                            </div>
                            <div class="type">
                                <select name="type"  v-model="formDate.type" class="select-item">
                                    <option value='0' disabled selected style='display:none;'>类型</option>
                                    <option  v-for="item in fillData.building_type" :key="item.value" :value="item.value">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="shuxing">
                                <select name="shuxing"  v-model="formDate.shuxing" class="select-item">
                                    <option value='0' disabled selected style='display:none;'>房屋属性</option>
                                    <option v-for="item in fillData.house_property" :key="item.value" :value="item.value">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="jiage">
                                <select name="jiage"  v-model="formDate.price" class="select-item">
                                    <option value="0" disabled selected style='display:none;'>均价</option>
                                    <option value="">不限</option>
                                    <option  v-for="item in this.fillData.price" :key="item.id" :value="item.id">{{item.title}}</option>
                                </select>
                            </div>
                            <div class="btnToList" >

                                    <button @click="this.getUrl">筛选</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div class="list">
                <div class="houses clearfix">
                    <div class="house fleft" v-for="item in this.houseList">
                        <div class="house-img">
                            <nuxt-link to="">
                                <img :src="'http://www.fooju.cn'+ item.pic[0].pic" alt=""
                                style="overflow: hidden; width: 342px; height: 257px; left: 0; top: 0;">
                            </nuxt-link>
                            <div class="bottom-content clearfix">
                                <div class="house-name">{{item.title}}</div>
                                <div class="addr">{{item.address}}</div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="house-feature clearfix">
                                <div class="fleft">
                                    均价：
                                    <span class="prices">{{item.average_price}}/平</span>
                                </div>
                                <div class="fright house-type">{{item.building_type}}</div>
                            </div>
                            <div class="spec">
                                建筑面积{{item.built_area}}㎡
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

<script>
    import secondHeader from "../components/secondHeader"
    import newHouseSearch from "../components/newHouseSearch"
    import friendshipsLinks from '~/components/friendshipsLinks.vue'
    import right_nav from '~/components/right_nav.vue'
    import indexFooter from '~/components/indexFooter.vue'
    import axios from "../plugins/axios";
    import axios2 from "../plugins/axios2";
    import qs from "qs";
    import api from "../mainApi/index";
    import cookies from 'js-cookie'
    export default {
        name: "newHouse",
        components:{
            newHouseSearch,right_nav,friendshipsLinks,indexFooter,secondHeader
        },
        data() {
            return {
                user:{},
                swiperOption: {
                    autoplay: true
                },
                formDate:{
                    r_id:"0",
                    price:"0",
                    type:"0",
                    shuxing:"0",
                },
                fillData: {
                    building_type:[],
                    house_property:[],
                    price: [
                        {
                            title: "4000",
                            id: '1'
                        },
                        {
                            title: "4000-5000",
                            id: '2'
                        },
                        {
                            title: "5000-6000",
                            id: '3'
                        },
                        {
                            title: "6000-7000",
                            id: '4'
                        },
                        {
                            title: "7000-8000",
                            id: '5'
                        },
                        {
                            title: "8000-9000",
                            id: '6'
                        },{
                            title: "9000-10000",
                            id: '7'
                        },{
                            title: "10000以上",
                            id: '8'
                        },
                    ],
                },
                params:{
                    page_size:6,
                    page_num:1
                },
                houseList:[]

            }
        },
        async asyncData() {
            let r_idData = await axios2.get(api.paramToUrl(api.regionLists,{city:"呼和浩特"}))
            let bannerData = await axios2.get(api.paramToUrl(api.adLists, {type: 0, position: 0}));
            return {
                r_idData:r_idData.data.data,
                bannerDatas: bannerData.data.data
            }
        },
        methods:{
            getNewHouseList(){
                let params = this.params
                this.$axios.get(api.paramToUrl(api.newHouse,params)).then(res=>{
                    this.houseList = res.data.data
                })
            },
            getNewHouseSearch(){
                this.$axios.get(api.paramToUrl(api.newHouseSearch,{type:"new"})).then(res=>{
                   this.fillData.building_type = res.data.data[0].data
                   this.fillData.house_property = res.data.data[1].data
                })
            },

            getUrl(){
                console.log(this.formDate);
                let urlSum = "/newHomesList?r_id=" + this.formDate.r_id + "&building_type="
                    + this.formDate.type + "&house_property=" + this.formDate.shuxing + "&average_price="+this.formDate.price
                this.$router.push(urlSum)
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
            this.getNewHouseList()
            this.getNewHouseSearch()
        },
        directives: {
            banner: {
                inserted(el, binding, vnode) {
                    function setBannerHeight() {
                        let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 145;
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
    }
</script>

<style scoped>
    .my-pic {
        display: block;
        width: 100%;
    }
    .banner {
        width: 100%;
        position: relative;
    }
    .content{
        z-index: 9999;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .content_box{
        z-index: 10008;
        margin: 0 auto;
        width: 1100px;
        height: 100%;
    }
    .searchForm{
        box-sizing: border-box;
        width: 300px;
        height: 100%;
        text-align: center;
        background-color: rgba(255,0,0,0.4);
        padding-top: 30px;
        display: block;
        z-index: 99999;
    }
    .searchForm>div{
        margin-top: 30px;
        margin-bottom: 60px;
    }
    select{
        width: 200px;
        height: 27px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .btnToList{
        text-align: center;
        margin-top: 70px;
        height: 50px;
    }
    .btnToList button{
        display: inline-block;
        outline: none;
        border: none;
        width: 200px;
        height: 50px;
        background-color: #fff;
        border-radius: 4px;
        text-align: center;
        line-height: 50px;
    }
    .list{
        width: 1100px;
        margin: 80px auto;
    }
    .houses > :first-child.house{
        margin-left: 0;
    }
    .houses .house:nth-child(4){
        margin-left: 0;
    }
    .houses .house{
        position: relative;
        margin-left: 37px;
    }
    .house{
        margin-bottom: 40px;
    }
    .houses .house .house-img{
        width: 342px;
        height: 256px;
        overflow: hidden;
        position: relative;
    }
    .houses .house .house-img img{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
    }
    .houses .house .bottom-content{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 16px;
        background-color: rgba(0,0,0,0.5);
    }
    .house-name{
        margin-bottom: 10px;
        font-weight: bolder;
        font-size: 20px;
    }
    .house-feature{
        color: #666;
        font-size: 16px!important;
        margin: 20px 0 10px;
    }
    .house-feature > :first-child{
        padding-top: 5px;
    }
    .houses .house .bottom .house-feature .prices{
        color: #c30d23;
    }
    .houses .house .bottom span{
        margin-right: 5px;
    }
    .house-feature .house-type{
        padding: 5px;
        background: rgba(153, 153, 153, 0.2);
        border-radius: 2px;
        max-width: 187px;
        font-size: 14px;
        text-align: center;

    }
    .spec{
        font-size: 14px;
        color: #666;
    }
</style>