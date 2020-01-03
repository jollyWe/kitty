import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import api from "./api"; // 导入api接口

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/reset.css";
import "./assets/css/index.css";
//引入svg组件
import SvgIcon from "@/components/SvgIcon.vue";

//全局注册icon-svg
Vue.component("SvgIcon", SvgIcon);

Vue.use(ElementUI);
Vue.prototype.$api = api; //将api挂载到vue的原型上
require("@/mock");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
