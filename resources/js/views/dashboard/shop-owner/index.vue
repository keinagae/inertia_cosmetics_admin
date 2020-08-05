<template>
  <div class="dashboard-editor-container">
    <panel-group />

    <el-row :gutter="8">
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 8}"
        :xl="{span: 8}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12">
            <div class="card-panel">
              <div class="card-panel__head">
                <div class="card-panel__title">
                  <p class="card-panel__heading">Total Reviews</p>
                  <p class="card-panel__date">April 22, 2020</p>
                </div>
              </div>

              <div class="card-panel__total-circle">
                <span class="card-panel__total">28</span>
              </div>
              <h3 class="card-panel__total-title">Total Reviews</h3>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="card-panel">
              <div class="card-panel__head">
                <div class="card-panel__title">
                  <p class="card-panel__heading">Total Ratings</p>
                  <p class="card-panel__date">April 22, 2020</p>
                </div>
              </div>

              <div class="card-panel__total-circle">
                <span class="card-panel__total">3.5</span>
              </div>
              <h3 class="card-panel__total-title">Total Ratings</h3>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 16}"
        :xl="{span: 16}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <transaction-table />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup';
import TransactionTable from './components/TransactionTable';

export default {
  name: 'shopOwnerDashboard',
  components: {
    PanelGroup,
    TransactionTable,
  },
  data() {
    return {};
  },
  methods: {},
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

.card-panel {
  position: relative;
  cursor: pointer;
  min-height: 108px;
  padding: 10px 15px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 2px 6px #0000000a;
  font-weight: 400;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.2rem;
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
    margin-bottom: 3.8rem;
  }

  &__total-circle {
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    margin: 10px auto;
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    color: #4d4f5c;
    border: 7px solid var(--primary-color);
  }
}
</style>
