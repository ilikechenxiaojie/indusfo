<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#438eb8" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(route, index) in routes" v-if="route.children">
        <el-menu-item index="/test" v-if="route.children[0].path === 'test' && !route.hidden" :key="index">
          <template>
            <router-link :to="route.path" :key="route.name">
              <span style="font-size: 1.4rem; height: 40px; line-height: 40px; font-weight: bold;">{{route.name}}</span>
            </router-link>
          </template>
        </el-menu-item>
        <el-submenu v-if="route.hidden" :key="index" :index="route.path" style="height: 40px; line-height: 40px;">
          <template slot="title" style="height: 40px; line-height: 40px; font-size: 1.2rem;">{{route.name}}</template>
          <template v-for="child in route.children">
            <router-link :to="route.path + '/' + child.path" :key="child.name">
              <el-menu-item :index="route.path + '/' + child.path">
                <span slot="title" class="menu-title">{{child.name}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>
      <!-- <search-button :placeholder="placeholder"/> -->
      <!-- <el-badge class="item" :value="200" :max="99">
        <el-button class="share-button" icon="el-icon-bell" type="primary"></el-button>
      </el-badge> -->
      <div class="item">
        <div class="notices-num" style="text-align:center; line-height: 20px; font-size:0.8rem; width:20px; height:20px; color: #fff; border-radius: 20px; background: red; position: absolute; right: 5%; top: 20%;">
          6
        </div>
        <el-button class="share-button new-btn" icon="el-icon-bell" type="primary"></el-button>
      </div>
      <div class="head-pic">
        <span class="h-pic"></span>
        <div class="desc-pic">
          <dl>鲍总</dl>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
import SearchButton from '@/components/Buttons/SearchButton'
export default {
  props: {
    routes: {
      type: Array
    }
  },
  data() {
    return {
      activeIndex: '/test',
      placeholder: '订单号'
    }
  },
  mounted() {
    const route = this.$route
    if (route.path) {
      this.activeIndex = route.path
    }
    // console.log(route)
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  watch: {
    $route(route, old) {
      if (route.path !== old.path) this.activeIndex = route.path
    }
  },
  components: {
    SearchButton
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/Nav.scss';
</style>
