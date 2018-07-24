<template>
    <div>
        <div class="slogon-wrap">
            <div class="title">帮我找房</div>
            <div class="slogon">买新房、买二手房，租房，福居网帮你搞定</div>
        </div>
        <div class="tabWrap">
                    <div class="bbb"></div>
                    <div class="tabWrap_box">
                        <div class="column clearfix">
                            <span class="column-left fleft">
                                小区
                            </span>
                        <div class="column-right fleft">
                            <input type="radio" value="0" name="dan" id="secondHand" checked="checked">
                            <label for="secondHand">二手房</label>
                            <input type="radio" value="4" name="dan" id="newHouse">
                            <label for="newHouse">新房</label>
                            <input type="radio" value="1" name="dan" id="rendHouse">
                            <label for="rendHouse">租房</label>
                        </div>
                    </div>
                        <div class="column clearfix">
                            <span class="column-left fleft">
                                姓名
                            </span>
                            <div class="column-right fleft">
                                <el-input placeholder="请输入姓名"></el-input>
                            </div>
                        </div>
                        <div class="column clearfix">
                            <span class="column-left fleft">
                                手机
                            </span>
                            <div class="column-right fleft">
                                <el-input placeholder="请输入手机号"></el-input>
                            </div>
                        </div>
                        <button @click="onSubmit" class="btna">提交委托</button>
                    </div>

                </div>
    </div>
</template>

<script>
    export default {
        name: "findHouse",
        layout:"simple",
        data() {
            return {

                activeName: '1',
            }
        },
        methods:{
            onSubmit(){
                console.log("AXIOS");

            }

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
    .slogon-wrap{
        text-align: center;
        margin: 20px 0 80px;
        /*color: #c30d23;*/
    }
     .slogon-wrap .title{
        font-size: 40px;
        color: #333;
        margin-bottom: 10px;
    }
     .slogon-wrap .slogon{
        font-size: 16px;
        color: #999999;
    }
    .tabWrap{
        position: relative;
    }
    .tabWrap_box{
        width: 400px;
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
    .column{
        width: 100%;
        margin: 20px 0;
        border-bottom: 1px solid rgba(0,0,0,.1);
        padding-bottom: 20px;
        color: #333333;
    }
    .column .column-left{
        font-size: 18px;
        width: 80px;
        height: 30px;
        line-height: 30px;
    }
    .column-right input{
        height: 30px;
        vertical-align: middle;
        border: 0;
        color: #666666;
        box-sizing:border-box;
        padding: 0;
    }
    .column-right label{
        margin-right: 30px;
    }
   .column .column-right input[type=text]{
       width: 300px;
   }
</style>
