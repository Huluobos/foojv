import * as axios from 'axios'
import Vue from  'vue'
import qs from 'qs'

let options = {
    baseURL: 'http://www.fooju.cn/fjw',
    timeout: 15000,
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
}
let xhr = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.create(options).get(url, {params}).then(res => {
                resolve(res)
            }).catch(err => {
                // console.log(err)
                reject(err)
            })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            params = qs.stringify(params)
            axios.create(options).post(url, params).then(res => {
                resolve(res)
            }).catch(err => {
                // console.log(err)
            })
        })
    }
}

Vue.prototype.$axios = xhr;



export default options;


