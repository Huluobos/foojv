<template>
    <div>
        <secondHeader :xinXi="user"></secondHeader>
        <newHouseSearch></newHouseSearch>
        <div class="content">
            <div class="top_title">
                <span class="top_title_l">
                    福居网> 新房首页> 盛世国际> 相册
                </span>
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
</style>