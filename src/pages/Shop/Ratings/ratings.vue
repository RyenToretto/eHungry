<template>
  <div>
    ratings
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'ratings',
    computed: {
      ...mapState(["shopRatings"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
