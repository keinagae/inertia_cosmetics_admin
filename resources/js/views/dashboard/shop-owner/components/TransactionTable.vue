<template>
  <el-row :gutter="20">
    <el-col
      :xs="{span: 24}"
      :sm="{span: 24}"
      :md="{span: 24}"
      :lg="{span: 12}"
      :xl="{span: 12}"
      style="padding-right:8px;margin-bottom:30px;"
    >
      <div class="filter-row">
        <p class="filter-row__total">Popular 5 haircuts</p>

        <div class="filter-row__filter-group">
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
      <el-table :data="tableData" stripe style="width: 100%;padding-top: 15px;">
        <el-table-column label="Hair Cuts" prop="cuts"></el-table-column>
        <el-table-column label="Price" prop="price" align="right"></el-table-column>
      </el-table>
    </el-col>

    <el-col
      :xs="{span: 24}"
      :sm="{span: 24}"
      :md="{span: 24}"
      :lg="{span: 12}"
      :xl="{span: 12}"
      style="padding-right:8px;margin-bottom:30px;"
    >
      <div class="filter-row" style="padding: 1.2rem;">
        <p class="filter-row__total">Top 5 Haircuts reviews and ratings</p>
      </div>
      <el-table :data="tableData2" stripe style="width: 100%;padding-top: 15px;">
        <el-table-column label="Hair Cuts" prop="product"></el-table-column>
        <el-table-column label="Reviews" prop="reviews" align="center"></el-table-column>
        <el-table-column label="Ratings" prop="ratings" align="center"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { fetchList } from '@/api/order';

export default {
  data() {
    return {
      form: {
        yearly_1: 'Yearly',

        totalValue_1: 'Last_Year',
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

      tableData: [
        {
          cuts: 'Hair Line Clean up',
          price: '$15',
        },
        {
          cuts: 'Hair Line Clean up',
          price: '$15',
        },
        {
          cuts: 'Hair Line Clean up',
          price: '$15',
        },
        {
          cuts: 'Hair Line Clean up',
          price: '$15',
        },
        {
          cuts: 'Hair Line Clean up',
          price: '$15',
        },
      ],

      tableData2: [
        {
          product: 'Hair Line Clean up',
          reviews: '20',
          ratings: '5.0',
        },
        {
          product: 'Hair Line Clean up',
          reviews: '20',
          ratings: '5.0',
        },
        {
          product: 'Hair Line Clean up',
          reviews: '20',
          ratings: '5.0',
        },
        {
          product: 'Hair Line Clean up',
          reviews: '20',
          ratings: '5.0',
        },
        {
          product: 'Hair Line Clean up',
          reviews: '20',
          ratings: '5.0',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.filter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #4d4f5c;

  &__total {
    margin-right: 10px;
    flex: 1 1 60%;
    margin: 0;
  }

  &__filter-group {
    display: flex;
    align-items: center;
    flex: 1 1 55%;
  }
}

@media only screen and (max-width: 420px) {
  .filter-row {
    flex-direction: column;
    &__total {
      margin: 0;
      margin-bottom: 8px;
    }
  }
}
</style>
