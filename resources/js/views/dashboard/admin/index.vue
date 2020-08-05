<template>
  <div class="dashboard-editor-container">
    <panel-group />

    <el-row :gutter="8">
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 24}"
        :xl="{span: 24}"
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
import {productsRef,auth} from "@/firebase"

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    TransactionTable,
  },
  firestore:{
    products:productsRef
  },
  data() {
    return {
      products:[]
    };
  },
  methods: {},
  mounted() {
  }
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
</style>
