<template>
    <div class="footer">
       <div class="about">
           <nuxt-link to="/about/we">关于我们</nuxt-link>
           <nuxt-link to="/about/tel">联系方式</nuxt-link>
           <nuxt-link to="/about/mimi">隐私声明</nuxt-link>
           <nuxt-link to="/about/banQuan">版权声明</nuxt-link>
           <nuxt-link to="/about/baoHu">法律保障</nuxt-link>
       </div>
        <div class="tips">温馨提示：呼和浩特房地产网最新购房信息请及时查看呼和浩特房地产业网官方网站【福居网】</div>
        <div class="address">地 址： 呼和浩特市赛罕区恩和大厦1909室 电 话:400-898-1018</div>
        <div class="website-filing">
            北京福居网网络科技有限公司 Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有|
            <span>京ICP备13012924号-1</span>
        </div>
        <div class="check360">
            <nuxt-link to="/">
                <img src="https://hmcdn.baidu.com/static/hmt/icon/21.gif" alt="" height="20" width="20" border="0">
            </nuxt-link>
            <span id="cnzz_stat_icon_1000295773">
                <nuxt-link to="/">
                    <img hspace="0" vspace="0" src="http://icon.cnzz.com/img/pic.gif" alt="" border="0">
                </nuxt-link>
            </span>
            <!---->
            <nuxt-link to="/" key="59097933efbfb0434cbb0b8e" logo_size="124*47" logo_type="business">
                <b id="aqLogoEIUEF" style="display: none"></b>
                <img src="//static.anquan.org/static/outer/image/hy_124x47.png?id=www.fooju.cn?t=52" alt="" height="47" width="124" border="0">
            </nuxt-link>
            <span style="display:inline-block;position:relative;width:auto;">
                <nuxt-link to="/" tabindex="-1" style="display:inline-block;">
                    <img oncontextmenu="return false;" src="http://rr.knet.cn/static/images/logo/cnnic.png" alt=""  border="0">
                </nuxt-link>
            </span>
            <nuxt-link to="/" id="___szfw_logo___" >
                <img src="http://icon.szfw.org/cert.png" alt="" border="0">
            </nuxt-link>
        </div>
    </div>
</template>
<style scoped>
    /* 底部信息*/
    .footer{
        width: 100%;
        height: 444px;
        color: #fff;
        background: url("../static/imgs/footerBg.png");
    }
    .footer .about{
        width: 100%;
        text-align: center;
        padding-top: 60px;
        margin-bottom: 30px;
    }
    .footer .about a{
        color: #fff;
        padding: 0 50px;
        font-size: 16px;
    }
    .footer .address, .footer .check360, .footer .tips, .footer .website-filing{
        width: 100%;
        text-align: center;
        font-size: 14px;
        margin-bottom: 30px;
    }
    .footer .check360{
        margin-top: 70px;
    }
    b, strong{
        font-weight:bolder;
    }
</style>