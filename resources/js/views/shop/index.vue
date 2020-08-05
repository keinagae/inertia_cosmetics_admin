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
              <el-row class="mb-0">
                <el-col :span="12">
                  <label for="shop_name" class="el-form-item__label">Shop Name*</label>
                </el-col>
                <el-col :span="12">
                  <label for="shop_name">
                    <div class="edit-icon-box">
                      <svg-icon icon-class="icon_with_number" />
                    </div>
                  </label>
                </el-col>
              </el-row>
              <el-input
                class="custom-input-green"
                placeholder="Shop Name"
                id="shop_name"
                v-model="form.shop_name"
              />
            </div>
          </el-col>
          <el-col :sm="12">
            <div class="form-group">
              <el-row class="mb-0">
                <el-col :span="12">
                  <label for="sub_text" class="el-form-item__label">Sub text*</label>
                </el-col>

                <el-col :span="12">
                  <label for="sub_text">
                    <div class="edit-icon-box">
                      <svg-icon icon-class="icon_with_number" />
                    </div>
                  </label>
                </el-col>
              </el-row>
              <el-input
                class="custom-input-green"
                placeholder="Sub text"
                id="sub_text"
                v-model="form.shop_subtext"
              />
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :sm="12">
            <div class="form-group">
              <el-row class="mb-0">
                <el-col :span="24">
                  <label for="shop_name" class="el-form-item__label">Timing</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col :sm="18">
                  <el-time-picker
                    is-range
                    v-model="form.timePicker"
                    range-separator="To"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                    class="custom-input-green"
                  ></el-time-picker>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :sm="12" class="hidden-xs-only">
            <div class="caret-icon-box">
              <svg-icon icon-class="caret-down" />
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="form-group">
              <label for="shop_name" class="el-form-item__label">About Shop</label>
              <el-input
                class="custom-input-green"
                placeholder="About"
                type="textarea"
                :autosize="{ minRows: 4}"
                v-model="form.shop_about"
              />
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="member-view">
      <el-row>
        <el-col :span="24">
          <h1 class="main-heading">Member's</h1>
        </el-col>
      </el-row>
      <el-container>
        <el-row>
          <el-col :xs="24" :sm="24" :lg="20">
            <el-row class="width-100">
              <el-col :lg="6" :md="6" :sm="6" :xs="12" v-for="(member, i) in members" :key="i">
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
                <a href="#" class="member-card__link" @click="centerDialogVisible = true">
                  <i class="el-icon-plus" />
                </a>
              </div>
              <h2 class="member-card__name text-center">&nbsp;</h2>
            </div>
          </el-col>
        </el-row>
      </el-container>
      <el-row>
        <el-col :sm="6" class="text-center">
          <el-button type="primary" class="btn-primary btn-long">edit member's</el-button>
        </el-col>
      </el-row>
    </div>

    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="showClose"
      class="member-dialog"
      center
    >
      <div class="member-dialog__content">
        <h1 class="member-dialog__heading">Member Code</h1>
        <p
          class="member-dialog__subtext"
        >You share this code with your new member. he will sign up with this code</p>
        <div class="member-dialog__code-boxes">
          <span class="member-dialog__code-box">1</span>
          <span class="member-dialog__code-box">z</span>
          <span class="member-dialog__code-box">3</span>
          <span class="member-dialog__code-box">b</span>
          <span class="member-dialog__code-box">r</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          class="btn-primary btn-block"
          @click="centerDialogVisible = false"
        >Ok</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          url: '/images/members/member-1.png',
          fit: 'cover',
          name: 'Hazel Anderson',
        },
        {
          url: '/images/members/member-2.png',
          fit: 'cover',
          name: 'Patricia Barclay',
        },
        {
          url: '/images/members/member-3.png',
          fit: 'cover',
          name: 'Richard Wilmot',
        },
        {
          url: '/images/members/member-4.png',
          fit: 'cover',
          name: 'Hazel Anderson',
        },
      ],
      form: {
        shop_name: '',
        shop_subtext: '',
        shop_about: '',
        timePicker: [
          new Date(2016, 9, 10, 8, 40),
          new Date(2016, 9, 10, 9, 40),
        ],
      },
      centerDialogVisible: false,
      showClose: false,
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

