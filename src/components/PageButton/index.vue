<template>
  <div class="page-button">
    <el-button-group v-show="show">
      <el-button @click="emitPrevPage" :disabled="prevBtnDisabled" type="primary" plain icon="el-icon-arrow-left" size="small">上一页</el-button>
      <el-button @click="emitNextPage" :disabled="nextBtnDisabled" type="primary" plain size="small">下一页
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </el-button-group>
  </div>
</template>
<script>
const flag = false
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 6
    },
    formPage: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      curPage: this.formPage,
      nextBtnDisabled: false,
      prevBtnDisabled: true
    }
  },
  methods: {
    emitPrevPage() {
      this.curPage = Math.max(1, --this.curPage)
      // this.$emit('prevPage', this.curPage)
      this.emitPageChanged()
    },
    emitNextPage() {
      this.curPage++
      // this.$emit('nextPage', this.curPage)
      this.emitPageChanged()
    },
    emitPageChanged() {
      // console.log(this.curPage)
      this.$emit('pageChanged', {
        page: this.curPage
      })
    }
  },
  watch: {
    curPage(newVal) {
      // console.log(newVal)
      this.prevBtnDisabled = newVal > 1 ? flag : !flag
      this.nextBtnDisabled = newVal < this.pages ? flag : !flag
      // console.log(newVal)
    },
    pages(newVal) {
      this.prevBtnDisabled = this.curPage > 1 ? flag : !flag
      this.nextBtnDisabled = this.curPage < newVal ? flag : !flag
    }
  }
}
</script>
<style>
</style>
