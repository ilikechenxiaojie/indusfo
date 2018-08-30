export class Moon {
  constructor(ctx, width, height) {
    this.ctx = ctx
    this.width = width
    this.height = height
  }
  draw() {
    let ctx = this.ctx
    let gradient = ctx.createRadialGradient(100, 100, 60, 200, 200, 600)
    // 月亮
    gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
    gradient.addColorStop(0.01, 'rgb(70,70,80)')
    gradient.addColorStop(0.2, 'rgb(40,40,50)')
    // moon
    gradient.addColorStop(0.4, 'rgb(20,20,30)')
    gradient.addColorStop(1, 'rgb(0,0,10)')
    ctx.save()
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, this.width, this.height)
    ctx.restore()
  }
}
export class Stars {
  constructor(ctx, width, height, num) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.stars = this.getStars(num)
  }
  getStars(num) {
    let stars = []
    while (num--) {
      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() + 0.3
      })
    }
    return stars
  }
  draw() {
    let ctx = this.ctx
    ctx.save()
    ctx.fillStyle = 'white'
    // star 是从stars里的一颗star 这里是function的参数
    this.stars.forEach(star => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI) // 画椭圆
      ctx.fill() // 填充色
    })
    ctx.restore()
  }
  shine() {
    this.stars = this.stars.map(star => {
      let sign = Math.random > 0.5 ? 1 : -1
      star.r += sign * 0.3
      if (star.r < 0) {
        star.r = -star.r
      } else if (star.r > 1) {
        star.r -= 0.2
      }
      return star
    })
  }
}
export class Meteor {
  constructor(ctx, x, h) {
    this.ctx = ctx
    this.x = x
    this.h = h
    // 初始高度
    this.y = 0
    // 水平速度
    this.vx = -(4 + Math.random() * 4)
    // 垂直速度
    this.vy = -this.vx
    this.len = Math.random() * 300 + 500
  }
  flow() {
    // 判定流星出界
    if (this.x < -this.len || this.y > this.h + this.len) {
      return false
    }
    this.x += this.vx
    this.y += this.vy
    return true
  }
  draw() {
    let ctx = this.ctx
    let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.len)
    const PI = Math.PI
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.save()
    ctx.fillStyle = gradient
    ctx.beginPath()
    // 流星头，二分之一圆
    ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4)
    // 绘制流星尾，三角形
    ctx.lineTo(this.x + this.len, this.y - this.len)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
}
