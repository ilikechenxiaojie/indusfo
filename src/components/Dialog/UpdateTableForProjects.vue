<template>
  <el-dialog class="update-table-for-projects" title="新增产品资料" :visible.sync="dialogVisible" width="80%">
    <div class="content" style=" width: 100%; height: 600px;">
      <div class="header" style=" width: 100%;">
        <div class="left" style="width: 80%; float: left;">
          <div class="cust-rows" style="width: 100%; height: 60px;">
            <div style="width: 23%; float: left; margin-left:1%;" class="own-defined-select">
              <span class="select-before" style="width: 40px;">
                客户
              </span>
              <el-select v-model="value" clearable placeholder="请选择" style="float:left; width: 62%;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 20%; float: left; margin-left:1%;">
              <template slot="prepend">客户型号</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 20%; float: left; margin-left:1%;">
              <template slot="prepend">产品编码</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 30%; float: left; margin-left:1%;">
              <template slot="prepend">产品名称</template>
            </el-input>
          </div>
          <div class="cust-rows" style="width: 100%; height: 60px;">
            <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 23%; float: left; margin-left:1%;">
              <template slot="prepend">规格信号</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 20%; float: left; margin-left:1%;">
              <template slot="prepend">毛坯重量</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="input" class="sec-col-row" style="width: 20%; float: left; margin-left:1%;">
              <template slot="prepend">成品重量</template>
            </el-input>
            <div style="width: 30%; float: left; margin-left:1%;" class="own-defined-select">
              <span class="select-before">
                工艺版本
              </span>
              <el-select v-model="value" clearable placeholder="请选择" style="float:left; width: 61%;">
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
              <span class="select-before" style="width: 40px;">
                材质
              </span>
              <el-select v-model="value" clearable placeholder="请选择" style="float:left; width: 61%;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div style="width: 20%; float: left; margin-left:1%;" class="own-defined-select">
              <span class="select-before" style="width: 40px;">
                单位
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
            <el-input placeholder="请输入内容" v-model="input" class="first-col-row" style="width: 51%; float: left; margin-left:1%;">
              <template slot="prepend">说明</template>
            </el-input>
          </div>
        </div>
        <div class="right" style="float: left; margin-left: 1%; height: 160px; width: 18%; background: yellow;">

        </div>
      </div>
      <div class="clear" style="clear: both;"></div>
      <div class="tables">
        <div class="left" style=" width: 14%;   float: left; height: 300px;">
          <el-table :data="data" style="width: 100%;" v-loading="loading" element-loading-text="给我一点时间" border>
            <el-table-column prop="id" label="序号" align="center"></el-table-column>
            <el-table-column prop="singleNum" label="工序" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="right" style=" width: 85%; float: right; height: 300px;">
          <el-tabs v-model="active" type="card" @tab-click="handleClick">
            <el-tab-pane label="工艺目标" name="targets">
              <el-table :data="data" style="width: 100%;" v-loading="loading" element-loading-text="给我一点时间" border>
                <el-table-column prop="id" label="序号" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="检测项目" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格下限" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格中心值" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格上限" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格单位" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控下线" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控中心值" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控上限" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控单位" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="检测方法" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="检测分组" align="center"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="工艺条件" name="conditions">
              <el-table :data="data" style="width: 100%;" v-loading="loading" element-loading-text="给我一点时间" border>
                <el-table-column prop="id" label="序号" align="center"></el-table-column>
                <el-table-column prop="id" label="检测项目" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格下限" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格中心值" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格上限" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="规格单位" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控下线" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控中心值" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控上限" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="内控单位" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="检测方法" align="center"></el-table-column>
                <el-table-column prop="singleNum" label="检测分组" align="center"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="检测条件" name="con-for-check">
              <el-table :data="test" style="width: 100%;" v-loading="loading" element-loading-text="给我一点时间" border>
                <el-table-column prop="id" label="测试频率( KHz )" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
                <el-table-column prop="singleNum" label="测试电压( V )" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
                <el-table-column prop="singleNum" label="测试电流( A )" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
                <el-table-column prop="singleNum" label="磁场强度( mT )" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
                <el-table-column prop="singleNum" label="烧线匝数( 圈 )" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
                <el-table-column prop="singleNum" label="温度( ℃ )" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
                <el-table-column prop="singleNum" label="恒电流" align="center">
                  <template slot-scope="scope">
                    <a style="color: green;">请输入</a>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
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
      active: 'targets',
      activeName: 'con-for-check',
      test: [{}]
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab.name)
    },
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

<style lang="scss">
@import '@/assets/css/Dialog/index.scss';
  .update-table-for-projects {
    .el-tabs__content {
      .el-table td, .el-table th {
        height: 20px;
        padding: 6px 0;
      }
      .el-table th.gutter {
        display: table-cell !important;
      }
    }
  }
</style>
