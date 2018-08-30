<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <informs :headerStyle="a" :handleMouseEnter="a" :handleMouseLeave="a" />
    <echarts ref='barChart' />
    <line-chart ref='lineChart' />
    <pie-chart ref='pieChart' />
  </div>
</template>

<script>
import echarts from '@/components/Echarts'
import lineChart from '@/components/Echarts/lineChart'
import pieChart from '@/components/Echarts/pieChart'
import Informs from '@/components/Informs'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      charts: []
    }
  },
  mounted() {
    this.charts.push(this.$refs.barChart.myChart)
    this.charts.push(this.$refs.lineChart.myChart)
    this.charts.push(this.$refs.pieChart.myChart)
    // console.log(this.charts)
    this._chartsInit()
  },
  computed: {},
  methods: {
    a() {
      return ''
    },
    // 自适应图
    _chartsInit() {
      // const that = this
      setTimeout(() => {
        window.onresize = () => {
          for (let x of this.charts) {
            x.resize()
          }
        }
      }, 20)
    }
  },
  components: {
    echarts,
    lineChart,
    pieChart,
    Informs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
