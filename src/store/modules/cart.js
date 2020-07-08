import shop from "@/api/shop";
export default {
  namespaced: true,
  state: {
    items: [],
    checkOutStatus: null
  },
  getters: {
    cartProducts(state, getters, rootState) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          inventory: cartItem.quantity
        };
      });
    },
    cartTotal(state, getters) {
      let total = 0;
      getters.cartProducts.forEach(product => {
        total += product.price * product.inventory;
      });
      return total;
    }
  },
  mutations: {
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    setCheckoutStatus(state, status) {
      state.checkOutStatus = status;
    },
    EmptyCart(state) {
      state.items = [];
    },
    pushProductToCart(state, productId) {
      state.items.push({ id: productId, quantity: 1 });
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    addToCart({ state, getters, commit, rootState, rootGetters }, product) {
      if (rootGetters["products/productIsInstock"](product)) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          commit("pushProductToCart", product.id);
        } else {
          commit("incrementItemQuantity", cartItem);
        }
        commit("products/decrementProductInventory", product, { root: true });
      }
    },
    checkOut({ state, commit }) {
      shop.buyProducts(
        state.items,
        () => {
          commit("EmptyCart");
          commit("setCheckoutStatus", "success");
        },
        () => {
          commit("setCheckoutStatus", "fail");
        }
      );
    }
  },
  modules: {}
};
