<template>
  <div class="panels">
    <el-row :gutter="10" class="panel-group mb-0">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        v-for="(panel, index) in panels_top"
        :key="index"
        class="card-panel-col"
      >
        <div class="card-panel">
          <div class="card-panel__head">
            <div class="card-panel__title">
              <p class="card-panel__heading" v-html="panel.name"></p>
              <p class="card-panel__date" v-html="panel.date"></p>
            </div>

            <div class="card-panel__revenue-group">
              <el-select
                v-model="form.yearly_1"
                clearable
                placeholder="Select"
                class="custom-select mr-8"
              >
                <el-option
                  v-for="item in form.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>

              <el-select
                v-model="form.totalValue_1"
                clearable
                placeholder="Select"
                class="custom-select"
              >
                <el-option
                  v-for="item in form.options_2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="card-panel__description">
            <div class="card-panel__total">
              <p class="card-panel__total-value">
                <count-to
                  :start-val="0"
                  :end-val="panel.total_value"
                  :duration="2600"
                  :decimals="2"
                  :prefix="panel.rev_prefix"
                />
              </p>
              <p class="card-panel__totals" v-html="panel.total_text"></p>
            </div>
            <div class="card-panel-icon-wrapper icon-chart">
              <svg-icon :icon-class="panel.icon" class-name="card-panel-icon" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- row -->

    <el-row :gutter="10" class="panel-group mb-10">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        v-for="(panel, index) in panels_bottom"
        :key="index"
        class="card-panel-col"
      >
        <div class="card-panel">
          <div class="card-panel__head">
            <div class="card-panel__title">
              <p class="card-panel__heading" v-html="panel.name"></p>
            </div>

            <div class="card-panel__revenue-group">
              <el-select
                v-model="form.yearly_1"
                clearable
                placeholder="Select"
                class="custom-select mr-8"
              >
                <el-option
                  v-for="item in form.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>

              <el-select
                v-model="form.totalValue_1"
                clearable
                placeholder="Select"
                class="custom-select"
              >
                <el-option
                  v-for="item in form.options_2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="card-panel__description">
            <div class="card-panel__total">
              <p class="card-panel__total-value">
                <count-to
                  :start-val="0"
                  :end-val="panel.total_value"
                  :duration="2600"
                  :decimals="panel.total_decimal"
                  :prefix="panel.rev_prefix"
                />
              </p>
            </div>
            <div class="card-panel-icon-wrapper icon-chart">
              <svg-icon :icon-class="panel.icon" class-name="card-panel-icon" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      panels_top: [
        {
          name: 'Appointments Revenue',
          date: 'June 11, 2020',
          total_value: 16403.0,
          rev_prefix: '$',
          total_text: 'Total 3500 appointments',
          icon: 'chart',
        },
        {
          name: 'Products Revenue',
          date: 'June 11, 2020',
          total_value: 16403.0,
          rev_prefix: '$',
          total_text: 'Total 3500 appointments',
          icon: 'chart',
        },
        {
          name: 'Accounts Revenue',
          date: 'June 11, 2020',
          total_value: 16403.0,
          rev_prefix: '$',
          total_text: 'Total 3500 appointments',
          icon: 'chart',
        },
      ],

      panels_bottom: [
        {
          name: 'How many people users refer to the business',
          date: 'June 11, 2020',
          total_value: 500,
          rev_prefix: '',
          total_decimal: 0,
          total_text: 'Total 3500 appointments',
          icon: 'users',
        },
        {
          name: 'Shop Owner Total Bookings',
          date: 'June 11, 2020',
          total_value: 550,
          rev_prefix: '',
          total_decimal: 0,
          total_text: 'Total 3500 appointments',
          icon: 'users',
        },
        {
          name: 'Independent user Total Bookings',
          date: 'June 11, 2020',
          total_value: 550,
          rev_prefix: '',
          total_decimal: 0,
          total_text: 'Total 3500 appointments',
          icon: 'users',
        },
      ],
      form: {
        yearly_1: 'Yearly',
        yearly_2: '',
        yearly_3: '',

        totalValue_1: 'Last_Year',
        totalValue_2: '',
        totalValue_3: '',
        options: [
          {
            value: 'Monthly',
            label: 'Monthly',
          },
          {
            value: 'Yearly',
            label: 'Yearly',
          },
        ],
        options_2: [
          {
            value: 'Last_Year',
            label: 'Last Year',
          },
          {
            value: 'Last_Month',
            label: 'Last Month',
          },
          {
            value: 'Last_Week',
            label: 'Last Week',
          },
        ],
      },
    };
  },
  methods: {
    // handleSetLineChartData(type) {
    //   this.$emit('handleSetLineChartData', type);
    // },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 10px;
  .card-panel-col {
    margin-bottom: 5px;
  }
  .card-panel {
    position: relative;
    cursor: pointer;
    min-height: 108px;
    padding: 10px 15px;
    overflow: hidden;
    background: #fff;
    // border-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0px 2px 6px #0000000a;
    font-weight: 400;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      flex-basis: 45%;
    }
    &__heading {
      font-size: 15px;
      color: #4d4f5c;
      margin: 5px 0;
      margin-right: 5px;
    }
    &__date {
      font-size: 11px;
      color: #7882a2;
      margin: 0;
    }

    &__revenue-group {
      flex-basis: 60%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &__description {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__total-value {
      font-size: 40px;
      font-weight: 500;
      color: #ea4235;
      margin: 5px 0;
    }
    &__totals {
      font-size: 15px;
      font-weight: 500;
      color: #ea4235;
      margin: 0;
    }

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-chart {
        background: var(--primary-color);
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-chart {
      color: var(--primary-color);
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .card-panel {
      &__total-value {
        font-size: 32px;
      }
      &__totals {
        font-size: 12px;
      }
    }
  }
}
</style>
