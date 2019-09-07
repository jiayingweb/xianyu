<template>
  <div class="container">
    <!-- 主要内容 -->
    <el-row type="flex" class="main" justify="center" align="middle">
      <div class="form-wrapper">
        <!-- 表单头部tab -->
        <el-row type="flex" class="tabs" >
          <span
            v-for="(item,index) in ['登录','注册']"
            :key="index"
            @click="currentTab=index"
            :class="{active:currentTab===index}"
          >{{item}}</span>
        </el-row>
        <LoginForm v-if="currentTab == 0"/>
        <!-- 登录功能组件 -->
        <!-- <LoginForm v-if="currentTab == 0"/> -->
        
        <!-- 注册功能组件 -->
        <RegisterForm v-if="currentTab == 1"/>
      </div>
    </el-row>
  </div>
</template>

<script>
// import LoginForm  from '@/components/user/loginForm'
import LoginForm from "@/components/user/loginForm";
import RegisterForm from "@/components/user/RegisterForm";

export default {
  data() {
    return {
      currentTab: 0
    };
  },
  //注册组件
  components: {
    LoginForm,
    RegisterForm
  },
  methods: {
    // handleChangeTab(index) {
    //   this.currentTab = index;
    // }
  }
};
</script>

<style scoped lang="less">
.container {
  background: url('http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/e1fe9925bc315c60305ecede8ab1cb1349547733.jpg') center 0;
  height: 700px;
   background-size:100%;
  min-width: 1000px;

  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    // background-color: red;

    .form-wrapper {
      width: 400px;
      margin: 0 auto;
      background-color: #fff;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
      opacity: 0.91;

      .tabs {
        span {
          display: block;
          width: 50%;
          height: 50px;
          border-top: 2px #eee solid;
          background: #eee;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
          color: #666;

          &.active {
            color: orange;
            border-top-color: orange;
            background: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>