
import post from '../../../axios/post'
// import router from '../../router'

function HostDelete(json_data,message) {
    // console.log("=============login()==================")
    var url = '/project/hostdelete'
    console.log('======================',json_data)
    return post(url, json_data).then(res => {
        if (res.data.code == 0) {
            // alert("test")
            message({
                type: "success",
                message: "删除成功!"
              });
        } else {
            message.error("服务器请求失败");
        }
    })

}
export default HostDelete