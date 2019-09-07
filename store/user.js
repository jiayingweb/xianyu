
// 用户管理
export const state = () => {
    // 采用接口返回的数据结构
    return {
        userInfo: {
            token: "",
            user: {},
        }
    }
}


// export const mutations = (() => {
//     return {
//         setUserInfo(state, data) {
//         state.userInfo = data
//     }
// }
// })9

export const mutations = {
    // 设置用户信息,mutations下的方法第一个参数固定是state
    // data参数不是必须的，是调用方法时候传入的参数
    setUserInfo(state, data){
        // data是后台返回的用户信息
        state.userInfo = data;
    },
    // 清除保存在本地的token和信息
    clearUserInfo(state){
        state.userInfo={
            token: "",
            user: {},
        }
    }
}