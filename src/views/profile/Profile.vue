<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <!-- <div slot="left">11</div> -->
      <div slot="center">我的</div>
      <!-- <div slot="right">11</div> -->
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'Profile',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .profile-nav{
    background-color: orangered;
    color: white;
  }
</style>