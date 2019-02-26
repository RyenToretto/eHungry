<template>
  <div>
    Info
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'Info',
    computed: {
      ...mapState(["shopInfo"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
