<template>
  <div class="app-container">
    <section class="section-store">
      <el-row :gutter="10">
        <el-col :md="8">
          <el-select v-model="value" placeholder="Sort By: ..." class="width-100">
            <el-option
              v-for="item in sortBy"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :md="8"></el-col>
        <el-col :md="8" class="text-right">
          <div class="view-box">
            <span class="view-box__title">View:</span>
            <span class="view-box__icons">
              <svg-icon
                icon-class="grid"
                class="view-box__icon grid-view-icon active"
                @click="changeView('grid')"
              />
              <svg-icon
                icon-class="list-bar"
                class="view-box__icon list-view-icon"
                @click="changeView('list')"
              />
            </span>
          </div>
        </el-col>
      </el-row>

      <div class="product-cards list-view hide">
        <el-row v-for="(item, index) in products" :key="index">
          <el-col :xs="24">
            <a href="#" class="product-link">
              <el-card class="product-card list">
                <el-row :gutter="20">
                  <el-col :xs="10" :sm="8" :lg="6" class="text-center mb-0">
                    <div class="product-card__img-box">
                      <el-image :src="item.thumbnail" fit="none"></el-image>
                    </div>
                  </el-col>
                  <el-col :xs="14" :sm="16" :lg="18" class="mb-0">
                    <div class="product-card__product-detail p-4">
                      <h3 class="product-card__name" v-html="item.name"></h3>
                      <p class="product-card__rating mel-0">
                        <svg-icon
                          icon-class="star"
                          v-for="(item, ind) in item.total_rating"
                          :key="ind"
                          class="product-card__rating-icon color-primary"
                        />
                        <span
                          class="product-card__rating-num"
                          v-html="item.total_rating.toFixed(1)"
                        ></span>
                      </p>
                      <h2 class="product-card__price" v-html="item.price"></h2>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </div>

      <div class="product-cards grid-view">
        <el-row :gutter="20">
          <el-col :lg="6" :md="8" :sm="12" v-for="(item, index) in products" :key="index">
            <el-card class="product-card grid">
              <a href="#" class="product-link">
                <div class="product-card__img-box">
                  <el-image style="width: 100%" :src="item.thumbnail" fit="none"></el-image>
                </div>
                <div class="product-card__product-detail">
                  <h3 class="product-card__name" v-html="item.name"></h3>
                  <p class="product-card__rating mel-0">
                    <svg-icon
                      icon-class="star"
                      class="product-card__rating-icon color-primary"
                      v-for="(item, index) in item.total_rating"
                      :key="index"
                    />
                    <span class="product-card__rating-num" v-html="item.total_rating.toFixed(1)"></span>
                  </p>
                  <h2 class="product-card__price" v-html="item.price"></h2>
                </div>
              </a>
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
      sortBy: [
        {
          value: 'Featured',
          label: 'Featured',
        },
        {
          value: 'Price',
          label: 'Price',
        },
        {
          value: 'Rating',
          label: 'Rating',
        },
      ],
      value: '',
      products: [
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
        {
          name:
            'Philips QT4001/15 cordless rechargeable Beard Trimmer - 10 length settings',
          thumbnail: '/images/products/product-5.png',
          total_rating: 5.0,
          price: '$200',
        },
      ],
    };
  },
  methods: {
    changeView(type) {
      $('.view-box__icon').removeClass('active');

      if (type == 'grid') {
        $('.view-box__icon.grid-view-icon').addClass('active');
        $('.grid-view').removeClass('hide');
        $('.list-view').addClass('hide');
      } else if (type == 'list') {
        $('.view-box__icon.list-view-icon').addClass('active');
        $('.grid-view').addClass('hide');
        $('.list-view').removeClass('hide');
      }
    },
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

