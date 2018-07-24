<template>
    <div>
        <div>
            <indexHeader :xinXi="user"></indexHeader>

            <div class="content">
                <div class="slogon-wrap">
                    <div class="title">购房工具</div>
                    <div class="slogon">复杂的房贷税费计算，购房工具帮你解决</div>
                </div>
                <div class="tabWrap">
                    <div class="bbb"></div>
                    <div class="tabWrap_box">
                        <el-tabs :stretch=true type="card" v-model="activeName">
                            <el-tab-pane label="房贷计算器" name="1">
                                1
                            </el-tab-pane>
                            <el-tab-pane label="二手房税费计算器" name="2">
                                2
                            </el-tab-pane>
                            <el-tab-pane label="新房税费计算器" name="3">
                                3
                            </el-tab-pane>
                        </el-tabs>
                    </div>

                </div>
            </div>

            <friendshipsLinks></friendshipsLinks>
            <indexFooter></indexFooter>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios2'
    import qs from "qs"
    import api from '~/mainApi/index'
    import indexHeader from '~/components/indexHeader'
    import friendshipsLinks from '~/components/friendshipsLinks.vue'
    import indexFooter from '~/components/indexFooter.vue'
    import cookies from 'js-cookie'
    export default {
        name: "tool",
        components: {
            indexHeader,friendshipsLinks,indexFooter,
        },
        data() {
            return {
                user:{},
                activeName: '1',

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
            onSubmit(){
                console.log(AXIOS);
            }

        },
        created(){
            this.getCookies()
        },
    }
</script>

<style scoped>
    .bbb{
        width: 1100px;
        border-bottom: 1px solid rgba(0,0,0,.1);
        position: absolute;
        top: 40px;
    }
    .content{
        width: 1100px;
        margin: 0 auto;
    }
    .content .slogon-wrap{
        text-align: center;
        margin: 20px 0 80px;
        /*color: #c30d23;*/
    }
    .content .slogon-wrap .title{
        font-size: 40px;
        color: #333;
        margin-bottom: 10px;
    }
    .content .slogon-wrap .slogon{
        font-size: 16px;
        color: #999999;
    }
    .tabWrap{
        position: relative;
    }
    .tabWrap_box{
        width: 600px;
        margin: 0 auto;
    }
    .btna{
        width: 100%;
        background-color: #c30d23;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border: none;
        margin: 40px auto 80px;
    }
</style>
