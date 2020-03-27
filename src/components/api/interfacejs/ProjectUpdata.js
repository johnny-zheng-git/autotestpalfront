
import post from '../../../axios/post'
import router from '../../../router'
import { Loading } from 'element-ui';

function projectUpdata(json_data,message) {
    let loadingInstance = Loading.service(true);
    // console.log("=============login()==================")
    var url = '/project/updata'
    return post(url, json_data).then(res => {
        if (res.data.code == 0) {
            message({
                type: "success",
                message: "修改成功!"
              });
        } else {
            message.error(res.data.message);
        }
        loadingInstance.close();
        router.push({name:'projectlist'})
    })

}
export default projectUpdata