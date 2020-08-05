<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts';
require('echarts/theme/macarons'); // echarts theme
import { debounce } from '@/utils';

const animationDuration = 6000;

export default {
  props: {
    className: {
      type: String,
      default: 'costChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '260px',
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener('resize', this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener('resize', this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons');

      this.chart.setOption({
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            show: false,
            inside: true,
            margin: 0,
          },
        },
        yAxis: {
          show: false,
          type: 'value',
          axisLabel: {
            show: false,
            inside: true,
            margin: 0,
          },
        },
        series: [
          {
            data: [200, 200, 220, 200, 210, 218, 230],
            type: 'line',
            areaStyle: {
              color: 'rgb(255, 153, 0)',
              opacity: 1,
              smooth: true,
            },
          },
        ],
      });
    },
  },
};
</script>


<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
