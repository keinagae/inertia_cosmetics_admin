<template>
  <div class="app-container">
    <section class="section-store">
      <div class="product-request-cards">
        <el-row v-for="(product, index) in products" :key="index">
          <el-col :xs="24">
            <el-card class="product-request-card list">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8" :lg="6" class="text-center mb-0">
                  <div class="product-request-card__img-box">
                    <el-image :src="product.thumbnail" fit="cover"></el-image>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="16" :lg="18" class="mb-0">
                  <div class="product-request-card__product-request-details">
                    <h3 class="product-request-card__heading" v-html="product.heading"></h3>
                    <p class="product-request-card__description" v-html="product.description"></p>
                    <h3 class="product-request-card__name" v-html="product.name"></h3>
                    <p class="product-request-card__address" v-html="product.address"></p>
                    <a :href="product.approve_link">
                      <el-button
                        type="primary"
                        class="btn-primary product-request-card__approve-btn"
                      >approve</el-button>
                    </a>
                    <a :href="product.reject_link">
                      <el-button
                        type="danger"
                        class="btn-danger product-request-card__reject-btn"
                      >rejected</el-button>
                    </a>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          approve_link: '#',
          reject_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          approve_link: '#',
          reject_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          approve_link: '#',
          reject_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          approve_link: '#',
          reject_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          approve_link: '#',
          reject_link: '#',
        },
      ],
    };
  },
  methods: {
    pageTitle() {
      return this.$route.meta.pageTitle || '';
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
.el-input__inner {
  width: 100%;
}
</style>

