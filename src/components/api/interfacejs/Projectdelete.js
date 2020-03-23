
import post from '../../../axios/post'
// import router from '../../router'

function projectdelete(json_data) {
    // console.log("=============login()==================")
    var url = '/project/delete'
    return post(url, json_data).then(res => {
        if (res.data.code == 0) {
            // console.log('res:',res.data)
            return res
        } else {
            alert("删除失败");
        }
    }).catch(err => {
        console.log(err)
        alert("服务器请求失败", err);
    });

}
export default projectdelete