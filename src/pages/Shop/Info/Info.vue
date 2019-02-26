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
      ...mapState({
        "shopInfo": state=>state.shop.info
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
