<template>
    <div>
        <div>
            <div class="right_top">
                您关注的房源/小区
            </div>
            <div class="test">
                <ul class="clearfix">
                    <li @click="changeActive('1')">
                        <nuxt-link to="" :class="{active:this.forActive=='1'}" >二手房</nuxt-link>
                    </li>
                    <li @click="changeActive('2')">
                        <nuxt-link to="" :class="{active:this.forActive=='2'}">新房</nuxt-link>
                    </li>
                    <li @click="changeActive('3')">
                        <nuxt-link to="" :class="{active:this.forActive=='3'}" >租房</nuxt-link>
                    </li>
                    <li @click="changeActive('4')">
                        <nuxt-link to="" :class="{active:this.forActive=='4'}" >小区</nuxt-link>
                    </li>
                </ul>
                <div class="test0">
                    <div class="house-list" style="margin: 30px auto;">
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
                                    <span>{{item.village}}|{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫|{{item.direction}}</span>
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
                                        {{item.transfer_time}}年建
                                        |
                                        {{item.type}}
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
                                    {{item.total_price}}<span class="unit">万</span>
                                </div>
                                <div class="unit-price">
                                    单价{{item.unit_price}}元/平米
                                </div>
                                <div class="follow two" @click="noFocus(item.id)">
                                    取消关注
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import cookies from 'js-cookie'
    import axios from "../../plugins/axios";
    import qs from "qs";
    import api from "../../mainApi/index";
    export default {
        name: "myLike",
        layout:"myMain",
        data(){
            return{
                forActive:"1",
                houseArr:[],
            }
        },
        methods:{
            changeActive(val){
                this.forActive = val
                if(val != "4"){
                    this.getData()
                }else {
                    this.getData2()
                }
            },
            noFocus(item){
                let id =  cookies.get("userid")
                let params = {
                    type: this.forActive, //1代表二手房  2代表新房  3代表租房
                    user_id: id,
                    house_id: item
                }
                this.$axios.post(api.paramToUrl(api.houseCollectCancel),params).then(res=>{
                    if(res.data.code===200){
                        this.$message({
                            message: "取消关注成功",
                            type: 'success'
                        })
                        if(this.forActive != "4"){
                            this.getData()
                        }else {
                            this.getData2()
                        }
                    }else{
                        // console.log(res);
                    }
                })
            },
            getData(){
                this.houseArr=[]
                let params = {}
                let id = cookies.get("userid")
                params.type = this.forActive
                params.user_id = id
                let arr = []
                this.$axios.get(api.paramToUrl(api.myHouseCollect,params)).then(res=>{
                    if(res.data.code == 200){
                        res.data.datas.forEach(value=>{
                            if(value.house instanceof Array && value.house.length>0){
                                value.house.forEach(val=>{
                                    arr.push(val)
                                })
                            }
                        })
                        this.houseArr = arr;
                    }else {
                        this.$message({
                            message: "您还没有关注该类房源",
                            type: 'success'
                        })
                    }

                })
            },
            getData2(){
                this.houseArr=[]
                let params = {}
                let id = cookies.get("userid")
                params.user_id = id
                let arr = []
                this.$axios.get(api.paramToUrl(api.myHouseCollect4,params)).then(res=>{
                    if(res.data.code == 200){
                        res.data.datas.forEach(value=>{
                            if(value.house instanceof Array && value.house.length>0){
                                value.house.forEach(val=>{
                                    arr.push(val)
                                })
                            }
                        })
                        this.houseArr = arr;
                    }else {
                        this.$message({
                            message: "您还没有关注该类房源",
                            type: 'success'
                        })
                    }

                })
            },

        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>
    .test ul li{
        float: left;
        padding: 30px 0;
    }
    .test ul li a{
        margin-right: 30px;
        display: block;
    }
    .test ul li a:hover{
        color: #c30d23;
    }
    .active{
        color: #c30d23;
    }
</style>
<style scoped>
    .mt-20{
        margin-top: 20px;
    }
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
    .house-list .house-item span{
        font-size: 14px;
        color: #666;
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
        color: #c30d23;
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