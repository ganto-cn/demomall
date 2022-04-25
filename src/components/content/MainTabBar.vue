<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor='blue'>首页</tab-bar-item>
    <tab-bar-item path='/category' activeColor='blue'>书签</tab-bar-item>
    <tab-bar-item path='/cart' activeColor='blue'>项目</tab-bar-item>
    <tab-bar-item path='/profile' activeColor='blue'>关于</tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

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
