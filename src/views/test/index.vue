<template>
  <div class="test">
    <!-- <informs :headerStyle="test" :handleMouseEnter="test" :handleMouseLeave="test"/> -->
    <recheck :headerStyle="getRowClass"/>
    <!-- <carousel /> -->
    <!-- <own-defined :autoplay="autoplay"/> -->
  </div>
</template>

<script>
import Recheck from '@/components/Tables/Recheck'
// import OwnDefined from '@/components/Carousel/OwnDefined'
export default {
  data() {
    return {
      autoplay: true
    }
  },
  mounted() {
  },
  methods: {
    test() {
      return ''
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: #f2f2f2;'
      } else {
        return ''
      }
    }
  },
  components: {
    Recheck
    // OwnDefined
  }
}
</script>

<style>
</style>
