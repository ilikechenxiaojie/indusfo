<template>
  <div class="layout">
    <nav-bar :routes="routes"/>
    <div class="bread-tabs">
      <!-- <bread-crumb /> -->
      <tabs-view style="margin-left: 10px;"></tabs-view>
    </div>
    <app-main class="app" />
    <!-- {{routes}} -->
    <div class="null-space"></div>
    <div class="copyright" ref="copyright">
      <i class="el-icon-fa-heartbeat"></i><a class="link-type" href="http://www.indusfo.com/" target="_black">浙江恩大施福</a>
      软件科技有限公司 &copy; {{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import AppMain from './AppMain'
import routes from '@/router/defaultRoutes'
import TabsView from '@/components/NavBar/TabsView'
import BreadCrumb from '@/components/NavBar/BreadCrumb'
export default {
  data() {
    return {
      routes: routes
    }
  },
  components: {
    NavBar,
    AppMain,
    TabsView,
    BreadCrumb
  }
}
</script>
<style lang="scss">
  @import '@/assets/css/Layout/index.scss';
</style>
