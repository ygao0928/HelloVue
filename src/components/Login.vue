<template>
  <div class="login_container">
    <router-view></router-view>
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt srcset />
      </div>
      <!-- 登錄表單 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        class="login_form"
        label-width="0px"
      >
        <!-- 用戶名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用戶名"
            prefix-icon=" iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密碼 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密碼"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <!-- 按鈕 -->
          <el-button type="primary" @click="login">登錄</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
//import qs from "qs";

export default {
  data() {
    return {
      loginForm: {
        username: "高勇",
        password: "123456"
      },
      //表单验证
      loginFormRules: {
        username: [
          { required: true, message: "请输入登錄名稱", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入登錄密碼", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
      //console.log(this);
    },
    async login() {
      this.$refs.loginFormRef.validate(valid => {
        console.log(valid);
        if (!valid) return;
        let uname = this.loginForm.username;
        let pass = this.loginForm.password;
        console.log(uname, pass);

        const that = this;
        this.$http({
          method: "post",
          url: "/apis/AppData.asmx/login",
          data: that.$qs.stringify({ name: uname, pass: pass }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          }
          //   url: "/apis/AppData.asmx/HelloWorld"
        }).then(function(response) {
          let dates = that.$x2js.xml2js(response.data).string.__text;
          console.log(response);
          console.log(that.$router, "1212");
          if (dates == "登陆成功") {
            that.$message.success("登陆成功");
            that.$route.push({ path: '/home' });
          } else {
            that.$message.success(dates);
          }
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>