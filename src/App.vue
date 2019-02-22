<template>
  <div class="container">
    <Header></Header>
    <h2 v-if="isFirst">Git 用户搜索</h2>
    <h2 v-else-if="isSearching">searching...</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
    <Main v-else :users="users"></Main>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import Header from "./components/Header"
  import Main from "./components/Main"
  
  export default {
    name: 'App',
    components: {
      Header,
      Main
    },
    computed: {
      ...mapState(["isFirst", "isSearching", "users", "errorMsg"])
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  
  .card-text {
    font-size: 85%;
  }
</style>
