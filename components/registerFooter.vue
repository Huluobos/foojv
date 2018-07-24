<template>
  <footer>
    <span>北京福居网网络科技有限公司</span>
    <span>Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有</span>
    <span>京ICP备13012924号-1</span>
  </footer>
</template>
<script>
    export default {
        name: "registerFooter"
    }
</script>
<style scoped>
  footer{
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    width: 1150px;
    margin: 30px auto 0;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer span{
    font-weight: 400;
    color: #666666;
    font-size: 13px;
    display: inline-block;
    height: 16px;
    text-align: left;
    padding:0 10px;
  }
  footer span:nth-child(1),span:nth-child(2){
    border-right: 1px solid rgba(161, 161, 161, 1);
  }
</style>