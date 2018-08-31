<template>
  <div class="search-btn">
    <el-input  :placeholder="placeholder" suffix-icon="el-icon-edit" style="width: 15rem; height: 20px;" class="filter-item input-item">
    </el-input>
    <el-button class="filter-item se-btn" type="primary" icon="el-icon-fa-search">搜索</el-button>
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

<style lang="scss">
  .search-btn {
    .el-input__inner {
      height: 30px;
      line-height: 30px;
    }
    .se-btn {
      padding: 8px 20px;
    }
  }
</style>
