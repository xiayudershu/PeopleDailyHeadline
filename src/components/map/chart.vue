<template>
	
		

  <div id="mapchartmain"></div>
 
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: {
    countrynames: {
      type: Array,
      required: true
    },
    countrydata: {
      type: Array,
      required: true
    } 
  },
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById('mapchartmain'));
    this.updateChart();
  },
  watch: {
    countrynames: {
      handler(newVal, oldVal) {
        this.updateChart();
      },
      deep: true
    },
    countrydata: {
      handler(newVal, oldVal) {
        this.updateChart();
      },
      deep: true
    }
  },
  methods: {
    updateChart() {
      if (this.myChart) {
        const option = {
          xAxis: { type: 'value' },
          yAxis: { 
            type: 'category', 
            data: this.countrynames 
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          series: [{
            data: this.countrydata,
            type: 'bar',
            barWidth: '75%',
            barGap: '2%',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 1, color: '#88abda' },
                { offset: 0.5, color: '#6f94cd' },
                { offset: 0, color: '#5976ba' }
              ])
            },
            label: {
              show: true,
              position: 'right'
            }
          }]
        };
        this.myChart.setOption(option);
      } else {
        console.error("Failed to find the element with id 'mapchartmain'.");
      }
    }
  }
}
</script>

<style scoped>
#mapchartmain{
	width: 30vw;
	height: 40vh;
}
</style>