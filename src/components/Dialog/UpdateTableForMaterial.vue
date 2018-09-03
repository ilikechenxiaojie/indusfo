<template>
  <el-dialog class="update-table-for-material" title="新增原材料资料" :visible.sync="dialogVisible" width="75%">
    <!-- <div style="width: 100%; height: 40px; margin: 10px 0; background: #409EFF;"></div> -->
    <div class="select-group">
      <div class="cust-rows" style="width: 100%; height: 60px;">
        <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 23%; float: left; margin-left:1%;">
          <template slot="prepend">原材料编号</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 20%; float: left; margin-left:1%;">
          <template slot="prepend">品名/材质</template>
        </el-input>
        <div style="width: 50%; float: left; margin-left:1%;" class="own-defined-select">
          <span class="select-before" style="width: 90px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;">
            代表验收产品
          </span>
          <el-select v-model="value" clearable placeholder="请选择" style="float:left; width: 25%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span style="margin-left: 20px; width: 60px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;padding: 13px 20px;">
            企业性质
          </span>
          <el-select v-model="value" clearable placeholder="请选择" style="float:left; width: 25%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="cust-rows" style="width: 100%; height: 60px;">
        <div style="width: 23%; float: left; margin-left:1%;" class="own-defined-select">
          <span class="select-before" style=" width: 70px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;">
            检查方案
          </span>
          <el-select v-model="value" clearable placeholder="请选择" style="float:left; width: 55%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 69%; float: left; margin-left: 1%; ">
          <template slot="prepend">&nbsp;&nbsp;&nbsp;说&nbsp;&nbsp;明&nbsp;&nbsp;&nbsp;</template>
        </el-input>
      </div>
    </div>
    <div class="icon-info">
      <span style="width:100px; height:40px; background: #409EFF; color: #fff; margin-left:0; border-radius: 6px 6px 0 0;">检测目标</span>
      <span><i class="el-icon-edit"></i></span>
      <span><i class="el-icon-edit-outline"></i></span>
      <span><i class="el-icon-delete"></i></span>
      <span><i class="el-icon-document"></i></span>
    </div>
    <el-table :data="data" style="width: 100%;" border>
      <el-table-column prop="id" label="序号" align="center" sortable></el-table-column>
      <el-table-column prop="project" label="检测项目" align="center"></el-table-column>
      <el-table-column prop="max" label="规格下限" align="center"></el-table-column>
      <el-table-column prop="mid" label="规格中心值" align="center"></el-table-column>
      <el-table-column prop="min" label="规格上限" align="center"></el-table-column>
      <el-table-column prop="sizeUnit" label="规格单位" align="center"></el-table-column>
      <el-table-column prop="ways" label="检测方法" align="center"></el-table-column>
      <el-table-column prop="conditions" label="规格条件" align="center"></el-table-column>
      <el-table-column prop="groups" label="规格检测分组" align="center"></el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="emitConfirm">保 存</el-button>
      <el-button type="primary" class="sub-add" @click="emitCancel">保存并新增</el-button>
      <el-button @click="emitCancel">取 消</el-button>
    </span>
  </el-dialog>
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
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: this.visible,
      input: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      value: ''
    }
  },
  methods: {
    emitCancel() {
      this.dialogVisible = false
      this.$emit('cancel')
    },
    emitConfirm() {
      this.$emit('confirm', this.user)
    }
  },
  watch: {
    visible(newVal) {
      this.dialogVisible = newVal
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/Dialog/index.scss';
// 开始
@import '@/assets/css/Dialog/Material.scss';
</style>
