<template>
  <el-dialog class="update-table-for-supplier" title="新增设备资料" :visible.sync="dialogVisible" width="60%">
    <div class="cust-rows" style="margin-top: 6px; height: 60px; width: 100%;">
      <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 30%; float: left;">
        <template slot="prepend">&nbsp;设备编码&nbsp;&nbsp;</template>
      </el-input>
      <div style="width: 66%; float: left; margin-left:2%;">
        <span style="width: 65px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;padding: 13px 20px;">
          设备类型
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 30%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 48%; float: left; margin-left: 18px;">
          <template slot="prepend">&nbsp;&nbsp;&nbsp;型&nbsp;&nbsp;&nbsp;&nbsp;号&nbsp;&nbsp;</template>
        </el-input>
      </div>
    </div>
    <div class="cust-rows" style="margin-top: 6px; height: 60px; width: 100%;">
      <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 30%; float: left;">
        <template slot="prepend">&nbsp;进厂时间&nbsp;&nbsp;</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 66%; float: left; margin-left:2%;">
        <template slot="prepend">&nbsp;&nbsp;&nbsp;厂&nbsp;&nbsp;&nbsp;&nbsp;家&nbsp;&nbsp;&nbsp;</template>
      </el-input>
    </div>
    <div class="cust-rows" style="margin-top: 6px; height: 60px; width: 100%;">
      <div style="width: 30%; float: left;" class="own-defined-select">
        <span class="select-before" style="width: 65px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px">
          &nbsp;所属工序&nbsp;
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 59%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="width: 66%; float: left; margin-left:2%;" class="own-defined-select">
        <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 48%; float: left;">
          <template slot="prepend">&nbsp;存放地点&nbsp;&nbsp;</template>
        </el-input>
        <span class="select-before" style="margin-left: 18px; width: 65px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;">
          负责人
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 30%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="cust-rows" style="margin-top: 6px; height: 60px; width: 100%;">
      <div style="width: 30%; float: left;" class="own-defined-select">
        <span class="select-before" style="width: 65px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;">
          &nbsp;设备状态&nbsp;
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 59%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="width: 66%; float: left; margin-left:2%;" class="own-defined-select">
        <span class="select-before" style="width: 65px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;">
          品鉴仪器
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 81%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
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
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value4: ''
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
  .update-table-for-supplier {
    width: 100%;
    .cust-rows {
      width: 100%;
      .first-col-row {
        float: left;
        width: 40%;
      }
      .sec-col-row {
        float: left;
      }
    }
  }
</style>
