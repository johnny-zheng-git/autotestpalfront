import Axios from './axios'
// import store from './../../vuex/store'
function post(url, json_data) {
    console.log(url)
    return Axios.post(url, json_data)
        .then(response => {
            console.log("=======post===");
            return response
        })


}

export default post