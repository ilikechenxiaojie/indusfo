<template>
  <div class="tabs-view-container">
    <router-link class="tabs-view" v-for="tag in visitedViews" :to="tag.path" :key="tag.path">
      <el-tag :closable="true" :type="isActive(tag.path)?'':'info'" size="medium" @close='closeViewTabs(tag, $event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  mounted() {
    this.addViewToTabs()
  },
  computed: {
    visitedViews() {
      return this.visitedViews.slice(-6)
    },
    ...mapGetters(['visitedViews'])
  },
  methods: {
    addViewToTabs() {
      this.addVisitedViews(this.$route)
    },
    isActive(path) {
      return path === this.$route.path
    },
    closeViewTabs(view, $event) {
      // console.log(view)
      this.delVisitedViews(view).then(views => {
        let last = views.slice(-views.length)[0]
        if (last) {
          this.$router.push(last.path)
        } else {
          this.$router.push('/')
          this.addVisitedViews(this.$route)
        }
        /* last ?  : this.$router.push('/')
        console.log(this.visitedViews) */
      })
      // console.log($event)
      $event.preventDefault()
    },
    ...mapActions(['addVisitedViews', 'delVisitedViews'])
  },
  watch: {
    $route() {
      this.addViewToTabs()
    }
  }
}
</script>

<style>
.tabs-view-container {
  float: left;
}
</style>
