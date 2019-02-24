import Vue from 'vue'
import App from './App'

import router from "./router"
import store from "./vuex/store"
import Star from "./components/Star/Star"
import Header from "./components/Header/Header"

Vue.component("Star", Star)
Vue.component("Header", Header)

new Vue({
  el: '#root',
  render: createElement=>createElement(App),
  router,    // 配置路由器
  store
});
