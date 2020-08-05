<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts';
require('echarts/theme/macarons'); // echarts theme
import { debounce } from '@/utils';

export default {
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '450px',
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    this.initChart();
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener('resize', this.__resizeHandler);
    }

    // Monitor the sidebar changes
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0];
    this.sidebarElm &&
      this.sidebarElm.addEventListener(
        'transitionend',
        this.sidebarResizeHandler
      );
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler);
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        'transitionend',
        this.sidebarResizeHandler
      );

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler();
      }
    },

    getAllDateMonth() {
      let d = [];
      for (let i = 1; i < 31; i++) {
        d.push('2020-05-' + i);
      }
      return d;
    },

    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        // title: {
        //   text: 'Analytics',
        //   subtext: 'Requests',
        // },
        grid: {
          left: '5%',
          top: 30,
          right: '5%',
          bottom: 60,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#4D4F5C',
            },
          },
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              title: 'Download',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.getAllDateMonth(),
          axisLabel: {
            color: '#7882A2',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '${value}',
            color: '#7882A2',
          },
          axisPointer: {
            snap: true,
          },
        },
        series: [
          {
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#FF9900',
              width: 3,
            },
            data: [
              5000,
              932,
              901,
              15000,
              901,
              934,
              10000,
              1290,
              1290,
              1290,
              1290,
              1290,
              1330,
              1330,
              1320,
              1320,
              5000,
              5000,
              5000,
              5000,
              5000,
              5000,
              5000,
              5000,
              5000,
              5000,
              15000,
              15000,
              15000,
              7000,
              7000,
            ],
          },
        ],
      });
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons');
      this.setOptions(this.chartData);
    },
  },
};
</script>
