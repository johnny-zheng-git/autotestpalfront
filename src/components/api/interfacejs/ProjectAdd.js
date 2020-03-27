
import post from '../../../axios/post'
import router from '../../../router'

function add(json_data,error){
    // console.log("=============login()==================")
    var url = '/project/add'
    post(url,json_data).then(res => {
        if (res.data.code == 0) {
          // console.log('res:',res.data)
          
          router.push({ name: "projectlist"});
        } else {
          error("项目新增失败")
        }
      });

}
export default add