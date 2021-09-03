import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App);
    },
    router,
    store,
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
