import Vue from 'vue'
import App from './App'

import router from "./router"
import store from "./vuex/store"
import {Button} from 'mint-ui'

import Star from "./components/Star/Star"
import Header from "./components/Header/Header"

import "./mock/mockServer"

Vue.component("Star", Star)
Vue.component("Header", Header)
Vue.component(Button.name, Button)

new Vue({
  el: '#root',
  render: createElement=>createElement(App),
  router,    // 配置路由器
  store
});
