

// 因为是js文件不能用this,想用ui下的信息提示要引入ui
import { Message } from 'element-ui'
export default ({$axios})=>{
    $axios.onError(res => {
        // 返回的res是一个错误的对象，Error对象下都有一个response的属性可以访问错误的信息
        const {statusCode,message} =res.response.data
        // 提示验证失败
        if(statusCode===400){
            Message.error(message)

        }



        // console.log(res.response, 123)
        // console.log(res,456);
        


    })

   
    





}