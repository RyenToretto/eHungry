<template>
  <div>
    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooter"></FooterNav>
  </div>
</template>

<script>
  import FooterNav from "./components/FooterNav/FooterNav"
  
  export default {
    name: 'App',
    components: {
      FooterNav
    },
    async mounted () {
      await this.$store.dispatch('getUserInfo')    // 触发 vuex 的 getUserInfo(), 从后台获取user
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
