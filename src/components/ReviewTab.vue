<template>
  <div class="Review Tab">
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
</template>

<script>
import ProductReview from "../components/ProductReview";
export default {
  name: "ReviewTab",
  components: { ProductReview },
  props: {
    reviews: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      tabs: ["Reviews", "Write a Review"],
      selectedTab: "Reviews"
    };
  },
  methods: {}
};
</script>

<style></style>
