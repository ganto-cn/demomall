<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    activeStyle() {
      return this.$route.path === this.path ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
  }
  .tab-bar-item:hover{
    color: red;
  }
  .tab-bar-item:active{
    color: green;
  }
</style>
