
import post from '../../../axios/post'
// import store from './../../vuex/store'
import router from '../../../router'

function registration(json_data,error) {
    // console.log("=============registration()==================")
    var url = '/user/registration'
    post(url, json_data).then(res => {
        if (res.data.code == 0) { 
            router.push({ name: "login" });
        } else {
            if (res.data.code == 1) {
                error("用户已注册")
                // alert();
            } else {
                error("服务器请求失败,请稍后再试！")
                // alert("服务器请求失败")
            }
        }
    });

}
export default registration