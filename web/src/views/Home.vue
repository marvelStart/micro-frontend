<template>
  <div class="home">
    web
    <div @click="navigateToUrl('/business')">to business</div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="form.mobile" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="form.code" placeholder="请输入">
          <i v-show="count === 60" slot="suffix" class="el-input__icon" @click="sendMessage">发送验证码</i>
          <i v-show="count !== 60" slot="suffix" class="el-input__icon ">重新发送({{ count }}s)</i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
    <div>UserInfo: {{userInfo}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as singleSpa from 'single-spa';
import {UserAPI, Global} from 'utils';
import md5 from 'js-md5'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      form: {
        mobile: null,
        password: null,
        login_type: 'phone',
        secret: null, // 验证码
        code: null // 短信验证码
      },
      count: 60,
      timer: null
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  mounted() {
    console.log('UserAPI:', UserAPI);
    console.log('Global:', Global);
  },
  methods: {
    navigateToUrl(path) {
      singleSpa.navigateToUrl(path)
    },
    sendMessage() {
      UserAPI.sendMSM(this.form.mobile).then(data => {
        const _data = data.data
        if (data.code === 'success' && _data.secret) {
          this.form.secret = _data.secret
        }
      })
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.count--
          if (this.count === 0) {
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    handleLogin() {
      const data = JSON.parse(JSON.stringify(this.form))
      data.password = md5(data.password);
      this.$store.dispatch('USER_ACTIONS_LOGIN', data)
    }
  }
}
</script>
