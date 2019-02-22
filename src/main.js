import Vue from 'vue'
import App from './App'
import store from "./store"

new Vue({
  el: '#root',
  components: {
    App
  },
  template: '<App/>',
  store    // 配置路由器
});
