<template>
  <div class="prod-three">
    <canvas id="myCanvas" class="myCanvas"></canvas>
    <!-- <canvas /> -->
  </div>
</template>

<script>
import { Moon, Stars, Meteor } from '@/utils/canvas'
export default {
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      ctx: '',
      meteors: [],
      count: 0,
      stars: '',
      moon: ''
    }
  },
  mounted() {
    this._initCanvas()
    // 流星
    this.meteorGenerator()
    this.frame()
  },
  methods: {
    _initCanvas() {
      let myCanvas = document.getElementById('myCanvas')
      this.ctx = myCanvas.getContext('2d')
      myCanvas.width = this.width
      myCanvas.height = this.height
      this.ctx.fillStyle = '#aaa'
      this.ctx.fillRect(0, 0, this.width, this.height)
      this.moon = new Moon(this.ctx, this.width, this.height)
      this.stars = new Stars(this.ctx, this.width, this.height, 400)
    },
    meteorGenerator() {
      // x位置偏移，以免经过月亮
      let x = Math.random() * this.width + 800
      // console.log(x)
      this.meteors.push(new Meteor(this.ctx, x, this.height))
      // console.log(this.meteors)
      // 每隔随机时间，生成新流星
      setTimeout(() => {
        this.meteorGenerator()
      }, Math.random() * 2000)
    },
    frame() {
      this.count++
      this.count % 10 === 0 && this.stars.shine()
      this.moon.draw()
      this.stars.draw()
      this.meteors.forEach((meteor, index, arr) => {
        // 如果流星离开视野之内，销毁流星实例，回收内存
        if (meteor.flow()) {
          meteor.draw()
        } else {
          arr.splice(index, 1)
        }
      })
      requestAnimationFrame(this.frame)
    }
  }
}
</script>

<style>
</style>
