<template>
  <div class="app-container">
    <section class="section-store">
      <div class="feedback-cards">
        <el-row v-for="(feedback, index) in feeds" :key="index">
          <el-col :md="20" :lg="18">
            <el-card class="feedback-card list">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="6" :lg="5" class="text-center mb-0">
                  <div class="feedback-card__img-box">
                    <el-image :src="feedback.thumbnail" fit="cover"></el-image>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="13" :lg="14" class="mb-0">
                  <div class="feedback-card__feedback-details">
                    <p class="feedback-card__description" v-html="feedback.description"></p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="5" :lg="5" class="mb-0">
                  <a :href="feedback.paid_link">
                    <el-button type="danger" class="feedback-card__remove-btn btn-block">Remove</el-button>
                  </a>
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
      feeds: [
        {
          description:
            'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
          thumbnail: '/images/products/product-3.png',
          delivered_link: '#',
        },
        {
          description:
            'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
          thumbnail: '/images/products/product-3.png',
          delivered_link: '#',
        },
        {
          description:
            'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
          thumbnail: '/images/products/product-3.png',
          delivered_link: '#',
        },
        {
          description:
            'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
          thumbnail: '/images/products/product-3.png',
          delivered_link: '#',
        },
        {
          description:
            'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
          thumbnail: '/images/products/product-3.png',
          delivered_link: '#',
        },
        {
          description:
            'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
          thumbnail: '/images/products/product-3.png',
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

