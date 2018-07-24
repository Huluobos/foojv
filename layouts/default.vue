<template>
  <div>
    <nuxt/>

  </div>
</template>

<script>
    import axios from '~/plugins/axios'

    export default {

    }
</script>

<style>
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  /* 清除浮动*/
  .clearfix{
    clear: both;
    content: "";
    overflow: hidden;
  }
  /* 浮动*/
  .fleft {
    float: left;
  }
  .fright{
    float: right;
  }


  .mt-20{
    margin-top: 20px;
  }

  /*  搜索框  公共样式  从二手房 页面开始*/

  </style>