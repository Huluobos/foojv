<template>
    <div class="friendships-links">
        <div class="links">
            <div class="title">
                友情链接
            </div>
            <div class="link-list clearfix">
                <nuxt-link to="/" class="fleft">成都房产网</nuxt-link>
                <nuxt-link to="/" class="fleft">二手房网</nuxt-link>
                <nuxt-link to="/" class="fleft">福居网资讯</nuxt-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* 底部友情连接*/
    .friendships-links, .leaderboard div img{
        width: 100%;
    }
    .friendships-links, .header .bottom .select-city>.District2County li:hover{
        background-color: #f4f4f4;
    }
    .friendships-links .links{
        padding-top: 60px;
        padding-bottom: 60px;
        width: 1100px;
        margin: 0 auto;
    }
    .friendships-links .links .title{
        font-size: 30px;
        font-weight: bolder;
        margin-bottom: 30px;
    }
    .friendships-links .links .link-list a{
        display: inline-block;
        width: 122.22px;
        font-size: 14px;
        color: #999;
        margin-bottom: 10px;
    }
</style>