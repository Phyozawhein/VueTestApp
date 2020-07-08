<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li class="lists" v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
      </li>
    </ul>
    <p>Total : {{ total | currency }}</p>
    <button @click="checkOut()">Checkout</button>
    <p v-if="checkOutStatus">
      {{ checkOutStatus }}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotal"
    }),
    ...mapState("cart", {
      checkOutStatus: state => state.checkOutStatus
    })
  },
  methods: {
    ...mapActions({
      checkOut: "cart/checkOut"
    })
  }
};
</script>

<style scoped>
.lists {
  list-style: none;
}
</style>
