import Vue from 'vue'
import Vuex from 'vuex'
import { Global, UserAPI } from 'utils';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: Global.getLocalStore('userInfo')
  },
  mutations: {
    USER_SET_USER_INFO(state, value) {
      Global.setLocalStore('userInfo', value)
      state.userInfo = value
    }
  },
  actions: {
    USER_ACTIONS_LOGIN({commit}, data) {
      new Promise((resolve, reject) => {
        UserAPI.login(data).then(result => {
          commit('USER_SET_USER_INFO', result.data)
          resolve(result)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {

  }
})
