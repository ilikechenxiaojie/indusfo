<template>
  <div class="search-btn">
    <el-input  :placeholder="placeholder" suffix-icon="el-icon-edit" style="width: 15rem;" class="filter-item input-item">
    </el-input>
    <el-button class="filter-item" type="primary" icon="el-icon-fa-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
