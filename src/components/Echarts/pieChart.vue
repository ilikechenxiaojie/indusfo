<template>
  <div id="pieChart" :style="{width: '100%', height: '300px'}"></div>
</template>
<script>
export default {
  name: 'bar',
  data() {
    return {
      types: [],
      dights: [],
      seriesData: [],
      myChart: '',
      scrollHeight: ''
    }
  },
  mounted() {
    this._fetchData()
    this._drawLine()
  },
  methods: {
    _fetchData() {
      this.types = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      this.dights = [5, 20, 36, 10, 10, 20]
      for (let i = 0; i < this.types.length; i++) {
        this.seriesData.push({
          name: this.types[i],
          value: this.dights[i]
        })
      }
    },
    _drawLine() {
      // console.log(this.seriesData)
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('pieChart'))
      // 绘制图表
      this.myChart.setOption({
        title: {
          text: '在Vue中使用pie-echarts'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20
        },
        tooltip: {},
        series: [
          {
            name: '销量',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: this.seriesData
          }
        ]
      })
    }
  }
}
</script>
<style>
</style>
