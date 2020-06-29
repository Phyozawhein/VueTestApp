<template>
  <div class="Item Catalog">
    <StoreItems
      v-for="item in items"
      :key="item.id"
      :image="item.image"
      :brand="item.brand"
      :product="item.product"
      :altex="item.altex"
      :stock="item.stock"
      :descrpt="item.descrpt"
      :price="item.Price"
      :variant="item.variant"
    />
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
          stock: 10,
          altex: "This is a Nike running shoe !",
          descrpt:
            "Top quality running shoe made with memory foam sole. Best for running ! ",
          Price: 110,
          variant: [
            {
              variantID: 110,
              variantName: "Black/White",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_Black_White?wid=1200&hei=1200&op_sharpen=1"
            },
            {
              variantID: 111,
              variantName: "Gray",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_Gray?wid=1200&hei=1200&op_sharpen=1"
            },
            {
              variantID: 112,
              variantName: "White Washed Coral",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_White_Washed_Coral?wid=1200&hei=1200&op_sharpen=1"
            },
            {
              variantID: 113,
              variantName: "Black Pink White",
              variantImg:
                "https://media.kohlsimg.com/is/image/kohls/2375536_Black_Pink_White?wid=1200&hei=1200&op_sharpen=1"
            }
          ]
        },
        {
          id: 1,
          brand: "Adidas",
          product: "Running Shoe",
          image:
            "https://www.famousfootwear.com/ProductImages/shoes_ia98508.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
          stock: 15,
          altex: "This is an Adidas running shoe !",
          descrpt:
            "Top quality running shoe made with memory foam sole. Best for running ! ",
          Price: 90,
          variant: [
            {
              variantID: 110,
              variantName: "Black/Red",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia98508.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter"
            },
            {
              variantID: 111,
              variantName: "Black/White",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia76605.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter"
            },
            {
              variantID: 112,
              variantName: "Blue/White",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia93267.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter"
            },
            {
              variantID: 113,
              variantName: "Red/White",
              variantImg:
                "https://www.famousfootwear.com/ProductImages/shoes_ia76606.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter"
            }
          ]
        },
        {
          id: 2,
          brand: "New Balance",
          product: "Running Shoe",
          image:
            "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i_b18d5b026e4d44da9d20?$pdpflexf22x$",
          stock: 0,
          altex: "This is a New Balance running shoe !",
          descrpt:
            "Top quality running shoe made with memory foam sole. Best for running ! ",
          Price: 120,
          variant: [
            {
              variantID: 110,
              variantName: "Grey with Casterlock",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i_b18d5b026e4d44da9d20?$pdpflexf22x$"
            },
            {
              variantID: 111,
              variantName: "Black",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990bb5_nb_02_i?$pdpflexf22x$"
            },
            {
              variantID: 112,
              variantName: "Blue/Silver",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990bk5_nb_02_i?$pdpflexf22x$"
            },
            {
              variantID: 113,
              variantName: "Navy/Silver",
              variantImg:
                "https://nb.scene7.com/is/image/NB/m990nv5_nb_02_i_5e9b9380c61741e193e8?$pdpflexf22x$"
            }
          ]
        }
      ]
    };
  },
  method: {
    UpdateImage(VariantImg) {
      this.variant.variantImg = VariantImg;
    }
  }
};
/*  */
</script>

<style></style>
