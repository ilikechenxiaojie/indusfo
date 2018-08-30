<template>
  <div id="lineChart" class="lazy" :style="{width: '100%', height: '300px'}" :loading="loading"></div>
</template>
<script>
import option from '@/utils/option'
const shortOfHeight = 100 // 高度差
export default {
  name: 'bar',
  data() {
    return {
      name: 'test',
      loading: true,
      types: [],
      dights: [],
      myChart: '',
      option: option,
      scrollHeight: 0,
      targetHeight: 0,
      elementHeight: 0,
      lazyHeight: 0
    }
  },
  mounted() {
    this._fetchData() // 获取表格DOM
    // 延迟加载,加快浏览器启动效率
    window.onscroll = () => {
      let lazy = document.getElementsByClassName('lazy')
      console.log(lazy)
      if (lazy.length !== 0) {
        // console.log('111')
        // 滚轮高度
        this.scrollHeight = document.documentElement.scrollTop
        // console.log(this.scrollHeight)
        // 懒加载元素与页面的高度
        this.elementHeight = document.documentElement.clientHeight
        // 懒加载元素高度
        this.lazyHeight = lazy[0].clientHeight
        // 目标高度
        this.targetHeight = this.elementHeight - this.lazyHeight
        // console.log(this.targetHeight),400
        this.scrollHeight - this.targetHeight >= shortOfHeight
          ? this._drawLine()
          : this.myChart.showLoading() // 绘制图表
      }
      // lazy = undefined
    }
    this._drawLine()
  },
  methods: {
    _fetchData() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('lineChart'))
      // 加载loading动画
      this.myChart.showLoading()
      // 加载loading动画
      // this.myChart.showLoading()
    },
    _drawLine() {
      // 获取数据
      // 当types的数据为空时获取后端数据
      if (
        Object.prototype.toString.call(this.types) === '[object Array]' &&
        this.types.length === 0
      ) {
        // 根据后端数据
        this.types = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '什么', '衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '什么']
        this.dights = [5, 20, 36, 10, 10, 20, 60, 5, 20, 36, 10, 10, 20, 60]
      }
      // 否则直接绘图,响应延迟加载
      this.myChart.hideLoading()
      // console.log(this.option)
      // 绘制图表
      this.option.xAxis.data = this.types
      this.option.xAxis.boundaryGap = false
      this.option.series[0].data = this.dights
      this.option.series[0].type = 'line'
      // console.log(this.option.series[0])
      this.myChart.setOption(this.option)
    }
  }
}
</script>
<style>
</style>
