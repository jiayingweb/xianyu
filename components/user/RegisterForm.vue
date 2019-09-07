<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input v-model="form.captcha" placeholder="验证码">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input v-model="form.nickname" placeholder="你的名字"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input v-model="form.checkPassword" placeholder="确认密码" type="password"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 表单数据
      form: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        checkPassword: ""
      },
      // 表单规则
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
      // 判断是否为空再确定发送
      if (!this.form.username) {
        this.$message.error("请输入手机号码");
        return;
      }
      // if(this.form.username.length!==11){
      //      this.$message.error('请输入11位手机号码');
      //     return;
      // }
      //       if(this.form.username.length!==11){
      //  this.$confirm('输入11位手机号码', '提示', {
      //     confirmButtonText: '确定',
      //     showCancelButton: false,
      //     type: 'warning'
      // })
      // return;}
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        // console.log(res);
        const { code } = res.data;
        this.$alert(`你获取的验证码是:${code}`, "验证码提示");
      });
    },

    // 注册
    handleRegSubmit() {
      // console.log(777)
      const {checkPassword,...rest}=this.form
      this.$axios({
            url: `/accounts/register`,
            method: "POST",
            data: rest
          }).then(res => {
            // console.log(res);
          });
      this.$refs["form"].validate(valid => {
        if (valid) {7
          // 注册提交checkPassword
          const { checkPassword, ...props } = this.form;
          // console.log(props);
          this.$axios({
            url: `/accounts/register`,
            method: "POST",
            data: props
          }).then(res => {
            // console.log(res);
             this.$message.success('注册成功')
              this.$store.commit("user/setUserInfo", res.data)
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>