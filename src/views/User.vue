<template>
  <div>
    <h1>Welcome {{ user }} !</h1>
    <div><router-link :to="{ name: 'invoices' }">My Invoice</router-link></div>

    <button @click="logOut" class="btn">Logout</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return { user: store.user };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
