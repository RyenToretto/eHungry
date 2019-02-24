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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
