<template>
  <el-dialog class="update-table-for-abrasive" title="新增磨具资料" :visible.sync="dialogVisible" width="60%">
    <div class="input-groups-abr">
      <el-input placeholder="请输入内容" style="float:left; width: 25%;">
        <template slot="prepend">磨具编号</template>
      </el-input>
      <span class="span-select">
        <span style="width:28%; height: 40px; background: #f5f7fa; line-height:40px; border-radius: 6px 0 0 6px; float: left;">磨具类型</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </span>
      <el-input placeholder="请输入内容" style="float:left; width: 25%;">
        <template slot="prepend">规格型号</template>
      </el-input>
    </div>
    <div class="input-groups-abr">
      <el-input placeholder="请输入内容" style="float:left; width: 25%;">
        <template slot="prepend">进厂时间</template>
      </el-input>
      <span>
        <el-input placeholder="请输入内容" style="float:left; width: 40%; margin-left: 5%;">
          <template slot="prepend">使用寿命</template>
        </el-input>
      </span>
      <el-input placeholder="请输入内容" style="float:right; width: 25%; margin-left: 5%;">
        <template slot="prepend">使用次数</template>
      </el-input>
    </div>
    <div class="input-groups-abr last">
      <span class="span-select">
        <span style="width:40%; height: 40px; background: #f5f7fa; line-height:40px; border-radius: 6px 0 0 6px; float: left;">所属工序</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
          </el-option>
        </el-select>
      </span>
      <el-input placeholder="请输入内容" style="float:left; width: 40%;" v-model="inputPlace">
        <template slot="prepend">存放地点</template>
      </el-input>
      <span class="span-select" style="float:right; margin:0;">
        <span style="width:40%; height: 40px; background: #f5f7fa;line-height:40px; border-radius: 6px 0 0 6px; float: left;">负责人</span>
        <el-select v-model="value" placeholder="代表验收产品">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </span>
    </div>
    <el-input placeholder="请输入内容" style="float:left; width: 100%; margin: 2% 0;" v-model="inputPlace">
        <template slot="prepend">说明</template>
      </el-input>
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
      options: [
        {
          value: '选项1',
          label: '类型一'
        },
        {
          value: '选项2',
          label: '类型二'
        }
      ],
      inputPlace: '不知道',
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
.update-table-for-abrasive {
  .input-groups-abr {
    width: 100%;
    float: left;
    margin: 2% 0;
    .span-select {
      float: left;
      width: 40%;
      margin: 0 5% 0 5%;
      .el-select {
        width: 72%;
        .el-input {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
  .last {
    width: 100%;
    float: left;
    margin: 2% 0;
    .span-select {
      float: left;
      width: 25%;
      margin: 0 5% 0 0%;
      .el-select {
        width: 60%;
        .el-input {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
