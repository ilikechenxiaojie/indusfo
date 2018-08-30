<template>
  <el-dialog class="update-table-for-recheck" title="修改信息" :visible.sync="dialogVisible" width="35%">
    <el-form :model="data" ref="form" style="width: 80%;" size="small" label-width="100px">
      <!-- <transition name="fade">
        <el-alert v-show="error" :closable="false" :title="test" type="error" center show-icon style="margin-bottom: 20px;" />
      </transition> -->
      <el-form-item label="原材料编号:" prop="singleNum">
        <el-input v-model="data.singleNum"></el-input>
      </el-form-item>
      <el-form-item label="品名材质:" prop="material">
        <el-input v-model="data.material"></el-input>
      </el-form-item>
      <el-form-item label="类型:" prop="type">
        <el-input v-model="data.type"></el-input>
      </el-form-item>
      <el-form-item label="代表验收产品:" prop="prod">
        <el-input v-model="data.prod"></el-input>
      </el-form-item>
      <el-form-item label="检测方法:" prop="ways">
        <el-input v-model="data.ways"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="emitCancel">取 消</el-button>
      <el-button type="primary" @click="emitConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'UpdateTableForRecheck',
  props: {
    data: {
      type: Object,
      default() {
        return {
          id: -1,
          singleNum: '',
          material: '',
          type: '',
          prod: '',
          ways: ''
        }
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
      error: false
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
      console.log(newVal)
      this.dialogVisible = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
