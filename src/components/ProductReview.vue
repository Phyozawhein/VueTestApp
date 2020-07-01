<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </p>

    <p>
      <label for="review">Review: </label>
      <textarea name="review" id="review" v-model="review"></textarea>
    </p>

    <p>
      <label for="rating">Rating:</label>
      <select name="rating" id="rating" v-model.number="rating">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </p>

    <p><input type="submit" value="Submit" /></p>
  </form>
</template>

<script>
export default {
  name: "ProductReview",
  props: { reviews: { type: Array, default: null } },
  data() {
    return {
      name: null,
      review: null,
      rating: 0,
      item: [],
      itemid: null
    };
  },
  methods: {
    onSubmit() {
      let itemid = this.itemid;
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      };
      this.$emit("review-submitted", itemid, productReview);
      (this.name = null),
        (this.review = null),
        (this.rating = null),
        (this.itemid = null);
    }
  }
};
</script>

<style></style>
