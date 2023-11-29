<template>
  <div class="header">
    <router-link to="/">홈</router-link> | 
    <router-link to="/user">사용자</router-link> | 
    <router-link to="/board">게시판</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped> 
  .header {
    color : white;
    background: lightgreen;
    display:flex;
    padding : 8px;
  }
  .header .router-link-exact-active {
    color: #35495e
  }
  .header a {
    color : white;
  }
</style>