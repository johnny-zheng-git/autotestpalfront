
import post from '../../../axios/post'
// import router from '../../router'

function projectselect(json_data) {
    // console.log("=============login()==================")
    var url = '/project/select'
    return post(url, json_data).then(res => {
        if (res.data.code == 0) {
            // console.log('res:',res.data)
            return res
        } else {
            return res
        }
    }).catch(err => {
        console.log(err)
        alert("服务器请求失败", err);
    });

}
export default projectselect