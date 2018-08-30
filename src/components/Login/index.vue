<template>
  <div class="login-form">
    <el-form label-width="4rem" :rules="rules" status-icon class="login-ruleForm" :model="form" ref="form">
      <el-form-item label="用户名" prop="username">
        <el-input auto-complete="off" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="push('register')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    let checkPassIsNull = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'))
      } else {
        if (!/^\d{6,}$/.test(value)) {
          return callback(new Error('密码不能少于6位'))
        } else {
          callback()
        }
      }
    }
    let checkUserIsNull = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        password: [{ validator: checkPassIsNull, trigger: 'blur' }],
        username: [{ validator: checkUserIsNull, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          /* this.login(this.form).then(res => {
            console.log(res)
          }) */
        } else {
          this.$message.error('提交失败')
          return false
        }
      })
    },
    push() {
      return this.$router.push('/echarts')
    }
    /* ...mapActions([
      'login'
    ]) */
  }
}
</script>
<style>
</style>
