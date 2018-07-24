<template>
    <div>
        <div class="bottom2">
            <div class="bottom clearfix">
                <div class="logo">
                    <nuxt-link to="/">
                        <img src="../static/imgs/logo.png" alt="">
                    </nuxt-link>
                </div>
                <div class="select-city" v-if="this.$route.path != '/newHouseDetails'">
                    <span>呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
                </div>
                <div class="second-nav">
                    <nuxt-link to="/newHouse"  :class="{active:this.$route.path=='/newHouse'}">
                        首页
                    </nuxt-link>
                </div>
                <div class="second-nav">
                    <nuxt-link to="/newHomesList" :class="{active:this.$route.path=='/newHomesList'}">
                        楼盘
                    </nuxt-link>
                </div>
                <div class="search">
                    <input type="text" v-show="this.$route.path == '/newHouse' || this.$route.path == '/newHouseDetails'" placeholder="请输入关键字" style="padding-left: 15px">
                    <button class="btn1" v-show="this.$route.path == '/newHouse' || this.$route.path == '/newHouseDetails'">搜索</button>
                    <nuxt-link to="" v-show="this.$route.path == '/newHouse'">地图找房</nuxt-link>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "newHouseSearch"
    }
</script>

<style scoped>
    .select-city{
        transform: translateX(-35px);

    }
    .select-city{
        cursor: pointer;
        position: relative;
    }
    .select-city>span{
        display: inline-block;
        font-size: 16px;
        padding: 4px 10px;
        margin-left: 20px;
        border: 1px solid #999;
        border-radius: 15px;
        color: #333;
    }
    .select-city i{
        font-size: 14px;
        font-weight: 700;
    }
    .topHeader2{
        background-color: #f4f4f4;
    }
    .topHeader{
        width: 1100px;
        margin: 0 auto;
    }
    .nav{
        float: left !important;
        padding-top:10px;
    }
    .nav>.nav-item{
        padding-left: 30px;
        display: inline-block;
        position: relative;
    }
    .nav>.nav-item:nth-child(1){
        padding-left: 0;
    }
    .nav>.nav-item.active>a, .nav>.nav-item:hover>a{
        border-bottom-color:rgba(195,13,35,1);
        color: #c30d23;
    }
    .nav>.nav-item>a{
        border-bottom:2px solid rgba(195,13,35,0);
        padding: 10px 0 20px;
        display: inline-block;
        height: 100%;
    }
    .nav .spinner .spinner-content{
        position: absolute;
        width: 100%;
        top: 100%;
        left: 30px;
        display: none;
        z-index: 999999;
    }
    .nav>.spinner:hover>a+.spinner-content{
        display: block;
    }
    .nav .spinner .spinner-content>div{
        cursor: pointer;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 5px;
        background-color: #fff;
    }
    .loginAndRegister{
        padding-top: 20px;
    }
    .login{
        border-right: 1px solid #333;
    }
    .login, .register{
        display: inline-block;
        padding: 0 10px;
    }
    .login a, .register a{
        padding: 10px 0 ;
        font-size: 12px;
        color: #333;
    }
    .register{
        padding-right: 0;
    }
    .bottom2{
        border-bottom: 1px solid #ccc;
    }
    .bottom2 .bottom{
        font-size: 16px;
        width: 1100px;
        margin: 0 auto;
        display: table;
        height: 80px;
    }
    .bottom2 .bottom .logo{
        padding: 0 50px 0 0 ;
        width: 132px;
    }
    .bottom2 .bottom>div{
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }
    .bottom .second-nav{
        width: 80px;
        text-align: left;
    }
    .bottom .second-nav .active{
        color: #c30d23!important;
    }
    .bottom .second-nav a:hover{
        color: #c30d23!important;
    }
    .bottom2 .bottom .search{
        width: 600px;
        height: 80px;
        line-height: 80px;
        float: right;
        text-align: right;
    }
    .bottom2 .bottom .search input{
        outline: none;
        width: 300px;
        height: 40px;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    .bottom .search .btn1{
        outline: none;
        height: 40px;
        padding: 0 35px;
        background-color: #c30d23;
        margin-right: 20px;
        line-height: 40px;
        color: #fff;
        border: none;
    }
    .bottom .search a{
        display: inline-block;
        height: 40px;
        padding: 0 45px;
        background-color: #5f1985;
        line-height: 40px;
        color: #fff;
        cursor: pointer;

    }



</style>