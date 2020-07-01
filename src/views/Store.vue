<template>
  <div class="Item Catalog">
    <div class="cart">
      <p>Cart({{ cart.length }})</p>
    </div>
    <ul>
      <b-button
        variant="outline-success"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: selectedTab === tab }"
        @click="selectedTab = tab"
        style="margin-left: 10px"
        >{{ tab }}
      </b-button>
    </ul>
    <div v-show="selectedTab === 'Nike Running Shoe'">
      <StoreItems
        :image="items[0].image"
        :brand="items[0].brand"
        :product="items[0].product"
        :altex="items[0].altex"
        :stock="items[0].stock"
        :descrpt="items[0].descrpt"
        :price="items[0].Price"
        :variant="items[0].variant"
        @add-to-cart="AddItem"
        @remove-from-cart="RemoveItem"
        @review-submitted="AddReview"
      />
    </div>
    <div v-show="selectedTab === 'Adidas Running Shoe'">
      <StoreItems
        :image="items[1].image"
        :brand="items[1].brand"
        :product="items[1].product"
        :altex="items[1].altex"
        :stock="items[1].stock"
        :descrpt="items[1].descrpt"
        :price="items[1].Price"
        :variant="items[1].variant"
        @add-to-cart="AddItem"
        @remove-from-cart="RemoveItem"
        @review-submitted="AddReview"
      />
    </div>
    <div v-show="selectedTab === 'New Balance Running Shoe'">
      <StoreItems
        :image="items[2].image"
        :brand="items[2].brand"
        :product="items[2].product"
        :altex="items[2].altex"
        :stock="items[2].stock"
        :descrpt="items[2].descrpt"
        :price="items[2].Price"
        :variant="items[2].variant"
        @add-to-cart="AddItem"
        @remove-from-cart="RemoveItem"
        @review-submitted="AddReview"
      />
    </div>

    <br />
  </div>
</template>

<script>
import StoreItems from "../components/StoreItems.vue";
export default {
  name: "Store",
  components: {
    StoreItems
  },
  data() {
    return {
      items: [
        {
          id: 0,
          brand: "Nike",
          product: "Running Shoe",
          image:
            "https://media.kohlsimg.com/is/image/kohls/2375536_Black_White?wid=1200&hei=1200&op_sharpen=1",
          altex: "This is a Nike running shoe !",
          descrpt:
            "Top quality running shoe made with memory foam sole. Best for running ! ",
          Price: 110,
          variant: [
            {
              variantID: 110,
              variantName: "Black/White",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_Black_White?wid=1200&hei=1200&op_sharpen=1",
              variantStock: 10
            },
            {
              variantID: 111,
              variantName: "Gray",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_Gray?wid=1200&hei=1200&op_sharpen=1",
              variantStock: 12
            },
            {
              variantID: 112,
              variantName: "White Washed Coral",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_White_Washed_Coral?wid=1200&hei=1200&op_sharpen=1",
              variantStock: 15
            },
            {
              variantID: 113,
              variantName: "Black Pink White",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_Black_Pink_White?wid=1200&hei=1200&op_sharpen=1",
              variantStock: 8
            }
          ],
          reviews: []
        },
        {
          id: 1,
          brand: "Adidas",
          product: "Running Shoe",
          image:
            "https://www.famousfootwear.com/ProductImages/shoes_ia98508.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
          altex: "This is an Adidas running shoe !",
          descrpt:
            "Top quality running shoe made with memory foam sole. Best for running ! ",
          Price: 90,
          variant: [
            {
              variantID: 110,
              variantName: "Black/Red",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia98508.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
              variantStock: 10
            },
            {
              variantID: 111,
              variantName: "Black/White",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia76605.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
              variantStock: 20
            },
            {
              variantID: 112,
              variantName: "Blue/White",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia93267.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
              variantStock: 5
            },
            {
              variantID: 113,
              variantName: "Red/White",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia76606.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
              variantStock: 7
            }
          ],
          reviews: []
        },
        {
          id: 2,
          brand: "New Balance",
          product: "Running Shoe",
          image:
            "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i_b18d5b026e4d44da9d20?$pdpflexf22x$",
          altex: "This is a New Balance running shoe !",
          descrpt:
            "Top quality running shoe made with memory foam sole. Best for running ! ",
          Price: 120,
          variant: [
            {
              variantID: 110,
              variantName: "Grey with Casterlock",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i_b18d5b026e4d44da9d20?$pdpflexf22x$",
              variantStock: 3
            },
            {
              variantID: 111,
              variantName: "Black",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990bb5_nb_02_i?$pdpflexf22x$",
              variantStock: 0
            },
            {
              variantID: 112,
              variantName: "Blue/Silver",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990bk5_nb_02_i?$pdpflexf22x$",
              variantStock: 9
            },
            {
              variantID: 113,
              variantName: "Navy/Silver",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990nv5_nb_02_i_5e9b9380c61741e193e8?$pdpflexf22x$",
              variantStock: 16
            }
          ],
          reviews: []
        }
      ],
      cart: [],
      tabs: [
        "Nike Running Shoe",
        "Adidas Running Shoe",
        "New Balance Running Shoe"
      ],
      selectedTab: "Nike Running Shoe"
    };
  },
  methods: {
    AddItem(itemID) {
      // console.log(this.cart);
      this.cart.push(itemID);
    },
    RemoveItem() {
      // console.log(this.cart);
      this.cart.pop();
    },
    AddReview(itemID, review) {
      this.items[itemID].reviews.push(review);
      //alert(JSON.stringify(this.items[itemID].reviews));
    }
  },
  computed: {
    Review(itemID) {
      return this.items[itemID].reviews.length;
    }
  }
};
</script>

<style scoped>
.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
</style>
