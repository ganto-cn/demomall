<template>
  <div id="category">
    <nav-bar class="category-nav">
      <!-- <div slot="left">11</div> -->
      <div slot="center">分类</div>
      <!-- <div slot="right">11</div> -->
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'Category',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .category-nav{
    background-color: blue;
    color: white;
  }
</style>