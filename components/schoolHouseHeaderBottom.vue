<template>
    <div>
        <div class="bottom2">
            <div class="bottom clearfix">
                <div class="logo">
                    <nuxt-link to="/">
                        <img src="../static/imgs/logo.png" alt="">
                    </nuxt-link>
                </div>

                <div class="select-city">
                    <span>呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
                </div>
                <div class="second-nav">
                    <nuxt-link to="/shoolSecondHouse" :class="{active: this.$route.path == '/shoolSecondHouse'}">
                        二手房
                    </nuxt-link>
                </div>
                <div class="second-nav">
                    <nuxt-link to="/shoolNewHouse" :class="{active: this.$route.path == '/shoolNewHouse'}">
                        新房
                    </nuxt-link>
                </div>
                <div class="second-nav">
                    <nuxt-link to="/shoolZuHouse" :class="{active: this.$route.path == '/shoolZuHouse'}">
                        租房
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
    .bottom .search{
        width: 580px;
    }


</style>