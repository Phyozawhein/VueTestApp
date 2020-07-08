<template>
  <div>
    <h2>Product List</h2>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
    <ul v-else>
      <li class="links" v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button
          :disabled="!productIsInstock(product)"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return { loading: false };
  },

  created() {
    this.loading = true;

    this.fetchProduct().then(() => (this.loading = false));
  },
  computed: {
    ...mapState({
      products: state => state.products.items
    }),
    ...mapGetters("products", {
      productIsInstock: "productIsInstock"
    })
  },
  methods: {
    ...mapActions({
      fetchProduct: "products/fetchProduct",
      addProductToCart: "cart/addToCart"
    })
  }
};
</script>

<style scoped>
.links {
  list-style: none;
}
</style>
