<template>
    <div>
        <div class="right_top">
            您关注的房源/小区最新动态
        </div>
        <div class="test">
            <ul class="clearfix">
                <li @click="changeActive('one')">
                    <nuxt-link to="" :class="{active:this.forActive=='one'}" >全部</nuxt-link>
                </li>
                <li @click="changeActive('two')">
                    <nuxt-link to="" :class="{active:this.forActive=='two'}">调价</nuxt-link>
                </li>
                <li @click="changeActive('three')">
                    <nuxt-link to="" :class="{active:this.forActive=='three'}" >成交</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personalCenter",
        layout:"myMain",
        data(){
            return{
                forActive:"one"
            }
        },
        methods:{
            changeActive(val){
                this.forActive = val
            }
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