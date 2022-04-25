<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- <div slot="left">11</div> -->
      <div slot="center">首页</div>
      <!-- <div slot="right">11</div> -->
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import HomeRecommendView from 'views/home/childComps/HomeRecommendView'

  import {getHomeMultidata} from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommends: null
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res.data.banner.list)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(rer => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>