import Vue from 'vue'
import App from './App'

import router from "./router"
import store from "./vuex/store"

new Vue({
  el: '#root',
  render: createElement=>createElement(App),
  router,    // 配置路由器
  store
});
