import post from '../../../axios/post'
// import router from '../../../router'
function HostAdd(json_data, message) {
    let url = '/project/hostadd'
    return post(url, json_data).then(res => {
        console.log(json_data)
        if (res.data.code == 0) {
            message({
                type: "success",
                message: "主机新增成功!"
              });
            return res
        }
        if (res.data.code == 1) {
            message.error("无操作权限")
        } else {
            message.error("主机新增失败")
        }
    }
    )

}

export default HostAdd