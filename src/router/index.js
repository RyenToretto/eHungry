import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../pages/Home/Home"
import Shop from "../pages/Shop/Shop"
import Goods from "../pages/Shop/Goods/Goods"
import Ratings from "../pages/Shop/Ratings/Ratings"
import Info from "../pages/Shop/Info/Info"

// import Search from "../pages/Search/Search"
// import Order from "../pages/Order/Order"
// import Personal from "../pages/Personal/Personal"
import LoginRegister from "../pages/LoginRegister/LoginRegister"

const Home = ()=>import("../pages/Home/Home")
const Search = ()=>import("../pages/Search/Search")
const Order = ()=>import("../pages/Order/Order")
const Personal = ()=>import("../pages/Personal/Personal")


Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {path:"/home", component: Home, meta:{showFooter: true}},
    {
      path:"/shop",
      component: Shop,
      children: [
        {path:"/shop/goods", component: Goods},
        {path:"/shop/ratings", component: Ratings},
        {path:"/shop/info", component: Info},
        {path:"/shop", redirect: "/shop/goods"},
      ]
    },
    
    {path:"/search", component: Search, meta:{showFooter: true}},
    {path:"/order", component: Order, meta:{showFooter: true}},
    {path:"/personal", component: Personal, meta:{showFooter: true}},
    
    {path:"/login_register", component: LoginRegister},
    
    {path:"/", redirect: "/home"},
  ]
})

/*************************************************/
const paths =  ["/login_register"]
router.beforeEach((to, from, next)=>{    // 设置全局守卫
  const path = to.path
  if(paths.indexOf(path)>=0){
    if(Vue.store.state.user.userInfo._id){    // 在 main.js 中保存 store
      return next("/personal")
    }
  }
  next()    // 其他路由请求，放行
})
/*************************************************/

export default router
