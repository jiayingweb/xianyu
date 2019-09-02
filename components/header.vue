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
      <div class="login">
        <nuxt-link to="/user/login">注册/登录</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
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

 
  
.login {
}
</style>