<template>
  <div class="login-container">
    <el-card class="login-card">
      <div style="margin-bottom: 30px">
        <img src="../../assets/images/logo_index.png" alt width="300" />
      </div>
      <el-form :rules="rules" status-icon :model="LoginForm" ref="LoginForm" >
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="LoginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width: 60%" placeholder="请输入验证码" v-model="LoginForm.code"></el-input>
          <el-button style="float: right;" type="primary">验证码信息</el-button>
        </el-form-item>
        <el-checkbox checked>顶顶顶顶顶顶顶顶</el-checkbox>
        <el-form-item style="margin-top: 30px">
          <el-button style="width: 100%" type="primary" round @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const CheckModile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请检查手机号格式'))
      }
    }
    return {
      LoginForm: { mobile: '13911111111', code: '246810' },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: CheckModile, message: '输入格式不对', trigger: 'blur' }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.LoginForm.validate(valid => {
        if (valid) {
          this.$http
            .post(
              'authorizations',
              this.LoginForm
            )
            .then(res => {
              console.log(789)
              sessionStorage.setItem('token', JSON.stringify(res.data.data.token))
              this.$router.push('/')
            })
            .catch(err => {
              console.log(213)
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style scoped  lang="less">
.login-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
  }
}
</style>
