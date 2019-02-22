import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home/Home"
import Search from "../pages/Search/Search"
import Order from "../pages/Order/Order"
import Personal from "../pages/Personal/Personal"

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {path:"/home", component: Home},
    {path:"/search", component: Search},
    {path:"/order", component: Order},
    {path:"/personal", component: Personal},
    {path:"/", redirect: "/home"},
  ]
})
