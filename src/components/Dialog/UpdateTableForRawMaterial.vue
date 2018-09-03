<template>
  <el-dialog class="update-table-for-raw-material" title="新增原材料资料" :visible.sync="dialogVisible" width="80%">
    <div class="cust-rows" style="margin-top: 6px; height: 60px; width: 100%;">
      <div style="width: 30%; float: left;" class="own-defined-select">
        <span class="select-before">
          品名/材质
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
        <span class="select-before">
          供应商
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
      <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 30%; float: left;">
        <template slot="prepend">&nbsp;&nbsp;&nbsp;批&nbsp;&nbsp;&nbsp;&nbsp;号&nbsp;&nbsp;</template>
      </el-input>
      <div style="width: 66%; float: left; margin-left:2%;" class="own-defined-select">
        <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 48%; float: left;">
          <template slot="prepend">&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;量&nbsp;&nbsp;</template>
        </el-input>
        <span class="select-before" style="margin-left: 18px;">
          单&nbsp;&nbsp;位
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
      <div style="width: 100%; float: left;">
        <span>代表验收产品: {{symbol}}</span>
        <span>代表验收产品: {{symbol}}</span>
      </div>
    </div>
    <div class="cust-rows" style="margin-top: 6px;  width: 100%;">
      <el-table :data="data" style="width: 100%;" border>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" align="center" sortable></el-table-column>
        <el-table-column prop="singleNum" label="供应商编码" align="center"></el-table-column>
        <el-table-column prop="material" label="供应商名称" align="center"></el-table-column>
        <el-table-column prop="type" label="地址" align="center"></el-table-column>
        <el-table-column prop="prod" label="联系方式" align="center"></el-table-column>
        <el-table-column prop="prod" label="企业规模" align="center"></el-table-column>
        <el-table-column prop="prod" label="企业性质" align="center"></el-table-column>
        <el-table-column prop="prod" label="联系人" align="center"></el-table-column>
        <el-table-column prop="prod" label="环评情况" align="center"></el-table-column>
        <el-table-column prop="prod" label="安评情况" align="center"></el-table-column>
        <el-table-column prop="prod" label="评级" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <a @click.prevent="testA" style="color: green;">{{scope.row.status}}</a>
          </template>
        </el-table-column>
      </el-table>
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
    data: {
      type: Array,
      default() { return [] }
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
      symbol: 'xxx-xxxxx',
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
  .update-table-for-raw-material {
    width: 100%;
    height: 800px;
    .cust-rows {
      width: 100%;
      .first-col-row {
        float: left;
        width: 40%;
      }
      .sec-col-row {
        float: left;
      }
      .el-table__body {
        .el-table td, .el-table th {
          height: 20px;
          padding: 6px 0;
        }
      }
    }
  }
</style>
