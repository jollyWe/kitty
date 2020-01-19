import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import api from "./api"; // 导入api接口
import "normalize.css/normalize.css";
import "@/styles/index.scss";
import i18n from "./i18n";

require("@/mock");
Vue.prototype.$api = api; //将api挂载到vue的原型上
Vue.config.productionTip = false;
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
