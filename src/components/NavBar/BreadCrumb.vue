<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index)  in data" :key="index">
      <router-link v-if='index >= data.length - 2' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    this._initData()
  },
  methods: {
    _initData() {
      // console.log(this.$route)
      this.data = [{ name: '首页', path: '/' }].concat(this.$route)
    },
    getBreadCrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && (first.name !== '恩大施福生产管控' && first.name !== '')) {
        matched = [{ name: '首页', path: '/' }].concat(matched)
      }
      this.data = matched
      // console.log(matched)
    }
  },
  watch: {
    $route() {
      this.getBreadCrumb()
    }
  }
}
</script>

<style>
</style>
