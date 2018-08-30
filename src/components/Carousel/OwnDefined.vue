<template>
  <div class="own-defined" @mouseover="show = !show" @mouseout="show = !show">
    <div class="slideshow">
      <ul>
        <transition-group name="slide-fade" mode="out-in">
          <li v-for="(img, index) in imgArray" v-show="mark === index" :key="index">
            <a href="#">
              <img :src='img'>
            </a>
          </li>
        </transition-group>
      </ul>
    </div>
    <div class="slide-btn">
      <transition name="slide-fade">
        <div class="slide-btn-prev" @click="prev" v-if="show"><i class="el-icon-arrow-left"></i></div>
      </transition>
      <transition name="fade">
        <div class="slide-btn-next" @click="next" v-if="show"><i class="el-icon-arrow-right"></i></div>
      </transition>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{'active': mark === index}" :key="index" @click="change(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mark: 0,
      show: false,
      timer: '',
      height: 300,
      imgArray: [
        require('../../assets/Carousel/1.jpg'),
        require('../../assets/Carousel/2.jpg'),
        require('../../assets/Carousel/3.jpg'),
        require('../../assets/Carousel/4.jpg'),
        require('../../assets/Carousel/5.jpg')
      ]
    }
  },
  mounted() {
    this.isAutoPlay()
  },
  methods: {
    isAutoPlay() {
      // console.log(this.autoplay)
      if (this.autoplay) {
        this.start()
      }
    },
    // 页面
    autoPlay() {
      this.mark++
      this.mark = this.mark > 4 ? 0 : this.mark
    },
    start() {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    stop() {
      clearInterval(this.timer)
    },
    change(index) {
      // console.log(index)
      this.mark = index
    },
    prev() {
      this.mark--
      this.mark = this.mark < 0 ? 4 : this.mark
    },
    // 按钮
    next() {
      this.mark++
      this.mark = this.mark > 4 ? 0 : this.mark
    }
  },
  watch: {
    autoplay(val) {
      // console.log(val)
      val ? this.start() : this.stop()
    },
    mark(val) {
      // console.log(val)
      this.stop()
      this.timer = null
      val > 4 ? this.mark = 0 : this.mark = val
      val < 0 ? this.mark = 4 : this.mark = val
      this.start()
    }
  }
}
</script>

<style lang="scss" scoped>
  ul, li, ol {
    list-style: none;
  }
  .slide-fade-enter-active, .fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active, .fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
  .own-defined {
    width: 600px;
    height: 375px;
    margin: 0 auto;
    border: 1px solid #aaa;
    // overflow: hidden;
    position: relative;
    .slideshow {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      li {
        position: absolute;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .slide-btn {
      position: absolute;
      z-index: 100;
      height: 95%;
      width: 100%;
      top: 0;
      &-prev {
        position: absolute;
        top:50%;
        left: 2%;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: #fff;
        background: #000;
        opacity: 0.4;
        border-radius: 30px;
        text-align: center;
        line-height: 30px;
        float: left;
        cursor: pointer;
      }
      &-next {
        position: absolute;
        width: 30px;
        height: 30px;
        top:50%;
        right:2%;
        margin-right: 10px;
        color: #fff;
        background: #000;
        opacity: 0.4;
        border-radius: 30px;
        text-align: center;
        line-height: 30px;
        float: right;
        cursor: pointer;
      }
    }
    .bar {
      position: absolute;
      width: 30%;
      right: 20px;
      bottom: 2%;
      z-index: 10;
      text-align: center;
      span {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        border: 1px solid;
        background: #ddd;
        opacity: 0.8;
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .active {
      background: #409eff !important;
    }
  }
</style>
