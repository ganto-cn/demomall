<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor='blue'>首页</tab-bar-item>
    <tab-bar-item path='/category' activeColor='blue'>分类</tab-bar-item>
    <tab-bar-item path='/cart' activeColor='blue'>购物车</tab-bar-item>
    <tab-bar-item path='/profile' activeColor='blue'>我的</tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
