<template>
    <div>
        <div class="secondHandList_content">
            <div class="content_top">
                <nuxt-link to="/">福居网</nuxt-link>><nuxt-link to="/">二手房</nuxt-link>
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
                        <el-checkbox v-model="isChecked.total_price" @change="handleClear('total_price')">不限</el-checkbox>
                        <el-checkbox-group v-model="formData.total_price" @change="handleChange('total_price')">
                            <el-checkbox v-for="item in fillData.total_priceData" :label="item" :key="item.id">
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
                <!--户型-->
                <div class="huxing">
                    <span class="fleft region-title" >户型</span>
                    <span class="region">
                        <el-checkbox-group v-model="formData.bedroom"  @change="handleCustom">
                            <el-checkbox v-for="item in fillData.bedroomData" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </span>
                </div>
                <!--户型结束-->

                <transition name="el-zoom-in-top">
                <!--更多选项的筛选-->
                    <div class="hiddenBox" v-if="showCcData">
                        <!--类型-->
                        <div class="leixing">
                            <span class="fleft region-title" >类型</span>
                            <span class="region">
                    <el-checkbox-group v-model="formData.type"  @change="handleCustom">
                        <el-checkbox v-for="item in fillData.typeData" :label="item" :key="item.id">
                            {{item.title}}
                        </el-checkbox>
                    </el-checkbox-group>
                </span>
                        </div>
                        <!--类型结束-->
                        <!--装修-->
                        <div class="zhaungxiu">
                            <span class="fleft region-title" >装修</span>
                            <span class="region">
                    <el-checkbox-group v-model="formData.decoration"  @change="handleCustom">
                        <el-checkbox v-for="item in fillData.decorationData" :label="item" :key="item.id">
                            {{item.title}}
                        </el-checkbox>
                    </el-checkbox-group>
                </span>
                        </div>
                        <!--装修结束-->
                        <!--朝向-->
                        <div class="chaoxiang">
                            <span class="fleft region-title" >朝向</span>
                            <span class="region">
                    <el-checkbox-group v-model="formData.direction"  @change="handleCustom">
                        <el-checkbox v-for="item in fillData.directionData" :label="item" :key="item.id">
                            {{item.title}}
                        </el-checkbox>
                    </el-checkbox-group>
                </span>
                        </div>
                        <!--朝向结束-->
                        <!--面积-->
                        <div class="mianji">
                            <span class="fleft region-title" >面积</span>
                            <span class="region">
                    <el-checkbox v-model="isChecked.built_area" @change="handleClear('built_area')">不限</el-checkbox>
                    <el-checkbox-group v-model="formData.built_area" @change="handleChange('built_area')">
                        <el-checkbox v-for="item in fillData.built_areaData" :label="item" :key="item.id">
                            {{item.title}}
                        </el-checkbox>
                    </el-checkbox-group>
                </span>
                        </div>
                        <!--面积输入-->
                        <div class="custom-price clearfix" style="margin-bottom: 20px;">
                            <span class="title fleft" style="font-size: 14px;color: #333;float: left;width: 96px;font-weight: 400;">&nbsp;</span>
                            <div class="custom-price-wrap fleft">
                                <input type="text" class="min-price" v-model="formData.minCustom_bulit_area">
                                <span class="split">-</span>
                                <input type="text" class="max-price" v-model="formData.maxCustom_bulit_area">
                                <span class="units">平</span>
                                <button class="custom-btn" @click="handleCustom" style="cursor: pointer">确定</button>
                            </div>
                        </div>
                        <!--面积结束-->
                        <!--楼龄-->
                        <div class="louling">
                            <span class="fleft region-title" >楼龄</span>
                            <span class="region">
                    <el-checkbox v-model="isChecked.age" @change="handleClear('age')">不限</el-checkbox>
                    <el-checkbox-group v-model="formData.age" @change="handleChange('age')">
                        <el-checkbox v-for="item in fillData.ageData" :label="item" :key="item.id">
                            {{item.title}}
                        </el-checkbox>
                    </el-checkbox-group>
                </span>
                        </div>
                        <!--楼龄结束-->
                        <!--楼层-->
                        <div class="louceng">
                            <span class="fleft region-title" >楼层</span>
                            <span class="region">
                        <el-checkbox v-model="isChecked.floor_type" @change="handleClear('floor_type')">不限</el-checkbox>
                        <el-checkbox-group v-model="formData.floor_type" @change="handleChange('floor_type')">
                            <el-checkbox v-for="item in fillData.floor_typeData" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </span>
                        </div>
                        <!--楼层结束-->
                        <!--电梯-->
                        <div class="dianti">
                            <span class="fleft region-title" >电梯</span>
                            <span class="region">
                        <el-checkbox-group v-model="formData.dianti" @change="handleChange('dianti')">
                            <el-checkbox v-for="item in fillData.diantiData" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </span>
                        </div>
                        <!--电梯end-->

                        <!--筛选分类-->
                        <div class="shaicuanfenle">
                            <span class="fleft region-title" >
                                筛选分类
                            </span>
                            <span class="region">
                                <span class="fenleiCc" v-for="item in selectedData" @click="handleReduce(item)" :key="item.index">
                                    {{item.title}}
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
                        <span class="fenleiCc" v-for="item in selectedData" @click="handleReduce(item)" :key="item.index">
                            {{item.title}}
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
                <h2>共找到<span style="color: #c30d23">{{houseCount}}</span>个二手房源</h2>
                <div class="house-item clearfix" v-for="(item,index) in houseArr" :key="index">
                        <nuxt-link :to="'/houseDetails?id=' + item.id">
                            <div class="item-img fleft">
                                <img :src="'http://www.fooju.cn'+item.pic" alt="">
                            </div>
                            <div class="fleft item-msg">
                                <div class="title">
                                    {{item.title}}
                                </div>
                                <div class="introduce">
                                <span>
                                    {{item.village}}|{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫|{{item.direction}}
                                </span>
                                </div>
                                <div class="build mt-20">
                                <span>
                                    {{item.floor}}/{{item.floor_totle}}
                                    |
                                    {{item.decoration}}
                                </span>
                                </div>
                                <div class="construction-time mt-20">
                                <span>
                                    {{item.age}}年建
                                    |
                                    {{item.type}}
                                </span>
                                </div>
                                <div class="attention mt-20">
                                <span>
                                   {{item.guanzhu}}人关注
                                    |
                                    共{{item.guanzhu_num}}次带看
                                    |
                                    {{item.fabushijian>0?`${item.fabushijian}天前发布`:"今天发布"}}
                                    <!--这里就是关于差值{{}}中的简单运算-->
                                </span>
                                </div>
                                <div class="good-point" >
                                <span v-if="item.lable" style="background:#5f1985;color:#FFFFFF;" v-for="label in item.lable">
                                {{label.name}}
                            </span>
                                </div>
                            </div>
                        </nuxt-link>
                        <div class="price-box flr">
                            <div class="total-price">
                                {{item.total_price}} <span class="unit">万</span>
                            </div>
                            <div class="unit-price">
                                单价{{item.unit_price}}元/平米
                            </div>
                            <div class="follow two" @click="noFocus(item.id)" v-if="item.guanzhu != '0'">
                                已关注
                            </div>
                            <div class="follow one" @click="toFocus(item.id)" v-if="item.guanzhu == '0'">
                                关注
                            </div>

                        </div>
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
                        :total="houseCount"
                        :current-page="params.page_num"
                        :page-size=params.page_size
                        @current-change="getDataPage">
                </el-pagination>
            </div>
            <!--分页器end-->
        </div>

    </div>
</template>

<script>
    import axios from "../plugins/axios";
    import axios2 from "../plugins/axios2";
    import qs from "qs";
    import api from "../mainApi/index";
    import cookies from 'js-cookie'
    export default {
        name: "secondHeadHouse",
        layout:"second",
        data(){
            return{
                showFoucs:[],
                showCcData: false,
                formData: {
                    r_id: [],
                    total_price: [],
                    bedroom: [],  //户型
                    minPrice: "",
                    maxPrice: "",
                    type: [],
                    decoration: [],
                    direction: [],
                    built_area: [],
                    minCustom_bulit_area: "",
                    maxCustom_bulit_area: "",
                    dianti: [],
                    age: [],
                    floor_type: [],
                    search: "",
                    order: 1
                },
                fillData: {
                    total_priceData: [
                        {
                            title: "30万以下",
                            id: '0-30'
                        },
                        {
                            title: "30-40万",
                            id: '30-40'
                        },
                        {
                            title: "40-50万",
                            id: '40-50'
                        },
                        {
                            title: "50万以上",
                            id: '50-99999'
                        }
                    ],
                    bedroomData: [
                        {title: "一室", id: 0},
                        {title: "两室", id: 1},
                        {title: "三室", id: 2},
                        {title: "四室", id: 3},
                        {title: "五室", id: 4}
                    ],
                    typeData: [
                        {title: '平层', id: 0},
                        {title: '复式', id: 1},
                        {title: '跃层', id: 2}
                    ],
                    decorationData: [
                        {title: '毛坯', id: 0},
                        {title: '豪装', id: 1},
                        {title: '精装', id: 2},
                        {title: '简装', id: 3},
                        {title: '中装', id: 4}
                    ],
                    directionData: [
                        {title: '东', id: 0},
                        {title: '西', id: 1},
                        {title: '南', id: 2},
                        {title: '北', id: 3},
                        {title: '南北', id: 4},
                        {title: '西南', id: 5},
                        {title: '东北', id: 6},
                        {title: '东北', id: 7},
                        {title: '西北', id: 8},
                        {title: '东西', id: 9}
                    ],
                    built_areaData: [
                        {title: '50平以下', id: 1},
                        {title: '50-70平', id: 2},
                        {title: '70-90平', id: 3},
                        {title: '90以上', id: 4}
                    ],
                    diantiData: [{id: 0, title: '是'}, {id: 1, title: '否'}],
                    ageData: [
                        {id: 1, title: '5年以内'},
                        {id: 2, title: '10年以内'},
                        {id: 3, title: '15年以内'},
                        {id: 4, title: '15年以上'}
                    ],
                    floor_typeData: [
                        {id: 1, title: "底层"},
                        {id: 2, title: "低楼层"},
                        {id: 3, title: "中层"},
                        {id: 4, title: "中高层"},
                    ],
                    orderData: [
                        {
                            title: "最新",
                            id: 1
                        },
                        {
                            title: "房屋总价",
                            id: 2
                        },
                        {
                            title: "房屋单价",
                            id: 6
                        },
                        {
                            title: "房屋面积",
                            id: 4
                        }
                    ]
                },
                isChecked: {
                    r_id: true,
                    total_price: true,
                    built_area: true,
                    floor_type: true,
                    age:true,
                },
                params: {
                    page_size: 10,
                    page_num: 1,
                    order: 1
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
            showCc(){
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
               let itemIndex = this.formData[item._parentName].findIndex(value => item.id ==value.id)
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
                if(cookies.get("userid")){
                    let id = cookies.get("userid")
                    params.userid = id
                }
                for (let key in formData){
                    if(formData[key] instanceof Array&& formData[key].length>0){
                        params[key] = formData[key].map(item=>item.id)
                    }
                }
                const loading = this.$loading({
                    lock: true,
                    text: '拼命加载中。。。',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$axios.get(api.paramToUrl(api.used_lists,params)).then(res=>{
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    if(res.data.code == 200){
                        loading.close();   ////close  未定义
                    }
                })
            },
            toFocus(item){
                let id =  cookies.get("userid")
                let params = {
                    type: 1,
                    user_id: id,
                    house_id: item
                }
                this.$axios.post(api.paramToUrl(api.houseCollect),params).then(res=>{
                    if(res.data.code===200){
                        this.$message({
                            message: "关注成功",
                            type: 'success'
                        })
                        setTimeout(()=>{
                            this.$router.go(0)
                        },1500)
                    }else{
                        // console.log(res);
                    }
                })
            },
            noFocus(item){
                let id =  cookies.get("userid")
                let params = {
                    type: 1, //1代表二手房  2代表新房  3代表租房
                    user_id: id,
                    house_id: item
                }
                this.$axios.post(api.paramToUrl(api.houseCollectCancel),params).then(res=>{
                    if(res.data.code===200){
                        this.$message({
                            message: "取消关注成功",
                            type: 'success'
                        })
                        setTimeout(()=>{
                            this.$router.go(0)
                        },1500)
                    }else{
                        // console.log(res);
                    }
                })
            },
        },
        computed:{
            selectedData(){
                let formData = this.formData;
                let allData = [];
                for (let key in formData){
                    // if (formatDate[key] != []){
                    //     formatDate[key].forEach(val=>{
                    //         allData.push(val)
                    //     })
                    // }
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
        created(){
            this.getData()
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
    .house-list .house-item .price-box .two{
        border: 1px solid #ccc;
        color: #666;
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
