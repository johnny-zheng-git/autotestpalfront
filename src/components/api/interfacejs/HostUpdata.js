
import post from '../../../axios/post'
// import router from '../../../router'
// import { Loading } from 'element-ui';

function projectUpdata(json_data, message) {
    // let loadingInstance = Loading.service(true);
    // console.log("=============login()==================")
    var url = '/project/hostupdata'
    return post(url, json_data).then(res => {
        switch (res.data.code){
            case 0:
                message({
                    type: "success",
                    message: "修改成功!"
                });
                break;
            case 1:
                message.error('无操作权限')
                break;
            default:
                message.error('服务器错误')

        }

        // if (res.data.code == 0) {
        //     message({
        //         type: "success",
        //         message: "修改成功!"
        //       });
        //     return res
        // } 
        // if(res.data.code == 1) {
        //     message({
        //         type: "success",
        //         message: "修改成功!"
        //       });
        // } else {
        //     message.error(res.data.message);
        // }
        // loadingInstance.close();
        // router.push({name:'projectlist'})
    })

}
export default projectUpdata