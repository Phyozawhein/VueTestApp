<template>
  <div>
    <p>{{ msg1 }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
  </div>
</template>

<script>
export default {
  name: "PhyoInfo",
  props: {
    msg1: String,
    msg2: String,
    msg3: String
  }
};
</script>

<style></style>
