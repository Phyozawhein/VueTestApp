import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import { currency } from "./currency";
// Import the styles directly. (Or you could add them via script tags.)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.filter("currency", currency);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
