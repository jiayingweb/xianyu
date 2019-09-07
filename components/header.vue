<template>
  <div class="header">
    <el-row type="flex" class="main">
      <div class="logo">
        <img src="@/assets/images/logo.jpg" alt />
      </div>
      <el-row class="navs" type="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <div class="login" v-if="!$store.state.user.userInfo.token">
        <nuxt-link to="/user/login">注册/登录</nuxt-link>
      </div >
      <div v-else>
        <el-dropdown>
  <span class="el-dropdown-link">
    <img :src="`${$axios.defaults.baseURL}${$store.state.user.userInfo.user.defaultAvatar}`" alt="">
    <span>{{$store.state.user.userInfo.user.nickname}}</span>
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item @click.native="clearUserInfo">退出</el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    clearUserInfo(){
      this.$store.commit('user/clearUserInfo')
      this.$message.success('退出成功')
    }
  }
};
</script>

<style lang='less' >
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 2px 2px #ddd;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
.logo {
  padding: 9px 0;
  img {
    display: block;
    width: 156px;
    height: 42px;
  }
}
.navs {
    margin-left: 15px;
    flex: 1;

  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;

    &:hover {
      // background: #409eff;
      border-bottom: 5px solid #409eff;
      color: #409eff;
    }
  }
  .nuxt-link-exact-active{
      background: #409eff;
       color: #fff;
    
      &:hover{
        color:white
      }
 }
  
}


.el-dropdown-link{
  cursor: pointer;
  img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-sizing: border-box;
 vertical-align: middle;
 border:2px #fff solid;
 &:hover{
   border:2px #409eff solid;
 }
}
}
 
  
.login {
}
</style>