<template>
  <div class="informs">
    <el-card class="informs-card">
      <div slot="header" class="clearfix">
        <div style="width:100%; margin: 0 20px 20px 0;">
          <el-input v-model="pageSize" placeholder="一页多少行数据" maxlength="2" clearable max="20" min="5" size="10">
            <template slot="prepend">一页多少行数据</template>
          </el-input>
        </div>
        <span><i class="el-icon-fa-info-circle"></i><b>烧结计划看板</b></span>
        <el-button-group style="float: right;">
          <el-button plain icon="el-icon-arrow-left" size="mini" @click="prevPage" :disabled="prevBtnDisabled">上一页</el-button><!-- ref="prevBtn" :disabled="prevBtnDisabled" -->
          <el-button plain size="mini" @click="nextPage" :disabled="nextBtnDisabled">下一页&nbsp;&nbsp;<i class="el-icon-arrow-right"></i></el-button><!-- ref="nextBtn" :disabled="nextBtnDisabled" -->
        </el-button-group>
      </div>
      <el-table :data="informs" style="width: 100%;" v-loading="loading" element-loading-text="给我一点时间" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" align="center" sortable></el-table-column>
        <el-table-column prop="singleNum" label="计划单号" align="center"></el-table-column>
        <el-table-column prop="typeNum" label="型号" align="center"></el-table-column>
        <el-table-column prop="material" label="材质" align="center"></el-table-column>
        <el-table-column prop="planNum" label="计划数量" align="center"></el-table-column>
        <el-table-column prop="startTime" label="开始日期" sortable align="center"></el-table-column>
        <el-table-column prop="planEndTime" label="预计完工日期" sortable align="center"></el-table-column>
        <el-table-column prop="completedNum" label="已完成数量" align="center"></el-table-column>
        <el-table-column prop="windowStove" label="窗炉" align="center"></el-table-column>
        <el-table-column prop="unknow" label="什么材" align="center"></el-table-column>
        <el-table-column prop="CompletionRate" label="完成率" align="center"></el-table-column>
        <el-table-column prop="chargeMan" label="负责人" align="center"></el-table-column>
      </el-table>
      <!-- <el-button plain type="primary" size="mini">确认</el-button> -->
      <!-- {{selected}} -->
      当前第{{informPage}}页,共{{pages}}页,共{{total}}条数据
      <!-- <page-button :loading="loading" :pages="pages" :data="informs" :formPage="informPage" :pageSize="parseInt(pageSize)" @pageChanged="_fetchInformByPage"/> -->
    </el-card>
  </div>
</template>
<script>
import { fetchInformByPage } from '@/api/inform/admin'
import PageButton from '@/components/PageButton'
const flag = false
export default {
  //  @cell-mouse-enter="handleMouseEnter" @cell-mouse-leave="handleMouseLeave" :header-cell-style="headerStyle"
  /* props: {
    headerStyle: Function,
    handleMouseEnter: Function,
    handleMouseLeave: Function
  }, */
  data() {
    return {
      loading: true,
      informs: [],
      informPage: 1,
      pageSize: 6,
      prevBtnDisabled: true,
      nextBtnDisabled: false,
      // flag: false
      pages: 0,
      total: 0,
      selected: [],
      test: []
    }
  },
  created() {
    // 页面加载完成后 获取表格
    this._fetchInform()
  },
  methods: {
    // 获取表格
    _fetchInform() {
      this.loading = true
      // 获取数据 不操作或者获取数据
      if (this.pageSize === '' || this.pageSize === 'undefined') {
        this.loading = true
      } else {
        fetchInformByPage(this.informPage, this.pageSize)
          .then(res => {
            // console.log(res.data) success
            // informs赋值
            this.informs = res.data.list.sort((a, b) => {
              return a.id - b.id
            })
            // 强制类型转换,与子组件有关,若不用组件则无效
            // this.pageSize = parseInt(this.pageSize)
            // 获取总页数，具体看后端操作
            this.pages = res.data.pages
            this.total = res.data.total
            // 页数： 如果总页数大于该页数，显示该页数，否则显示总页数（即只存在一页的情况）
            this.informPage =
              this.pages > this.informPage ? this.informPage : this.pages
            // this.informPage < this.pages ? this.nextBtnDisabled = this.flag : this.nextBtnDisabled = !this.flag
            this.nextBtnDisabled = this.informPage < this.pages ? flag : !flag
            // console.log(this.informPage)
            // console.log(this.pages)
            this.loading = false
          })
          .catch(error => {
            Promise.reject(error)
          })
      }
    },
    // _fetchInformByPage ({ page }) {
    //   this.informPage = page
    //   this._fetchInform()
    // },
    // 页数变化
    prevPage() {
      this.informPage = Math.max(1, --this.informPage)
    },
    nextPage() {
      this.informPage++
      this.informPage =
        this.informPage > this.pages ? this.pages : this.informPage
      // console.log(this.informPage)
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: #387bb2'
      } else {
        return ''
      }
    },
    // 获取复选框选择行数据
    handleSelectionChange(val) {
      this.selected = val
    }
  },
  watch: {
    // informPage 发生改变，重新获取数据，判断页按钮是否可点击
    informPage(newPage) {
      this._fetchInform()
      this.prevBtnDisabled = newPage === 1
      // this.nextBtnDisabled = newPage === this.pages
    },
    pageSize(newSize) {
      // this.pageSize = newSize === '' || newSize === 'undefined' ? 5 : newSize
      this._fetchInform()
    }
  },
  components: {
    PageButton
  }
}
</script>
<style>
body .el-table th.gutter {
  display: table-cell !important;
}
</style>
