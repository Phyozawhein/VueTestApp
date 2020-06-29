<template>
  <div class="Item Card">
    <h1>{{ Title }}</h1>
    <img :src="dataimage" width="300px" height="200px" />
    <p v-if="datastock > 0">In Stock</p>
    <p v-else>Out of Stock</p>
    <ul>
      <li
        @mouseover="UpdateImage(variant.variantImg)"
        v-for="variant of datavariant"
        :key="variant.ID"
      >
        {{ variant.variantName }}
      </li>
    </ul>
    <p>Description: {{ datadescrpt }}</p>
    <p>Price: {{ dataprice }}</p>
  </div>
</template>

<script>
export default {
  name: "StoreItems",
  props: {
    brand: { type: String, default: null },
    product: { type: String, default: null },
    image: { type: String, default: null },
    stock: { type: Number, default: 0 },
    altex: { type: String, default: null },
    descrpt: { type: String, default: null },
    price: { type: Number, default: 0 },
    variant: { type: Array, default: null }
  },
  data: function() {
    return {
      databrand: this.brand,
      dataproduct: this.product,
      dataimage: this.image,
      datastock: this.stock,
      dataaltex: this.altex,
      datadescrpt: this.descrpt,
      dataprice: this.price,
      datavariant: this.variant
    };
  },
  methods: {
    UpdateImage(variantImg) {
      //console.log(variantImg);
      this.dataimage = variantImg;
    }
  },
  computed: {
    Title() {
      return this.brand + " " + this.product;
    }
  }
};
</script>

<style></style>
