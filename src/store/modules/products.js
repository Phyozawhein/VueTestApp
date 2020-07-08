import shop from "@/api/shop";
export default {
  namespaced: true,
  state: { items: [] },
  getters: {
    // eslint-disable-next-line no-unused-vars
    availableProducts(state, getters) {
      return state.items.filter(item => item.inventory > 0);
    },
    productIsInstock() {
      return item => {
        return item.inventory > 0;
      };
    }
  },
  mutations: {
    setProducts(state, items) {
      state.items = items;
    },

    decrementProductInventory(state, item) {
      item.inventory--;
    }
  },
  actions: {
    fetchProduct({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        shop.getProducts(item => {
          commit("setProducts", item);
          resolve();
        });
      });
    }
  },
  modules: {}
};
