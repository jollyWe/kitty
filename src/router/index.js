import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "home/index"
  },
  {
    path: "/home",
    name: "home",
    redirect: "home/index",
    // component: Home
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/home/index",
        name: "home.index",
        meta: { title: "首页" },
        component: () => import("../views/Tabs/Index.vue")
      },
      {
        path: "/home/test",
        name: "home.test",
        meta: { title: "测试tab" }, //此处为规则配置页面 title为Tab显示的标题
        component: () => import("../views/Tabs/Test.vue")
      },
      {
        path: "/home/hasparam/:name",
        name: "home.hasparam",
        meta: { title: "带参数" }, //此处为规则配置页面 title为Tab显示的标题
        component: () => import("../views/Tabs/HasParam.vue"),
        props: true
      },
      {
        path: "/home/about",
        name: "home.about",
        meta: { title: "测试auout" }, //此处为规则配置页面 title为Tab显示的标题
        component: () => import("../views/About.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login")
  }
];

const router = new VueRouter({
  routes
});

export default router;
