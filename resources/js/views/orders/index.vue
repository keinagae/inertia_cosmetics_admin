<template>
  <div class="app-container">
    <section class="section-store">
      <div class="order-cards">
        <el-row v-for="(order, index) in orders" :key="index">
          <el-col :xs="24">
            <el-card class="order-card list">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8" :lg="6" class="text-center mb-0">
                  <div class="order-card__img-box">
                    <el-image :src="order.thumbnail" fit="cover"></el-image>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="16" :lg="18" class="mb-0">
                  <div class="order-card__order-details">
                    <h3 class="order-card__heading" v-html="order.heading"></h3>
                    <p class="order-card__description" v-html="order.description"></p>
                    <h3 class="order-card__name" v-html="order.name"></h3>
                    <p class="order-card__address" v-html="order.address"></p>
                    <a :href="order.paid_link" class="block">
                      <el-button type="success" class="order-card__paid-btn">Paid</el-button>
                    </a>
                    <a :href="order.delivered_link" class="block">
                      <el-button
                        type="success"
                        class="order-card__delivered-btn btn-primary"
                      >Deliverd</el-button>
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
      orders: [
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          paid_link: '#',
          delivered_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          paid_link: '#',
          delivered_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          paid_link: '#',
          delivered_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          paid_link: '#',
          delivered_link: '#',
        },
        {
          heading: 'Lorum Ipsum',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
          name: 'John Doe',
          address: '144 George Street, IPSWICH, IP14 5MW',
          thumbnail: '/images/products/product-3.png',
          paid_link: '#',
          delivered_link: '#',
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

