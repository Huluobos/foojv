<template>
    <div class="borker">
        <div class="top" @click="show2 = !show2">
            <i class="iconfont icon-dianhua"></i>
            <span>咨询经纪人</span>
        </div>
        <transition name="el-zoom-in-bottom">
            <div class="down" v-show="show2">
                <span>{{brokerName}}</span>
                <span>{{brokerPhone}}</span>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "broker",
        props:{
            brokerName:String,
            brokerPhone:String,
        },
        data(){
            return{
                show2:false
            }
        }
    }
</script>

<style scoped>
.borker{
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;
    border-radius: 3px;
    box-shadow: 0 0 4px 4px #ccc;
}
    .borker .top{
        width: 300px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
.borker i{
     color: #c30d23;
     font-size: 18px;
     display: inline-block;
     margin-right: 20px;
     margin-left: 20px;
 }
.borker span{
    color: #333;
    font-size: 14px;
}
.borker .down{
    height: 73px;
    line-height: 73px;
}
.borker .down span:nth-child(1){
    display: inline-block;
    float: left;
    line-height: 73px;
    margin-left: 30px;
    font-size: 14px;
    color: #333;
}
.borker .down span:nth-child(2){
    line-height: 73px;
    margin-left: 20px;
    font-size: 14px;
    color: #c30d23;
    display: inline-block;
    float: right;
    margin-right: 20px;
}
</style>