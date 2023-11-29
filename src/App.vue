<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
body{
  padding:0;
  margin:0;
}
</style>
