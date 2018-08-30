<template>
  <div class="apply">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <el-tabs tab-position="left" :value="curTabType" @tab-click="handleTabClick">
          <el-tab-pane name="all" label="全部">
            <apply-table :curList="curList" :loading="loading"/>
          </el-tab-pane>
          <el-tab-pane name="checking" label="审批中">
            <!-- <apply-table :curList="curList" :loading="loading" :fromIndex="fromIndex" /> --> {{status}}
          </el-tab-pane>
          <el-tab-pane name="rejected" label="未通过">
            <!-- <apply-table :curList="curList" :loading="loading" :fromIndex="fromIndex" /> -->{{status}}
          </el-tab-pane>
          <el-tab-pane name="passed" label="已通过">
            <!-- <apply-table :curList="curList" :loading="loading" :fromIndex="fromIndex" /> -->{{status}}
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <apply-table :curList="curList" :loading="loading"/>
      </el-tab-pane>
    </el-tabs>
    <page-button :show="!loading" :pageSize="pageSize" :data="curList" @pageChanged="handlePageChanged" :formPage="curPage" :pages="pages"/>
  </div>
</template>
<script>
import ApplyTable from '@/components/ApplyTable'
import PageButton from '@/components/PageButton'
import { fetchSelfAllStatus } from '@/api/club/appStatus'
const flag = false
export default {
  data() {
    return {
      activeName: 'first',
      curTabType: 'all',
      curList: [],
      loading: false,
      curPage: 1,
      pageSize: 6,
      pages: 0,
      status: 0
    }
  },
  created() {
    this._fetchAll()
  },
  methods: {
    handleClick(tab) {
      this.loading = tab.name === 'second' ? !flag : flag
      // console.log(tab)
    },
    handleTabClick(tab) {
      this.curTabType = tab.name
      this.curPage = 0
      this.curTabType === 'all' ? this._fetchAll() : this._fetchApply()
    },
    // 分页切换
    handlePageChanged({ page }) {
      this.curPage = page
      this.curTabType === 'all' ? this._fetchAll() : this._fetchApply()
    },
    _fetchAll() {
      this.loading = true
      fetchSelfAllStatus(this.curPage, this.pageSize).then(res => {
        // console.log(res)
        this.curList = res.data.list
        this.pages = res.data.pages
        this.loading = false
      })
    },
    _fetchApply() {
      this.loading = true
      switch (this.curTabType) {
        case 'checking':
          this.status = 1
          break
        case 'rejected':
          this.status = -1
          break
        case 'passed':
          this.status = 2
          break
        default:
          this.status = 0
          break
      }
      console.log(this.status)
    }
  },
  components: {
    ApplyTable,
    PageButton
  }
}
</script>
<style>
</style>
