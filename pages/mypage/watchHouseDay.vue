<template>
    <div>
        <div class="right_top">
            看房日程
        </div>
        <div class="test">
            <ul class="clearfix">

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "watchHouseDay",
        layout:"myMain"
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