<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      const route = this.$route
      console.log(route)
      return route.name ? route.name + +new Date() : route + +new Date()
    }
  }
}
</script>

<style>
.app-main {
  /* padding: 20px; */
  padding: 12px 0;
  min-height: 100%;
}
</style>
