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
.slide-fade-enter-active, .fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active, .fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
