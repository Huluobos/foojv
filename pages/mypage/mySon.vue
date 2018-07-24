<template>
    <div>
        <div class="right_top">
            我的经纪人
        </div>
        <div class="test">
            <ul class="clearfix">

            </ul>
            <div style="text-align: center">暂无收藏的经纪人</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mySon",
        layout:"myMain",
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