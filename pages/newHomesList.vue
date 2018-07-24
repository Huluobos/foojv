<template>
    <div>
        <secondHeader :xinXi="user"></secondHeader>
        <newHouseSearch></newHouseSearch>

        <div class="secondHandList_content">
            <div class="content_top">
                <nuxt-link to="/">福居网</nuxt-link>><nuxt-link to="/">新房首页</nuxt-link>><nuxt-link to="/">新房</nuxt-link>
            </div>
            <div class="search clearfix">
                <input type="text" placeholder="搜索" class="text fleft">
                <input type="button" value="搜索" class="btn fleft">
            </div>

            <!--开始筛选-->
            <div class="filter-box clearfix" style="margin-top: 40px;width: 1100px">
                <!--区域-->
                <div class="quyu">
                    <span class="fleft region-title" >区域</span>
                    <span class="region">
                        <el-checkbox v-model="isChecked.r_id" @change="handleClear('r_id')">不限</el-checkbox>
                        <el-checkbox-group v-model="formData.r_id" @change="handleChange('r_id')">
                            <el-checkbox v-for="item in fillData2.r_idData" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </span>
                </div>
                <!--区域结束-->
                <!--价格-->
                <div class="jiage">
                    <span class="fleft region-title" >价格</span>
                    <span class="region">
                        <el-checkbox v-model="isChecked.average_price" @change="handleClear('average_price')">不限</el-checkbox>
                        <el-checkbox-group v-model="formData.average_price" @change="handleChange('average_price')">
                            <el-checkbox v-for="item in fillData.average_price" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </span>
                </div>
                <!--价格输入-->
                <div class="custom-price clearfix" style="margin-bottom: 20px;">
                    <span class="title fleft" style="font-size: 14px;color: #333;float: left;width: 96px;font-weight: 400;">&nbsp;</span>
                    <div class="custom-price-wrap fleft">
                        <input type="text" class="min-price" v-model="formData.minPrice">
                        <span class="split">-</span>
                        <input type="text" class="max-price" v-model="formData.maxPrice">
                        <span class="units">万</span>
                        <button class="custom-btn" @click="handleCustom" style="cursor: pointer">确定</button>
                    </div>
                </div>
                <!--价格结束-->
                <!--房屋属性-->
                <div class="shuxing">
                    <span class="fleft region-title" >户型</span>
                    <span class="region">
                        <el-checkbox-group v-model="formData.house_property"  @change="handleCustom">
                            <el-checkbox v-for="item in fillData.house_property" :label="item" :key="item.value">
                                {{item.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </span>
                </div>
                <!--房屋属性结束-->

                <transition name="el-zoom-in-top">
                    <!--更多选项的筛选-->
                    <div class="hiddenBox" v-if="showCcData">
                        <!--类型-->
                        <div class="leixing">
                            <span class="fleft region-title" >类型</span>
                            <span class="region">
                                <el-checkbox-group v-model="formData.building_type"  @change="handleCustom">
                                    <el-checkbox v-for="item in fillData.building_type" :label="item" :key="item.value">
                                        {{item.name}}
                                    </el-checkbox>
                                </el-checkbox-group>
                            </span>
                        </div>
                        <!--类型结束-->
                        <!--筛选分类-->
                        <div class="shaicuanfenle">
                            <span class="fleft region-title" >
                                筛选分类
                            </span>
                            <span class="region">
                                <span class="fenleiCc" v-for="(item,index) in selectedData" @click="handleReduce(item)" :key="item.index">
                                    {{item.title||item.name}}
                                    <i class="iconfont icon-cha fright"></i>
                                </span>
                                <span class="clearAll" @click="handleClearAll">
                                    <i class="iconfont icon-lajitong"></i> 清除全部
                                </span>
                            </span>
                        </div>
                        <!--筛选分类结束-->
                        <div class="more">
                            <div style="cursor: pointer" @click="showCc">
                                <span>收起选项</span>
                                <i class="iconfont icon-jiantoushang" ></i>
                            </div>
                        </div>
                    </div>
                    <!--更多选项的筛选end-->
                </transition>

                <!--筛选分类-->
                <div class="shaicuanfenle" v-if="!showCcData">
                    <span class="fleft region-title" >
                        筛选分类
                    </span>
                    <span class="region">
                        <span class="fenleiCc" v-for="(item,index) in selectedData" @click="handleReduce(item)" :key="item.index">
                            {{item.title||item.name}}
                            <i class="iconfont icon-cha fright"></i>
                        </span>
                        <span class="clearAll" @click="handleClearAll">
                            <i class="iconfont icon-lajitong"></i> 清除全部
                        </span>
                    </span>
                </div>
                <!--筛选分类结束-->

                <div class="more"  v-if="!showCcData">
                    <div style="cursor: pointer" @click="showCc">
                        <span>更多选项</span>
                        <i class="iconfont icon-jiantouxia"></i>
                    </div>
                </div>

            </div>
            <!--筛选结束-->


            <!--排序按钮-->
            <div class="sortFilter">
                <div class="region1">
                    <label v-for="item in fillData.orderData" :key="item.id" :class="{active:params.order == item.id}">
                        {{item.title}}
                        <input type="radio" name="order" :value="item.id" @change="getData" v-model="params.order">
                    </label>
                </div>
            </div>
            <!--排序按钮end-->

            <!--房源列表-->
            <div class="house-list" style="width: 1100px;margin: 30px auto;">
                <h2>共找到<span style="color: #c30d23">{{houseCount}}</span>个新房房源</h2>
                <div class="house-item clearfix" v-for="item in houseArr" :key="item.index">
                    <nuxt-link :to="'/newHouseDetails?id=' + item.id">
                        <div class="item-img fleft">
                            <img :src="'http://www.fooju.cn'+item.pic" alt="">
                        </div>
                        <div class="fleft item-msg">
                            <div class="title">
                                {{item.title}}
                            </div>
                            <div class="introduce">
                            <span>
                                {{item.address}}
                            </span>
                            </div>
                        </div>
                        <div class="price-box flr">
                            <div class="total-price">
                                 <span class="unit">均价</span>{{item.average_price}}/平
                            </div>
                            <div class="follow">
                                关注
                            </div>
                        </div>
                    </nuxt-link>

                </div>
            </div>
            <!--房源列表end-->

            <!--分页器start-->
            <div class="pagination" style="margin: 50px 0;text-align: right">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        prev-text="上一页"
                        next-text="下一页"
                        :total=houseCount
                        :current-page="params.page_num"
                        :page-size=params.page_size
                        @current-change="getDataPage">
                </el-pagination>
            </div>
            <!--分页器end-->
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
        name: "newHomesList",
        components:{
            newHouseSearch,right_nav,friendshipsLinks,indexFooter,secondHeader
        },
        data(){
            return{
                user:{},
                showCcData: false,
                formData: {
                    r_id: [], //区域
                    building_type: [], //类型
                    house_property: [], //房屋属性
                    average_price: [],  //价格
                    minPrice:"",
                    maxPrice:"",
                },
                fillData: {
                    r_id: [], //区域
                    building_type: [], //类型
                    house_property: [], //房屋属性
                    average_price: [
                        {
                            title: "0-4000",
                            id: '1',
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
                            title: "10000-9999999",
                            id: '8'
                        },
                    ],
                },
                isChecked: {
                    r_id: true,
                    average_price: true,
                },
                params: {
                    page_size: 10,
                    page_num: 1,
                    order: 1,
                    r_id: [], //区域
                    building_type: [], //类型
                    house_property: [], //房屋属性
                    average_price: [],  //价格
                    // minPrice:"",
                    // maxPrice:"",
                },
                houseCount: 0,   //找到房子数
                houseArr: [],   //找到的房子
            }
        },
        async asyncData(){
            let r_idData = await axios2.get(api.paramToUrl(api.regionLists,{city:"呼和浩特"}))
            r_idData.data.data = r_idData.data.data.map(item=>{
                item.title = item.area
                return item
            })
            return{
                fillData2:{
                    r_idData:r_idData.data.data,
                }
            }
        },
        methods:{
            getNewHouseSearch(){
                this.$axios.get(api.paramToUrl(api.newHouseSearch,{type:"new"})).then(res=>{

                    this.fillData.building_type = res.data.data[0].data
                    this.fillData.house_property = res.data.data[1].data
                })
            },
            showCc(){ //加载更多  时使用哪个筛选分类
                if (this.showCcData) {
                    this.showCcData = false
                }else {
                    this.showCcData = true
                }
            },
            getDataPage(val){  //  分页
                this.params.page_num = val
                this.getData()
            },
            handleCustom(){
                this.getData()
            },
            handleClear(val){
                if(this.isChecked[val]){
                    this.formData[val].splice(0)
                }
                this.getData()
            },
            handleChange(val){
                this.isChecked[val] = this.formData[val].length>0?false:true;
                this.getData()
            },
            handleReduce(item){
                let itemIndex = this.formData[item._parentName].findIndex(val => {
                    item.id ==val.id ||  item.title == val.title || item.name == val.name
                })
                this.formData[item._parentName].splice(itemIndex,1)
                this.getData()
            },
            handleClearAll(){
                for (let arr in this.formData){
                    if(this.formData[arr] instanceof Array){
                        this.formData[arr].splice(0)
                        this.handleChange(arr)
                    }
                }
                this.getData()
            },
            getData(){
                let params = this.params
                let formData = this.formData
                for (let key in formData) {
                    if (formData[key] instanceof Array&& formData[key].length>0) {
                            console.log(formData[key])
                            var r_id1 = []
                            formData[key].forEach(val=>{
                                if(val._parentName == "building_type" || val._parentName == "house_property"){
                                    r_id1.push(val.name)
                                }if(val._parentName == "r_id"){
                                    r_id1.push(val.id)
                                }if(val._parentName == "average_price"){
                                    r_id1.push(val.title)
                                }
                            })
                            params[key] = r_id1
                            r_id1 = []
                    }
                }
                this.$axios.get(api.paramToUrl(api.new_lists,params)).then(res=>{
                    this.houseCount = res.data.count;
                    this.houseCount = parseInt(this.houseCount);
                    this.houseArr = res.data.data;
                })
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
        computed:{
            selectedData(){
                let formData = this.formData;
                let allData = [];
                for (let key in formData){
                    if (formData[key] instanceof Array) {
                        formData[key].map(item => {
                            item._parentName = key;
                            allData.push(item);
                        })
                    }
                }
                return allData;
            }
        },
        mounted(){
            this.getData()
        },
        created(){
            this.getCookies()
            this.getNewHouseSearch()
        }
    }
</script>

<style scoped>
    .house-list h2{
        font-size: 30px;
        color: #333;
        margin-top: 32px;
        margin-bottom: 40px;
    }
    .house-list .house-item{
        margin-bottom: 40px;
    }
    .house-list .house-item img{
        height: 214px;
        width: 285px;
    }
    .house-list .house-item .item-msg{
        margin-left: 30px;
    }
    .house-list .house-item .item-msg .title{
        font-size: 20px;
        margin-bottom: 30px;
        color: #333;
        font-weight: 400;
    }
    .house-list .house-item .good-point{
        margin-top: 12px;
    }
    .house-list .house-item .good-point span{
        display: inline-block;
        color: #5f1985;
        background: #efe8f3;
        padding: 4px 10px;
        border-radius: 4px;
        margin-right: 10px;
    }
    .house-list .house-item .price-box {
        text-align: right;
        color: #c30d23;
        font-size: 40px;
    }
    .house-list .house-item .price-box .unit {
        font-size: 20px;
    }
    .house-list .house-item .price-box .unit-price {
        margin-top: 20px;
        color: #666;
        font-size: 14px;
    }
    .house-list .house-item .price-box .follow{
        float: right;
        width: 100px;
        line-height: 36px;
        height: 36px;
        background: #fff;
        color: #c30d23;
        border: 1px solid #c30d23;
        border-radius: 4px;
        margin-top: 40px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
        margin-right: 0;
        box-sizing: border-box;
    }
    .house-list .house-item .price-box .cancel-follow {
        color: #666;
        border: 1px solid #ccc;
    }
</style>
<style scoped>
    .sortFilter{
        margin-top: 80px;
    }
    .sortFilter .region1 .active{
        display: inline-block;
        color: #fff;
        background-color: #c30d23;
        line-height:1.15;
        cursor: pointer;
        font-size: 18px;
        border: 1px solid #c30d23;
        padding: 10px 20px;
        border-radius: 20px;
    }
    .sortFilter .region1 label input{
        display: none;
    }
    .sortFilter .region1 label{
        display: inline-block;
        color:#c30d23;
        background-color: #fff;
        line-height:1.15;
        cursor: pointer;
        font-size: 18px;
        border: 1px solid #c30d23;
        padding: 10px 20px;
        border-radius: 20px;
        margin-left: 20px;
    }
    .shaixuan{
        margin-top: 30px;
    }
</style>
<style scoped>
    /*点击更多显示*/
    /*.hiddenBox{*/
    /*display: none;*/
    /*}*/

    /*  搜索框   筛选  从二手房 页面开始*/
    .brokerList_content, .newHomesList_content, .newSchoolHomesList_content, .rentalList_content, .rentalSchoolList_content, .residentialQuartersList_content, .secondHandList_content, .secondSchoolHomesList_content, .storesList_content{
        width: 1100px;
        margin: 20px auto 0;
    }
    .brokerList_content>.search, .newHomesList_content>.search, .newSchoolHomesList_content>.search, .rentalList_content>.search, .rentalSchoolList_content>.search, .residentialQuartersList_content>.search, .secondHandList_content>.search, .secondSchoolHomesList_content>.search, .storesList_content>.search{
        margin-top: 40px;
    }
    .brokerList_content>.content_top, .newHomesList_content>.content_top, .newSchoolHomesList_content>.content_top, .rentalList_content>.content_top, .rentalSchoolList_content>.content_top, .residentialQuartersList_content>.content_top, .secondHandList_content>.content_top, .secondSchoolHomesList_content>.content_top, .storesList_content>.content_top{
        font-size: 14px;
        color: #999;
        margin-top: 20px;
    }
    .brokerList_content>.content_top a, .newHomesList_content>.content_top a, .newSchoolHomesList_content>.content_top a, .rentalList_content>.content_top a, .rentalSchoolList_content>.content_top a, .residentialQuartersList_content>.content_top a, .secondHandList_content>.content_top a, .secondSchoolHomesList_content>.content_top a, .storesList_content>.content_top a{
        color: #999;
    }
    .brokerList_content>.search .text, .newHomesList_content>.search .text, .newSchoolHomesList_content>.search .text, .rentalList_content>.search .text, .rentalSchoolList_content>.search .text, .residentialQuartersList_content>.search .text, .secondHandList_content>.search .text, .secondSchoolHomesList_content>.search .text, .storesList_content>.search .text{
        outline: none;
        box-sizing: border-box;
        width: 740px;
        height: 60px;
        background-color: #f4f4f4;
        border: none;
        padding-left: 20px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        font-size: 14px;
        color: #999;
    }
    .brokerList_content>.search .btn, .newHomesList_content>.search .btn, .newSchoolHomesList_content>.search .btn, .rentalList_content>.search .btn, .rentalSchoolList_content>.search .btn, .residentialQuartersList_content>.search .btn, .secondHandList_content>.search .btn, .secondSchoolHomesList_content>.search .btn, .storesList_content>.search .btn{
        outline: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border: none;
        width: 160px;
        height: 60px;
        background-color: #c30d23;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 60px;
    }
    /*  搜索框  公共样式  从二手房 结束*/
    .region{
        margin-left: 40px;
        display: inline-block; width: 593px;cursor: pointer
    }
    .region .el-checkbox:nth-child(1){
        float: left;
        margin-right: 30px;
    }
    .region-title{
        display: inline-block;
        width: 60px;
        font-size: 14px;
        color: #333;
    }
    .region .el-checkbox-group .el-checkbox{
        margin-bottom: 20px;
        margin-right: 30px;
        margin-left: 0;
    }
    .fenleiCc{
        float: left;
        border: 1px solid #ccc;
        color: #c30d23;
        font-size: 14px;
        text-align: center;
        height: 26px;
        width: 110px;
        display: block;
        line-height: 26px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .fenleiCc i{
        background-color: #ccc;
        color: #fff;
        width: 26px;
    }
    .clearAll{
        color: #666;
        font-size: 14px;
        text-align: center;
        height: 26px;
        width: 110px;
        line-height: 26px;
        display: inline-block;
    }
    .clearAll i{
        color: #666;
    }
    .more{
        display: block;
        width: 100%;
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #bbb;
    }
    .more a{
        display: block;
        color: #bbb;
    }
    .custom-price-wrap input {
        width: 56px;
        height: 16px;
        color: #999;
        font-size: 14px;
        border: 1px solid #ccc;
        outline: none;
        margin-left: 8px;
    }
    .custom-price-wrap input:first-child {
        margin-left: 0;
    }
    .custom-price-wrap  .split, .units {
        margin-left: 8px;
    }
    .custom-price-wrap .custom-btn {
        background: #c30d23;
        color: #fff;
        width: 55px;
        height: 25px;
        font-size: 13px;
        text-align: center;
        line-height: 23px;
        border: none;
        margin-left: 8px;
        outline: none;
    }
</style>