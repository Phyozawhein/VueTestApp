<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input type="text" name="username" class="input" v-model="username" />
      <label for="password"></label>
      <input type="text" name="password" class="input" v-model="password" />
      <button @click="Login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    Login() {
      store.user = this.username;
      this.$router.push('/user');
    }
  }
};
</script>

<style>
.form{
    display:flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}
</style>
