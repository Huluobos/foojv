<template>
    <div>
        <div class="bottom2">
            <div class="bottom clearfix">
                <div class="logo">
                    <nuxt-link to="/">
                        <img src="../static/imgs/logo.png" alt="">
                    </nuxt-link>
                </div>

                <div class="select-city" v-if="this.$route.path=='/houseDetail'">
                    <span>呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
                </div>
                <div class="second-nav">
                    <nuxt-link to="/secondHeadHouse" class="active">
                        在售
                    </nuxt-link>
                </div>
                <div class="second-nav active">
                    <nuxt-link to="/smallQu" class="">
                        小区
                    </nuxt-link>
                </div>
                <div class="second-nav active">
                    <nuxt-link to="/" class="">
                        地图找房
                    </nuxt-link>
                </div>
                <div class="second-nav active">
                    <nuxt-link to="/tool" class="">
                        计算器
                    </nuxt-link>
                </div>
                <div class="second-nav active">
                    <nuxt-link to="/myhouse/homeOwer" class="">
                        去估价
                    </nuxt-link>
                </div>
                <div class="search"></div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "secondHeaderBottom",
    }
</script>

<style scoped>
     .select-city{
        padding-top:24px;
        float: left;
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

    .nav .spinner .spinner-content>div{
        cursor: pointer;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 5px;
        background-color: #fff;
    }

    .login a, .register a{
        padding: 10px 0 ;
        font-size: 12px;
        color: #333;
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
    .bottom .second-nav .active{
        color: #c30d23!important;
    }
    .bottom .second-nav a:hover{
        color: #c30d23!important;
    }
    .dealHide{
        display: none!important;
    }
    .bottom .search{
        width: 400px;
    }


</style>