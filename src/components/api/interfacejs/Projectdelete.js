
import post from '../../../axios/post'
// import router from '../../router'

function projectdelete(json_data,message) {
    // console.log("=============login()==================")
    var url = '/project/delete'
    return post(url, json_data).then(res => {
        if (res.data.code == 0) {
            message({
                type: "success",
                message: "删除成功!"
              });
        } else {
            message.error(res.data.message);
        }
    })

}
export default projectdelete