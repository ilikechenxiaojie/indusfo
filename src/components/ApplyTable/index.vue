<template>
  <el-table :data="curList" v-loading="loading" element-loading-text="给我一点时间" highlight-current-row border style="width: 100%">
    <el-table-column type="index">
    </el-table-column>
    <el-table-column property="title" label="标题">
    </el-table-column>
    <el-table-column property="content" label="内容">
    </el-table-column>
    <el-table-column property="author" label="作者">
    </el-table-column>
    <el-table-column property="date" label="日期">
    </el-table-column>
    <el-table-column property="modified" label="修改日期">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    curList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style>
td {
  background: #fff;
}
</style>
