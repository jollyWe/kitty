import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: Home,
    children: [
      {
        path: "/main",
        name: "系统介绍",
        component: () => import("@/views/main")
      },
      {
        path: "/user",
        name: "用户管理",
        component: () => import("@/views/user")
      },
      {
        path: "/menu",
        name: "菜单管理",
        component: () => import("@/views/menu")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/views/error/404.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem("user");
  if (to.path == "/login") {
    if (user) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (!user) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});

export default router;
