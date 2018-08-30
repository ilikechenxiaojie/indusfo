<template>
  <div class="prod-two">
    <!-- <own-defined :autoplay="autoplay"/> -->
    <equipment />
  </div>
</template>

<script>
import OwnDefined from '@/components/Carousel/OwnDefined'
import Equipment from '@/components/Tables/Equipment'
export default {
  data() {
    return {
      autoplay: true
    }
  },
  mounted() {
  },
  components: {
    OwnDefined,
    Equipment
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
