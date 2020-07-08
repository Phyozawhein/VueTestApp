import Vue from "vue";
import Vuex from "vuex";
import cart from "@/store/modules/cart.js";
import products from "@/store/modules/products.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { products, cart }
});
