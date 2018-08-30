<template>
  <div class="oform-one">
    <abrasive :headerStyle="getRowClass"/>
  </div>
</template>

<script>
import Abrasive from '@/components/Tables/Abrasive'
export default {
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: #f2f2f2;'
      } else {
        return ''
      }
    }
  },
  components: {
    Abrasive
  }
}
</script>

<style>

</style>
