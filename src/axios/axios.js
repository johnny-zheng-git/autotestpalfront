import baseUrl from "./../config/env";
import axios from 'axios'
import store from './../vuex/store'
import router from './../router'
import get from './get'
// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
// // step3：使每次请求都会带一个 /api 前缀 
axios.defaults.baseURL = baseUrl.baseUrl

axios.interceptors.request.use(
    config => {
        // console.log('========axios init==========')
        var token = store.state.access_token
        if (token != '') {
            config.headers.Authorization = 'Bearer ' + token;
            return config
        }
        token = store.state.refresh_token
        if (token != '') {
            config.headers.Authorization = 'Bearer ' + token;
            return config
        }
        return config
    }, err => {
        // 请求失败的处理
        // console.log('========axios init err==========')
        return Promise.reject(err);
    });


axios.interceptors.response.use(
    response => {
        // console.log('========axios end==========')
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    var token = { access_token: 0, refresh_token: 1 }
                    store.dispatch('remove', token)
                    get('/user/refreshtoken').then(res => {
                        token = { access_token: res.data.access_token, refresh_token: null }
                        store.dispatch('save', token)
                        router.push({
                            name: 'home'
                        })
                        console.log('new access_token:')
                    })
                    break;
                case 405:
                    alert('登录超时，请重新登录')
                    break;
                default:
                    console.log(error)
                    alert('服务器错误')
            }
        }
        // return Promise.reject(error);
    })

export default axios

