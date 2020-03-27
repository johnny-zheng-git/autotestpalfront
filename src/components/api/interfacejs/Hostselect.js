
import post from '../../../axios/post'
// import router from '../../router'

function hostselect(json_data) {
    // console.log("=============login()==================")
    var url = '/project/hostselect'
    return post(url, json_data).then(res => {
        if (res.data.code == 0) {
            // console.log('res:',res.data.host_list)
            return res
        } else {
            return res
        }
    })

}
export default hostselect