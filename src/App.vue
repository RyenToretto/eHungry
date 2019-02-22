<template>
  <div>
    <router-view></router-view>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  // import {mapState} from "vuex"
  import FooterNav from "./components/FooterNav/FooterNav"
  
  export default {
    name: 'App',
    components: {
      FooterNav
    },
    computed: {
    
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
