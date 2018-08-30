<template>
  <div class="infroms-detail">
    id: {{data}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: -1,
      data: null
    }
  },
  mounted() {
    this._fetchData()
  },
  methods: {
    _fetchData() {
      /* this.id = this.$route.params.id
      fetchInformById(this.id).then(res => {
        this.data = res.data
      }).catch(err => {
        console.error(err)
      }) */
      this.data = this.$route.params.id
    }
  },
  watch: {
    '$route'(route) {
      if (route.params.id) {
        this._fetchData()
      }
    }
  }
}
</script>

<style>

</style>
