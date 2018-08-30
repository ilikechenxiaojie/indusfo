<template>
  <div id="barChart" :style="{width: '100%', height: '300px'}"></div>
</template>
<script>
import option from '@/utils/option'
export default {
  name: 'bar',
  data() {
    return {
      name: 'bar',
      types: [],
      dights: [],
      myChart: '',
      option: option
    }
  },
  mounted() {
    this._fetchData() // 获取数据
    this._drawLine() // 绘制图表
    // window.onresize = this.myChart.resize // 自适应屏幕
  },
  methods: {
    // 获取数据
    _fetchData() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('barChart'))
      // 数据获取ajax
      this.types = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      this.dights = [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
      // 加载loading动画
      this.myChart.showLoading()
    },
    _drawLine() {
      this.myChart.hideLoading()
      // 绘制图表
      this.option.xAxis.data = this.types
      this.option.xAxis.boundaryGap = true
      this.option.series[0].data = this.dights
      this.option.legend = {
        x: 'center',
        top: 30
      }
      this.option.series[0].type = 'bar'
      // console.log(this.option.series[0])
      this.myChart.setOption(this.option)
    }
  }
}
</script>
<style>
</style>
