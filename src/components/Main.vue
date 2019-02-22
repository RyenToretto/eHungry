<template>
  <div class="row">
    <div class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.homeUrl" target="_blank">
        <img :src="user.headImg" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  /* Main */
  
</style>
