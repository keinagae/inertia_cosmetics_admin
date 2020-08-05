<template>
  <div class="dashboard-editor-container">
    <el-row class="chart-row" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <el-row>
        <el-col :sm="12">
          <h3 class="chart-row__title">Analytics</h3>
          <p class="chart-row__sub-text">Requests</p>
        </el-col>
        <el-col :sm="12" class="text-right">
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
        </el-col>
      </el-row>
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-panel">
          <div class="card-panel__head">
            <div class="card-panel__title">
              <p class="card-panel__heading">Operations</p>
              <p class="card-panel__date">April 22, 2020</p>
            </div>
          </div>

          <div class="card-panel__total-circle">
            <span class="card-panel__total">48%</span>
            <span class="card-panel__total">Saved</span>
          </div>

          <div class="card-panel__total-list">
            <div class="card-panel__total-list-item">
              <h3 class="card-panel__total-list-title">Total Spent</h3>
              <h3 class="card-panel__total-list-value">$18,570</h3>
            </div>

            <div class="card-panel__total-list-item primary">
              <h3 class="card-panel__total-list-title">Money Saved</h3>
              <h3 class="card-panel__total-list-value">$31,430</h3>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="16">
        <div class="chart-wrapper">
          <el-row class="chart-row">
            <el-col :sm="12">
              <h3 class="chart-row__title">Revenue</h3>
            </el-col>
            <el-col :sm="12" class="text-right">
              <el-row :gutter="10">
                <el-col :span="12">
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
                </el-col>
                <el-col :span="12">
                  <el-select
                    v-model="form.totalValue_2"
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
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-panel chart">
          <div class="card-panel__head">
            <div class="card-panel__title">
              <p class="card-panel__heading">Total Reviews</p>
              <p class="card-panel__date">April 22, 2020</p>
            </div>
          </div>

          <div class="card-panel__total">
            <p class="card-panel__total-value">
              <count-to :start-val="0" :end-val="16403" :duration="2600" :decimals="2" prefix="$" />
            </p>
            <p class="card-panel__profit">
              <span>+7.3</span>
              <svg-icon icon-class="decrease" />
            </p>
          </div>

          <CostChart></CostChart>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-panel chart">
          <div class="card-panel__head">
            <div class="card-panel__title">
              <p class="card-panel__heading">Total Reviews</p>
              <p class="card-panel__date">April 22, 2020</p>
            </div>
          </div>

          <div class="card-panel__total">
            <p class="card-panel__total-value">
              <count-to :start-val="0" :end-val="16403" :duration="2600" :decimals="2" prefix="$" />
            </p>
            <p class="card-panel__profit">
              <span>+7.3</span>
              <svg-icon icon-class="decrease" />
            </p>
          </div>

          <CostChart></CostChart>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-panel chart">
          <div class="card-panel__head">
            <div class="card-panel__title">
              <p class="card-panel__heading">Total Reviews</p>
              <p class="card-panel__date">April 22, 2020</p>
            </div>
          </div>

          <div class="card-panel__total">
            <p class="card-panel__total-value">
              <count-to :start-val="0" :end-val="16403" :duration="2600" :decimals="2" prefix="$" />
            </p>
            <p class="card-panel__profit">
              <span>+7.3</span>
              <svg-icon icon-class="decrease" />
            </p>
          </div>

          <CostChart></CostChart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import CostChart from './components/CostChart';

import CountTo from 'vue-count-to';

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

export default {
  name: 'sellingProductsDashboard',
  components: {
    LineChart,
    BarChart,
    CostChart,
    CountTo,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      form: {
        yearly_1: 'Monthly',
        yearly_2: 'Monthly',

        totalValue_1: 'Last_Year',
        totalValue_2: 'Last_Year',
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
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.chart-row {
  &__title {
    font-size: 24px;
    color: #4d4f5c;
    margin: 5px 0;
    font-weight: 400;
  }

  &__sub-text {
    position: relative;
    font-size: 15px;
    color: #4d4f5c;
    margin: 0;
    margin-left: 25px;
  }

  &__sub-text::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 18px;
    background: #5f55f5;
    top: 4px;
    left: -25px;
    border-radius: 5px;
  }
}

.card-panel {
  position: relative;
  cursor: pointer;
  padding: 10px 30px;
  margin-bottom: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 2px 6px #0000000a;
  font-weight: 400;

  &.chart {
    padding: 0;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.2rem;
  }

  &.chart &__head {
    margin-bottom: 0;
    padding: 0 30px;
  }

  &__heading {
    font-size: 18px;
    font-weight: 400;
    color: #323a45;
  }
  &__date {
    font-size: 12px;
    font-weight: 400;
    color: #7882a2;
    margin-top: -12px;
  }

  &__total-title {
    text-align: center;
    font-size: 18px;
    color: #4d4f5c;
    font-weight: 400;
    margin-bottom: 3.3rem;
  }

  &__total {
    padding: 0 30px;
  }

  &__total-value {
    font-size: 40px;
    font-weight: 500;
    color: #ea4235;
    margin: 5px 0;
  }

  &__profit span {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    margin-right: 10px;
  }

  &__total-circle {
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    margin: 3rem auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #4d4f5c;
    border: 7px solid var(--primary-color);
  }

  &__total-list {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 2.8rem;

    &-title {
      font-size: 15px;
      color: #43425d;
      margin: 5px 0;
    }

    &-value {
      font-size: 13px;
      color: #4d4f5c;
      opacity: 0.5;
      margin: 0;
    }

    &-item {
      position: relative;
      margin-left: 25px;
    }

    &-item::before {
      content: '';
      position: absolute;
      top: 8px;
      left: -25px;
      height: 12px;
      width: 12px;
      background: #edecfe;
      border-radius: 50%;
    }
    &-item.primary::before {
      background: var(--primary-color);
    }
  }
}
</style>
