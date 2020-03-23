import baseUrl from "./../config/env";
import axios from 'axios'
import store from './../vuex/store'
import router from './../router'
// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
// // step3：使每次请求都会带一个 /api 前缀 
axios.defaults.baseURL = baseUrl.baseUrl

axios.interceptors.request.use(
    config => {
        const token = store.state.access_token
        if (token != '') {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config
    }, err => {
        // 请求失败的处理
        return Promise.reject(err);
    });


axios.interceptors.response.use(
    response => {
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        console.log("error=========>", error.response.status)
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    store.state.access_token = ''
                    router.push({
                        name: 'login'
                    })
                    return Promise.reject('token失效')
            }
            store.state.access_token = ''
            router.push({
                name: 'login'
            })
            return Promise.reject(error)

        }
        return Promise.reject(error.response.status)// 返回接口返回的错误信息
    })

export default axios

