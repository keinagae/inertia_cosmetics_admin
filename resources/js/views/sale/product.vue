<template>
  <div class="app-container">
    <div class="shop-view card-view">
      <el-row>
        <el-col :span="24">
          <h1 class="page-title" v-html="pageTitle()"></h1>
        </el-col>
      </el-row>
      <el-form ref="form" :model="form" label-width="120px">
        <el-row :gutter="20">
          <el-col :sm="12">
            <div class="form-group">
              <label for="shop_name" class="el-form-item__label">Product Name*</label>
              <el-input
                class="cust-input"
                placeholder="Shop Name"
                id="shop_name"
                v-model="form.product_name"
              />
            </div>
          </el-col>
          <el-col :sm="12">
            <div class="form-group">
              <label for="sub_text" class="el-form-item__label">Sub text*</label>
              <el-input
                class="cust-input"
                placeholder="Sub text"
                id="sub_text"
                v-model="form.product_subtext"
              />
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :sm="8">
            <div class="form-group">
              <el-row>
                <el-col :span="24">
                  <label for="shop_name" class="el-form-item__label">Category*</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-select
                    v-model="form.value"
                    clearable
                    placeholder="Select"
                    class="custom-select width-100"
                  >
                    <el-option
                      v-for="item in form.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="8">
            <div class="form-group">
              <el-row>
                <el-col :span="24">
                  <label for="price" class="el-form-item__label">Price</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-input class="cust-input" placeholder="USD" id="price" v-model="form.price" />
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="8">
            <div class="form-group">
              <el-row>
                <el-col :span="24">
                  <label for="shop_name" class="el-form-item__label">Discount</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-select
                    v-model="form.value"
                    clearable
                    placeholder="Select"
                    class="custom-select width-100"
                  >
                    <el-option
                      v-for="item in form.discOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="23">
            <div class="form-group">
              <label for="shop_name" class="el-form-item__label">Product Description*</label>
              <el-input
                class="cust-input"
                placeholder="Product Description"
                type="textarea"
                v-model="form.product_desc"
                :autosize="{ minRows: 4}"
              />
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="member-view">
      <el-row>
        <el-col :span="24">
          <h1 class="main-heading">Upload Image</h1>
        </el-col>
      </el-row>
      <el-container>
        <el-row>
          <el-col :xs="24" :sm="24" :lg="20">
            <el-row class="width-100">
              <el-col :lg="6" :sm="12" v-for="(member, i) in members" :key="i">
                <div class="member-card">
                  <div class="member-card__thumbnail">
                    <el-image style="width: 100%;" :src="member.url" :fit="member.fit"></el-image>
                  </div>
                  <h2 class="member-card__name text-center" v-html="member.name"></h2>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="4">
            <div class="member-card member-add-card">
              <div class="member-card__thumbnail">
                <a href="#" class="member-card__link">
                  <i class="el-icon-plus" />
                </a>
              </div>
              <h2 class="member-card__name text-center">&nbsp;</h2>
            </div>
          </el-col>
        </el-row>
      </el-container>
      <el-row>
        <el-col :span="24">
          <el-button type="primary" class="btn-primary btn-custom btn-long">save</el-button>
          <el-button type="danger" class="btn-custom btn-long">Cancel</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          url: '/images/products/product-1.png',
          fit: 'cover',
          name: '',
        },
        {
          url: '/images/products/product-1.png',
          fit: 'cover',
          name: '',
        },
        {
          url: '/images/products/product-1.png',
          fit: 'cover',
          name: '',
        },
        {
          url: '/images/products/product-1.png',
          fit: 'cover',
          name: '',
        },
      ],
      form: {
        product_desc: '',
        Price: '',
        Description: '',
        Title: '',
        options: [
          {
            value: 'Category 1',
            label: 'Category 1',
          },
          {
            value: 'Category 2',
            label: 'Category 2',
          },
          {
            value: 'Category 3',
            label: 'Category 3',
          },
          {
            value: 'Category 4',
            label: 'Category 4',
          },
          {
            value: 'Category 5',
            label: 'Category 5',
          },
        ],
        discOptions: [
          {
            value: '10%',
            label: '10%',
          },
          {
            value: '20%',
            label: '20%',
          },
          {
            value: '30%',
            label: '30%',
          },
          {
            value: '40%',
            label: '40%',
          },
          {
            value: '50%',
            label: '50%',
          },
        ],

        value: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$message('submit!');
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning',
      });
    },
    pageTitle() {
      return this.$route.meta.pageTitle || '';
    },
  },
};
</script>

<style scoped>
.el-button {
  margin-right: 10px;
  margin-bottom: 8px;
}
.el-button + .el-button {
  margin-left: 0 !important;
}
</style>

