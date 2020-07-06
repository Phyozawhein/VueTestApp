<template>
  <span class="go-back">
    <button @click="goBack" style=" margin-right: 10px ">Go Back</button>

    <button @click="goForward">Go Forward</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    goForward() {
      return this.$router.go(1);
    }
  }
};
</script>

<style>
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  border: 0;
}
</style>
