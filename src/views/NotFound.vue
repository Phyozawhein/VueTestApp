<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Oops we couldn't find the page you were looking for.....Try going
      <router-link
        :to="{
          name: 'Home'
        }"
      >
        Home</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
