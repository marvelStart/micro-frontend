<template>
  <div class="home">
    business
    <div @click="toWeb">web</div>
    <div @click="jumpPage('/system')">system</div>
    <div>UserInfo: {{userInfo}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as Utils from 'utils';
import * as singleSpa from 'single-spa'
export default {
  name: 'Home',
  computed: {
    userInfo() {
      return Utils.Global.get('userInfo')
    }
  },
  methods: {
    jumpPage(path) {
      this.$router.push(path)
    },
    toWeb() {
      singleSpa.navigateToUrl('/')
    }
  }
}
</script>
