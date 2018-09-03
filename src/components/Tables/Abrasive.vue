<template>
  <div class="informs">
    <el-card class="informs-card">
      <!-- <div slot="header" class="clearfix" style="height: 2.4rem;">
        <span style="float: left; text-align: left; width:30%; color:#bbb; font-size: 0.8rem;">
          <i class="el-icon-info"></i>&nbsp;&nbsp;磨具资料
          <br>
          用于维护需要系统管控的磨具信息
          <hr style=" margin: 0.6rem 0;">
        </span>
      </div> -->
      <div class="btn-more" style="float: left; margin-bottom: 1rem">
        <el-button size="small" @click="showAbrasiveDialog">新增</el-button>
        <el-button size="small">编辑</el-button>
        <el-button size="small">删除</el-button>
        <el-button size="small">停用</el-button>
        <el-button size="small">复制</el-button>
        <el-button size="small">导入</el-button>
        <el-button size="small">导出</el-button>
        <el-button size="small">审核</el-button>
        <el-button size="small">高级查询</el-button>
        <span>
          <el-button size="small" type="primary" plain  @click="showAbrasiveStatusDialog">组合</el-button>
          <el-button size="small" type="success" plain>分解</el-button>
          <el-button size="small" type="primary">出库</el-button>
          <el-button size="small" type="success">入库</el-button>
          <el-button size="small" type="warning">维修</el-button>
          <el-button size="small" type="danger">报废</el-button>
        </span>
      </div>
      <span style="float: right">
        <search-button :placeholder="placeholder"/>
      </span>
      <el-table :data="informs" style="width: 100%;" v-loading="loading" element-loading-text="给我一点时间" border @selection-change="handleSelectionChange" :header-cell-style="headerStyle">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" align="center" sortable></el-table-column>
        <el-table-column prop="singleNum" label="磨具编号" align="center"></el-table-column>
        <el-table-column prop="material" label="规格型号" align="center"></el-table-column>
        <el-table-column prop="type" label="单位" align="center"></el-table-column>
        <el-table-column prop="type" label="类型" align="center"></el-table-column>
        <el-table-column prop="prod" label="使用寿命" align="center"></el-table-column>
        <el-table-column prop="prod" label="使用次数" align="center"></el-table-column>
        <el-table-column prop="type" label="进厂时间" align="center"></el-table-column>
        <el-table-column prop="ways" label="说明" align="center">
          <template slot-scope="scope">
            <a @click.prevent="showThisTableDetail(scope.row)" style="color: green;">查看详情 &gt;</a>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <a @click.prevent="testA" style="color: green;">{{scope.row.status}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="planEndTime" label="操作" align="center">
          <template slot-scope="scope">
            <span><i class="el-icon-edit" @click.prevent="detailHandle(scope.row)"></i></span>
            <span><i class="el-icon-edit-outline" @click.prevent="showUpdateDialog(scope.row)"></i></span>
            <span><i class="el-icon-delete" @click.prevent="removeHandle(scope.row)"></i></span>
            <span><i class="el-icon-document" @click.prevent="detailHandle(scope.row)"></i></span>
          </template>
        </el-table-column>
      </el-table>
      <div class="clearfix">
        <span style="float: left; margin-bottom: 1rem">
          <el-select v-model="label" @change="changePageSize">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </span>
        <span><i class="el-icon-fa-info-circle"></i><b>当前第{{informPage}}页,共{{pages}}页,共{{total}}条数据</b></span>
        <el-button-group style="float: right;">
          <el-button plain icon="el-icon-arrow-left" size="small" @click="prevPage" :disabled="prevBtnDisabled">上一页</el-button><!-- ref="prevBtn" :disabled="prevBtnDisabled" -->
          <template v-for="(item, index) in pages" v-if="pages < 5">
            <el-badge class="bage-item" hidden :key="index">
              <el-button :type="isActive(index + 1) ? 'primary' : ''" plain  size="small" @click="pageGoTo(index + 1)">{{item}}</el-button>
            </el-badge>
          </template>
          <el-button plain size="small" @click="nextPage" :disabled="nextBtnDisabled">下一页&nbsp;&nbsp;<i class="el-icon-arrow-right"></i></el-button><!-- ref="nextBtn" :disabled="nextBtnDisabled" -->
          <template v-if="pages > 5" class="test">
            <el-input v-model="informPage" placeholder="跳转至第几页"></el-input>
          </template>
        </el-button-group>
      </div>
      <!-- <page-button :loading="loading" :pages="pages" :data="informs" :formPage="informPage" :pageSize="parseInt(pageSize)" @pageChanged="_fetchInformByPage"/> -->
    </el-card>
    <update-table-for-abrasive :data="abrasiveTemp" :visible="abrasiveVisible" @cancel="abrasiveDialog" @confirm="abrasiveUpdate"/>
    <status-table-for-abrasive :data="abrasiveStatusTemp" :visible="abrasiveStatusVisible" @cancel="abrasiveStatusDialog" @confirm="abrasiveStatusUpdate" />
  </div>
</template>
<script>
import { fetchInformByPage } from '@/api/inform/admin'
import SearchButton from '@/components/Buttons/SearchButton'
import UpdateTableForAbrasive from '@/components/Dialog/UpdateTableForAbrasive'
import StatusTableForAbrasive from '@/components/Dialog/StatusTableForAbrasive'
import PageButton from '@/components/PageButton'
const flag = false
export default {
  props: {
    headerStyle: Function
  },
  data() {
    return {
      placeholder: '请输入磨具编码或者型号',
      loading: true,
      // 表单分页控制
      informs: [],
      // 当前页
      informPage: 1,
      // 页大小
      pageSize: 6,
      // 按钮
      prevBtnDisabled: true,
      nextBtnDisabled: false,
      // 总页数
      pages: 0,
      // 总共多少条数据
      total: 0,
      // flag: false
      // 复选框
      selected: [],
      // 下拉选择框
      options: [
        {
          value: 15,
          label: '每行15条数据'
        },
        {
          value: 10,
          label: '每行10条数据'
        },
        {
          value: 6,
          label: '每行6条数据'
        }
      ],
      label: '每行6条数据',
      // 子组件可见?
      visible: false,
      abrasiveVisible: false,
      abrasiveStatusVisible: false,
      // 子组件数据
      temp: {},
      abrasiveTemp: [],
      abrasiveStatusTemp: []
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
            this.informs = [
              {
                id: 0,
                singleNum: 1,
                abrasive: 2,
                type: '我也不知道',
                prod: 1111,
                ways: '不知道',
                status: '启用  '
              }
            ].concat(this.informs)
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
    // 子组件传数据
    showUpdateDialog(data) {
      this.temp = data
      this.toggleDialog()
    },
    showAbrasiveDialog() {
      this.abrasiveTemp = this.informs
      this.abrasiveDialog()
    },
    showAbrasiveStatusDialog() {
      this.abrasiveStatusTemp = this.informs
      this.abrasiveStatusDialog()
    },
    // 子组件显示
    abrasiveDialog() {
      this.abrasiveVisible = !this.abrasiveVisible
    },
    abrasiveStatusDialog() {
      this.abrasiveStatusVisible = !this.abrasiveStatusVisible
    },
    toggleDialog() {
      this.visible = !this.visible
    },
    // 子组件更新数据按钮
    handleUpdate() {
      this.toggleDialog()
      // 更新数据
    },
    abrasiveUpdate() {
      this.abrasiveDialog()
    },
    abrasiveStatusUpdate() {
      this.abrasiveStatusDialog()
    },
    // 操作测试
    detailHandle(data) {
      console.log(data)
      // this.$router.push()
    },
    testA() {
      console.log('aaa')
    },
    showThisTableDetail(data) {
      this.$router.push(`/informs/detail/${data.id}`)
    },
    removeHandle(data) {
      // console.log(data)
      this.$confirm('此操作将删除该行数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.informs = this.informs.filter(item => item.id !== data.id)
          this.$message({
            type: 'success',
            message: '删除成功!',
            duration: 1000
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration: 1000
          })
        })
    },
    changePageSize(newPageSize) {
      this.pageSize = newPageSize
    },
    // 页数变化
    prevPage() {
      if (this.selected.length !== 0) {
        this.$message({
          message: '请优先操作复选框',
          type: 'warning',
          duration: 1000
        })
      } else {
        this.informPage = Math.max(1, --this.informPage)
      }
    },
    nextPage() {
      if (this.selected.length !== 0) {
        this.$message({
          message: '请优先操作复选框',
          type: 'warning',
          duration: 1000
        })
      } else {
        this.informPage++
        this.informPage =
          this.informPage > this.pages ? this.pages : this.informPage
      }
      // console.log(this.informPage)
    },
    pageGoTo(newPage) {
      this.informPage = newPage
    },
    isActive(page) {
      return page === this.informPage
    },
    // 设置表头背景
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#387bb2'
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
    PageButton,
    SearchButton,
    /* UpdateTableForRecheck,
    UpdateTableForMaterial */
    UpdateTableForAbrasive,
    StatusTableForAbrasive
  }
}
</script>
<style lang="scss">
body .el-table th.gutter {
  display: table-cell !important;
}
.clearfix {
  margin-top: 1rem;
}
.bage-item {
  float: left;
}
.el-button-group {
  position: relative;
  .el-input {
    position: absolute;
    left: -100%;
    top: 0;
    width: 80px;
  }
}
.informs {
  .btn-more {
    span {
      .el-button {
        margin-left: 10px;
      }
    }
  }
}
</style>
<style scoped>
.search-btn .input-item {
  float: left;
}
.el-button {
  margin-left: 0px;
  float: left;
}
</style>
