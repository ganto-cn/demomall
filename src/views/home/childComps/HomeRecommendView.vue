<template>
  <div class="home-recommend-view">
    <div class="recommend-item" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'HomeRecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      
    }
  }
</script>

<style scoped>
  .home-recommend-view{
    display: flex;
    width: 100%;
  }
  .home-recommend-view .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 14px;

    padding: 10px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item img{
    width: 70px;
    margin-bottom: 5px;
    vertical-align: middle;
  }
</style>