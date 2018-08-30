<template>
  <el-dialog class="update-table-for-material" title="新增原材料资料" :visible.sync="dialogVisible" width="75%">
    <div class="select-group">
      <el-input placeholder="请输入内容">
        <template slot="prepend">原材料编号</template>
      </el-input>
      <el-input placeholder="请输入内容">
        <template slot="prepend">品名/材质</template>
      </el-input>
      &nbsp;代表验收产品: &nbsp;
      <el-select v-model="value" placeholder="代表验收产品">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      默认单位: &nbsp;
      <el-select v-model="value" placeholder="默认单位">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <br>
      <div class="next-select">
        <span class="span-select">
          检查方案: &nbsp;
          <el-select v-model="value" placeholder="检查方案">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span>
        <el-input placeholder="请输入内容" class="descrption">
          <template slot="prepend">说明</template>
        </el-input>
      </div>
    </div>
    <div class="icon-info">
      <span style="width:100px; height:40px; background: #aaa; margin-left:0; border-radius: 6px 6px 0 0;">检测目标</span>
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
      <el-button @click="emitCancel">取 消</el-button>
      <el-button type="primary" @click="emitConfirm">确 定</el-button>
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
  .select-group {
    position: relative;
    height: 120px;
    .el-input {
      width: 25%;
    }
    .el-select {
      display: inline-block;
      width: 15%;
      .el-input {
        width: 100%;
      }
      .el-input__inner {
        width: 100%;
      }
    }
    .next-select {
      float: left;
      margin: 2% 2% 2% 2%;
      width: 100%;
      .span-select {
        float: left;
        width: 26%;
        .el-select {
          width: 70%;
        }
      }
      .descrption {
        float: left;
        width: 70%;
      }
    }
  }
  .icon-info {
    width: 100%;
    background: yellow;
    line-height: 40px;
    span {
      float: left;
      margin-left: 20px;
      cursor: pointer;
    }
  }
</style>
