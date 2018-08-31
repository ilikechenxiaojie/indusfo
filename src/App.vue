<template>
  <keep-alive>
    <div id="app">
      <router-view/>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'normalize.css/normalize.css';
@import '@/assets/css/style.scss';
@import '@/assets/css/animate.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
