<template>
  <div class="layout">
    <nav-bar :routes="routes"/>
    <div class="bread-tabs">
      <bread-crumb />
      <tabs-view></tabs-view>
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
.layout {
  position: relative;
  height: 100%;
  width: 100%;
  .app {
    position: relative;
    height: 90%;
    // margin-left: 65px;
    width: 100%;
    min-height: 100%;
  }
}
.bread-tabs {
  height: 50px;
  .el-breadcrumb {
    display: block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 20px;
    outline: 0;
    width: 12%;
    float: left;
  }
  .tabs-view-container {
    line-height: 48px;
    float: left;
  }
}
.null-space {
  width: 100%;
  height: 10%;
}
.copyright {
  // position: fixed;
  text-align: center;
  bottom: 0;
  width: 100%;
  line-height: 50px;
  margin-top: -30px;
  background: #ebeef5;
  color: #1f2d3d;
  a {
    color: #409eff;
  }
}
</style>
