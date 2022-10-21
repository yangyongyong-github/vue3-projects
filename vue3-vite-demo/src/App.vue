<template>
  <div id="app">
    <div class="tip" @click="goHomeHandle">Back Home</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    goHomeHandle() {
      this.$router.replace("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.tip {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    // box-shadow: 3px 3px 0.3px silver;
  }
}
</style>