<template>
  <div class="hello">
    <informs :headerStyle="getRowClass" :handleMouseEnter="handleMouseEnter" :handleMouseLeave="handleMouseLeave"/>
  </div>
</template>

<script>
import Informs from '@/components/Informs'
export default {
  data() {
    return {}
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#387bb2; color: #fff'
      } else {
        return ''
      }
    },
    handleMouseEnter(row, column, cell, event) {
      // cell.parentNode.style.color = 'black'
      // console.log(cell.parentNode.cells)
      for (let x of cell.parentNode.cells) {
        x.style.color = 'black'
        x.style.background = '#B0C4DE'
      }
    },
    handleMouseLeave(row, column, cell, event) {
      for (let x of cell.parentNode.cells) {
        x.style.color = '#fff'
        x.style.background = '#387bb2'
      }
    }
  },
  components: {
    Informs
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.informs,
.informs-card,
td {
  background: #387bb2;
  color: #fff;
}
</style>
