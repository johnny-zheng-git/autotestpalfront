import Axios from './axios'
// import store from './../../vuex/store'
function get(url) {
    console.log("=====axios===get====");
    return Axios.get(url)
        .then(response => {
            return response
        })
}
export default get