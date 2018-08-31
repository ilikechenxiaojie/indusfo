<template>
  <el-dialog class="update-table-for-cust-info" title="新增客户资料" :visible.sync="dialogVisible" width="60%">
    <div class="cust-rows" style="width: 100%; height: 60px;">
      <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 30%; float: left;">
        <template slot="prepend">客户编码</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 66%; float: left; margin-left:2%;">
        <template slot="prepend">客户名称</template>
      </el-input>
    </div>
    <div class="cust-rows" style="margin-top: 10px; height: 60px; width: 100%;">
      <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 30%; float: left;">
        <template slot="prepend">&nbsp;&nbsp;联系人&nbsp;&nbsp;</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 66%; float: left; margin-left:2%;">
        <template slot="prepend">&nbsp;地&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;&nbsp;</template>
      </el-input>
    </div>
    <div class="cust-rows" style="margin-top: 10px; height: 60px; width: 100%;">
      <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 30%; float: left;">
        <template slot="prepend">联系方式</template>
      </el-input>
      <div style="width: 66%; float: left; margin-left:2%;">
        <span style="width: 56px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;padding: 12px 20px;">
          企业规模
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 30%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span style="margin-left: 30px; width: 56px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;padding: 12px 20px;">
          企业性质
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
    <div class="cust-rows" style="margin-top: 10px; height: 60px; width: 100%;">
      <div style="width: 30%; float: left;">
        <span style="width: 56px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;padding: 12px 20px;">
          &nbsp;业务员&nbsp;
        </span>
        <el-select v-model="value4" clearable placeholder="请选择" style="float:left; width: 62%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="width: 66%; float: left; margin-left:2%;">
        <span style="width: 56px; float:left; background-color: #f5f7fa; color: #909399; border: 1px solid #dcdfe6; border-radius: 4px 0 0 4px;padding: 12px 20px;">
          评级
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
    <span slot="footer" class="dialog-footer">
      <el-button @click="emitCancel">取 消</el-button>
      <el-button type="primary" @click="emitConfirm">确 定</el-button>
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
  .update-table-for-cust-info {
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
