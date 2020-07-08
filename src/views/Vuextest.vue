<template>
  <div>
    <h1>VueX</h1>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "../components/Productlist";
import ShoppingCart from "../components/ShoppingCart";
export default {
  components: { ProductList, ShoppingCart }
};
</script>

<style></style>
