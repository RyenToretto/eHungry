<template>
  <div>
    Goods
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'Goods',
    computed: {
      ...mapState(["shopGoods"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
