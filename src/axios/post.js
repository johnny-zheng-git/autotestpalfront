import Axios from './axios'
// import store from './../../vuex/store'
function post(url, json_data, ) {
    console.log("=====axios====");
    return Axios.post(url, json_data)
        .then(response => {
            return response
        })
        .catch(err => {
            console.log(err)
            alert("服务器请求失败", err);
        });
    // alert(data1)
}

export default post