<template>
  <div class="phyo">
    <img alt="Dev logo" src="../assets/dev.png" />
    <PhyoInfo
      msg1="This is Phyo Zaw Hein"
      msg2="I am from Myanmar"
      msg3="My Hometown is Yangon"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PhyoInfo from "@/components/PhyoInfo.vue";

export default {
  name: "Phyo",
  components: {
    PhyoInfo
  }
};
</script>
