<template>
  <div class="carousel">
    <div class="block">
      <span class="demonstration">Carousel</span>
      <el-carousel trigger="click" height="300px" :autoplay="false" @change="setActiveItem">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <img alt="" :src="item.url">{{item.name}}
          <transition name="fade">
            {{index}}
          </transition>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {'index': 1, 'name': '衣服', 'url': require('../../assets/logo.png')},
        {'index': 2, 'name': '鞋子', 'url': require('../../assets/logo.png')},
        {'index': 3, 'name': '裤子', 'url': require('../../assets/logo.png')},
        {'index': 4, 'name': '帽子', 'url': require('../../assets/logo.png')},
        {'index': 5, 'name': '床', 'url': require('../../assets/logo.png')}
      ]
    }
  },
  methods: {
    setActiveItem(index) {
      console.log(index)
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
