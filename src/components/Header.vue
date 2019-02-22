<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input @keyup.enter="search" type="text" placeholder="enter the name you wanna search" v-model="searchName"/>
      <button @click="search" type="button">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        searchName: ""
      }
    },
    methods: {
      search(){
        this.$store.dispatch("search", this.searchName)
      }
    }
  }
</script>

<style scoped>
  /* Header */
  
</style>
