<template>
    <div>
            <div class="slogon-wrap">
                <div class="title">我是业主</div>
                <div class="slogon">买新房、买二手房，租房，福居网帮你搞定</div>
            </div>
            <div class="tabWrap">
                <div class="bbb"></div>
                <div class="tabWrap_box">
                    <el-tabs :stretch=true type="card" v-model="activeName">
                        <el-tab-pane label="我要卖房" name="1">
                                <el-input v-model="form.quyu" placeholder="请输入区域">
                                    <template slot="prepend">区域</template>
                                </el-input>
                                <el-input v-model="form.village" placeholder="请输入小区">
                                    <template slot="prepend">小区</template>
                                </el-input>

                                <el-input v-model="form.lou" class="aaa ddd">
                                    <template slot="prepend">详细地址</template>
                                    <template slot="append">号楼</template>
                                </el-input>
                                <el-input v-model="form.danyuan" class="aaa" >
                                    <template slot="append">单元</template>
                                </el-input>
                                <el-input v-model="form.menpai" class="aaa">
                                    <template slot="append">门牌号</template>
                                </el-input>

                                <el-input v-model="form.sales_price" class="ccc" placeholder="请输入期望售价">
                                    <template slot="prepend">期望售价</template>
                                </el-input>万元

                                <el-input v-model="form.name" placeholder="请输入姓名">
                                    <template slot="prepend">姓名</template>
                                </el-input>

                                <el-input v-model="form.tel" placeholder="请输入手机号">
                                    <template slot="prepend">手机号</template>
                                </el-input>

                                <button @click="onSubmit" class="btna">提交委托</button>

                        </el-tab-pane>
                        <el-tab-pane label="我要估价" name="2">
                            <el-input placeholder="请输入小区">
                                <template slot="prepend">小区</template>
                            </el-input>

                            <el-input>
                                <template slot="prepend">面积</template>
                                <template slot="append">平米</template>
                            </el-input>
                            <el-input>
                                <template slot="prepend">朝向</template>
                            </el-input>
                            <el-input>
                                <template slot="prepend">楼层</template>
                            </el-input>
                            <el-input>
                                <template slot="prepend">总楼层</template>
                            </el-input>
                            <el-input placeholder="请输入业主姓名">
                                <template slot="prepend">业主姓名</template>
                            </el-input>
                            <el-input placeholder="请输入业主电话">
                                <template slot="prepend">业主电话</template>
                            </el-input>
                            <el-input type="textarea" :rows="2" placeholder="输入备注">

                            </el-input>



                            <button @click="onSubmit" class="btna">提交委托</button>
                        </el-tab-pane>
                        <el-tab-pane label="我要出租" name="3">
                            <el-input v-model="form.quyu" placeholder="请输入区域">
                                <template slot="prepend">区域</template>
                            </el-input>
                            <el-input v-model="form.village" placeholder="请输入小区">
                                <template slot="prepend">小区</template>
                            </el-input>

                            <el-input v-model="form.lou" class="aaa ddd">
                                <template slot="prepend">详细地址</template>
                                <template slot="append">号楼</template>
                            </el-input>
                            <el-input v-model="form.danyuan" class="aaa" >
                                <template slot="append">单元</template>
                            </el-input>
                            <el-input v-model="form.menpai" class="aaa">
                                <template slot="append">门牌号</template>
                            </el-input>

                            <el-input v-model="form.sales_price" class="ccc" placeholder="请输入期望售价">
                                <template slot="prepend">期望售价</template>
                            </el-input>万元

                            <el-input v-model="form.name" placeholder="请输入姓名">
                                <template slot="prepend">姓名</template>
                            </el-input>

                            <el-input v-model="form.tel" placeholder="请输入手机号">
                                <template slot="prepend">手机号</template>
                            </el-input>

                            <button @click="onSubmit" class="btna">提交委托</button>
                        </el-tab-pane>
                    </el-tabs>
                </div>

            </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios2'
    import qs from "qs"
    import api from '~/mainApi/index'
    import cookies from 'js-cookie'
    export default {
        name: "homeOwer",
        layout:"simple",

        data() {
            return {
                activeName: '2',
                form: {
                    quyu: '',
                    village:"",
                    lou: '',
                    danyuan: '',
                    menpai: "",
                    sales_price:"",
                    name: '',
                    tel: '',
                }
            }
        },
        methods:{

            onSubmit(){
                console.log(this.form);
                let params ={
                    type:"",
                    address: this.form.quyu + this.form.lou + this.form.danyuan + this.form.menpai,
                    village:  this.form.village,
                    sales_price: this.form.sales_price,
                    name: this.form.name,
                    tel: this.form.tel,
                }
                this.$axios.post(api.paramToUrl(api.OperationOwner),params).then(res=>{
                    if(res.data.code==200){
                        this.$message({
                            message: "提交成功，我们的员工将在近期与您联系......",
                            type: 'success'
                        })
                    }else{
                        this.$message({
                            message: "提交失败，请重试......",
                            type: 'warning'
                        })
                    }

                })


            }

        },
    }
</script>

<style scoped>

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
        width: 500px;
        margin: 0 auto;
    }
    .bbb{
        width: 1100px;
        border-bottom: 1px solid rgba(0,0,0,.1);
        position: absolute;
        top: 40px;
    }

    .el-input{
        margin: 14px auto;
    }
    .aaa{
        width: 25%;
        margin-right: 5px;
    }
    .ddd{
        width: 46%;
    }
     .ccc{
        width:90%;
        margin-right: 5px;
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