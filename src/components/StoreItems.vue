<template>
  <div class="product">
    <div class="product-image">
      <img :src="dataimage" />
    </div>

    <div class="product-info">
      <h1>{{ Title }}</h1>

      <ul>
        <p v-if="inStock">Stock: {{ inStock }}</p>
        <p v-else>Out of Stock</p>
        <p>Description: {{ datadescrpt }}</p>
        <p>Price: {{ dataprice }}</p>
      </ul>
      <div>
        <span
          v-for="variant of datavariant"
          :key="variant.ID"
          @click="UpdateImage(variant.variantImg, variant.variantStock)"
        >
          <b-avatar
            variant="info"
            :src="variant.variantImg"
            style="margin-top :10px"
          ></b-avatar>
        </span>
      </div>

      <b-button
        variant="primary"
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </b-button>
      <b-button
        variant="primary"
        v-on:click="RemoveFromCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Remove
      </b-button>
      <b-button
        variant="primary"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: selectedTab === tab }"
        @click="selectedTab = tab"
        style=" width: 30 px"
      >
        {{ tab }}</b-button
      >

      <div v-show="selectedTab === 'Reviews'">
        <div v-if="hasReview">
          <ul>
            <li v-for="(reviews, index) in datareview" :key="index">
              <p>Name :{{ reviews.name }}</p>
              <p>Review :{{ reviews.review }}</p>
              <p>Rating : {{ reviews.rating }}</p>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No review yet....</p>
        </div>
      </div>

      <div v-show="selectedTab === 'Write a Review'">
        <ProductReview :reviews="datareview" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductReview from "./ProductReview";
export default {
  name: "StoreItems",
  comppnents: { ProductReview },
  props: {
    id: { type: Number, default: null },
    brand: { type: String, default: null },
    product: { type: String, default: null },
    image: { type: String, default: null },
    stock: { type: Number, default: 0 },
    altex: { type: String, default: null },
    descrpt: { type: String, default: null },
    price: { type: Number, default: 0 },
    variant: { type: Array, default: null },
    reviews: { type: Array, default: null }
  },
  data: function() {
    return {
      dataid: this.id,
      databrand: this.brand,
      dataproduct: this.product,
      dataimage: this.image,
      datastock: this.stock,
      dataaltex: this.altex,
      datadescrpt: this.descrpt,
      dataprice: this.price,
      datavariant: this.variant,
      datareview: this.reviews,
      tabs: ["Reviews", "Write a Review"],
      selectedTab: "Reviews"
    };
  },
  methods: {
    UpdateImage(variantImg, variantStock) {
      // console.log(this.databrand);
      this.dataimage = variantImg;
      this.datastock = variantStock;
    },
    addToCart() {
      this.$emit("add-to-cart", this.dataid);
    },
    RemoveFromCart() {
      this.$emit("remove-from-cart");
    },
    AddReview(ProductReview) {
      this.datareviews.push(ProductReview);
    }
  },
  computed: {
    Title() {
      return this.databrand + " " + this.dataproduct;
    },
    inStock() {
      return this.datastock;
    },
    hasReview() {
      return this.datareview > 0;
    }
  }
};
</script>

<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

.product {
  display: flex;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  flex-basis: 700px;
}

.product-info {
  margin-top: 10px;
  flex-basis: 500px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  margin-left: 10px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}
</style>
