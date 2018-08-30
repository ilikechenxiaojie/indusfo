<template>
  <div class="canvas">
    <canvas id="myCanvas" class="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this._init()
  },
  methods: {
    _init() {
      let myCanvas = document.getElementById('myCanvas')
      let ctx = myCanvas.getContext('2d')
      let width = window.innerWidth
      let height = window.innerHeight
      myCanvas.width = width
      myCanvas.height = height
      ctx.fillStyle = '#0000ff'
      ctx.fillRect(20, 20, 150, 100)
      console.log(width, height)
      console.log('111')
    }
  }
}
</script>

<style>

</style>
