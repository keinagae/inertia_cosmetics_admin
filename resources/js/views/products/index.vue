<template>
  <div class="app-container">
    <section class="section-store">
      <div class="product-cards grid-view">
        <el-row :gutter="20">
          <el-col :lg="8" :md="8" :sm="12" v-for="(item, index) in products" :key="index">
            <el-card class="edit-product-card">
              <div class="edit-product-card__img-box product-card__img-boc--300">
                <el-image style="height: 100%" :src="item.Photo[0]" fit="cover"></el-image>
              </div>
              <div class="edit-product-card__product-detail">
                <div class="edit-product-card__head">
                  <h3 class="edit-product-card__price" v-html="item.Price"></h3>
                  <h4 class="edit-product-card__stock">Stock Level - {{item.Stock}}</h4>
                </div>
                <p class="edit-product-card__description" v-html="item.Description"></p>
                <a :href="item.edit_link" class="product-link">
                  <el-button type="primary" @click="$router.push({name:'edit-Product',params: { id: item.id } })" class="edit-product-card__btn btn-primary">edit Product</el-button>
                </a>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
  import {auth, productsRef} from "@/firebase"
export default {
  data() {
    return {
      products: [
        {
          description:
            'Perfect grooming is one of the features of a successful man. The main signature of a good grooming is a well define.',
          thumbnail: '/images/products/product-2.png',
          total_rating: 5.0,
          price: '$40',
          edit_link: '#',
        },
        {
          description:
            'Perfect grooming is one of the features of a successful man. The main signature of a good grooming is a well define.',
          thumbnail: '/images/products/product-3.png',
          total_rating: 5.0,
          price: '$40',
          edit_link: '#',
        },
        {
          description:
            'Perfect grooming is one of the features of a successful man. The main signature of a good grooming is a well define.',
          thumbnail: '/images/products/product-2.png',
          total_rating: 5.0,
          price: '$40',
          edit_link: '#',
        },
        {
          description:
            'Perfect grooming is one of the features of a successful man. The main signature of a good grooming is a well define.',
          thumbnail: '/images/products/product-3.png',
          total_rating: 5.0,
          price: '$40',
          edit_link: '#',
        },
        {
          description:
            'Perfect grooming is one of the features of a successful man. The main signature of a good grooming is a well define.',
          thumbnail: '/images/products/product-2.png',
          total_rating: 5.0,
          price: '$40',
          edit_link: '#',
        },
        {
          description:
            'Perfect grooming is one of the features of a successful man. The main signature of a good grooming is a well define.',
          thumbnail: '/images/products/product-3.png',
          total_rating: 5.0,
          price: '$40',
          edit_link: '#',
        },
      ],
    };
  },
  firestore:{
    products:productsRef
  },
  methods: {
    pageTitle() {
      return this.$route.meta.pageTitle || '';
    },
  },
  mounted() {
    console.log("asdsadsad")
    auth.signInWithEmailAndPassword("kei@kei.com", "kei123").then(
      user => {
        console.log(user)
      }
    ).catch(error => {
      console.log(error)
    })
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
.el-input__inner {
  width: 100%;
}
  .product-card__img-boc--300_200{
    width: 300rem;
    height: 200rem;
    object-fit: cover;
  }
</style>

