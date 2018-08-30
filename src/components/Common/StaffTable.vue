<template>
  <div class="staff-table">
    <el-table :data="data" v-loading="loading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%">
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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>
<style>
</style>
