<template>
  <el-dialog class="status-table-for-abrasive" title="组合/分解" :visible.sync="dialogVisible" width="80%">
    <div class="table-group" style="height:440px;">
      <div style="float:left; width: 42%; height:440px; margin-left: 2%;">
        <span style="float:left; width: 14%; height: 40px; line-height: 40px; background: rgb(67, 142, 184); border-radius: 4px 4px 0 0; color: #fff;">磨具</span>
        <el-table :data="data"  v-loading="loading" element-loading-text="给我一点时间" border>
          <el-table-column :prop="abrasive.prop" :label="abrasive.label" align="center" v-for="abrasive in abrasives" :key="abrasive.prop"></el-table-column>
        </el-table>
      </div>
      <div style="float:left; width: 10%; height:400px; text-align: center; line-height: 360px;">
        <div style="width:100%;height:40px; font-size: 2rem;"><i class="el-icon-d-arrow-left" style="cursor: pointer;"></i></div>
        <div style="width:100%;height:40px; font-size: 2rem;"><i class="el-icon-d-arrow-right" style="cursor: pointer;"></i></div>
        <div style="width:100%;height:40px; font-size: 2rem;"><i class="el-icon-refresh" style="cursor: pointer;"></i></div>
      </div>
      <div style="height:400px; width: 42%; float: left;">
        <span style="float:left; width: 14%; height: 40px; line-height: 40px; background: rgb(67, 142, 184); border-radius: 4px 4px 0 0; color: #fff;">磨具</span>
        <el-table :data="data" style="" v-loading="loading" element-loading-text="给我一点时间" border>
          <el-table-column :prop="abrasive.prop" :label="abrasive.label" align="center" v-for="abrasive in abrasives" :key="abrasive.prop"></el-table-column>
        </el-table>
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
      loading: false,
      abrasives: [
        {
          prop: 'id',
          label: '序号'
        },
        {
          prop: 'singleNum',
          label: '磨具编号'
        },
        {
          prop: 'material',
          label: '规格型号'
        },
        {
          prop: 'prod',
          label: '使用寿命'
        },
        {
          prop: 'used',
          label: '使用次数'
        },
        {
          prop: 'typed',
          label: '类型'
        }
      ]
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

<style>
</style>
