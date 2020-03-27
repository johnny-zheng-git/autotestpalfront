
import post from '../../../axios/post'
import store from '../../../vuex/store'
import router from '../../../router'

function login(json_data,error){
    var url = '/user/login'
    post(url,json_data).then(res => {
        
        if (res.data.code == 0) {
          var token = {access_token:res.data.access_token,refresh_token:res.data.refresh_token}
          store.dispatch('save',token)
          router.push({ name: "home", params: store.state});
        } else {
          error("用户名密码错误错误")
        }
      });

}
export default login