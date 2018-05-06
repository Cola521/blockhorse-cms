import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


//引入tabbar中的组件

import Home from "@/components/tabbar/home";
import Cart from "@/components/tabbar/cart";
import Menber from "@/components/tabbar/menber";
import Search from "@/components/tabbar/search";

// 商品相关的组件
import GoodsList from "@/components/goods/list";
import GoodDetail from "@/components/goods/detail";

//新闻相关的组件


import NewsList from "@/components/news/list";
import NewDetail from "@/components/news/detail";

// 图片相关的组件

import picList from "@/components/pictures/list";
import picDetail from "@/components/pictures/detail";

Vue.use(Router)



new Vue({
  el: '#app',
  components: { App }
})
export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/menber",
      component:Menber
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/search",
      component:Search
    },
    // 商品的
    {
      path:"/goods",
      component:GoodsList
    },
    {
      path:"/goods/detail",
      component:GoodDetail
    },
    //新闻
    {
      path:"/news",
      component:NewsList
    },
    {
      path:"/news/detail/:id",
      component:NewDetail
    },
    //图片
    {
      path:"/pics/:id",
      component:picList
    },
    {
      path:"/pics/detail:id",
      component:picDetail
    }
  ],
  linkActiveClass:"mui-active"
})
