let option = {
  // 标题
  title: {
    text: '在Vue中使用echarts'
  },
  // 工具箱
  tooltip: {},
  legend: {},
  // x轴
  xAxis: {
    type: 'category',
    // boundaryGap: false, ----------自定义
    data: ''
  },
  yAxis: {},
  series: [{
    name: '销量',
    // type: 'line',-----------------自定义
    // 可对点进行设置
    symbol: '',
    // 点的大小
    symbolSize: 8,
    // 项目的样式
    itemStyle: {
      normal: {
        // 设置总体的颜色
        color: '#4ee8e6',
        // 文本
        label: {
          // format
          formatter: function(p) {
            if (p.value.length <= 3) {
              return p.value
            }
            if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(p.value)) {
              return p.value
            }
            let a = RegExp.$1
            let b = RegExp.$2
            let c = RegExp.$3
            let re = new RegExp()
            re.compile('(\\d)(\\d{3})(,|$)')
            while (re.test(b)) {
              b = b.replace(re, '$1,$2$3')
            }
            return a + '' + b + '' + c
          },
          // 显不显示
          show: true,
          // 位置
          position: 'top',
          // 鼠标悬停时
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.7)' // 变亮
          }
        }
      }
    },
    data: ''
  }]
}
export default option
