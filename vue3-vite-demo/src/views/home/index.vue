<template>
  <div class="home-container">
    <h1>home</h1>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <span v-if="loginUserStore.loading">loading...</span>
      <template v-else-if="loginUserStore.user">
        <span>{{ loginUserStore.user.name }}</span>
        <a href="" @click.prevent="handleLoginOut">退出</a>
      </template>
      <router-link v-else to="/login">Login</router-link>
    </nav>
    <ul class="items">
      <li @click="toPageHandle('/todos')">todos</li>
      <li @click="toPageHandle('/async-comp')">asyncComp</li>
      <li @click="toPageHandle('/GDP')">GDP</li>
    </ul>
  </div>
</template>

<script>
import { loginOut, loginUserStore } from "../../store/useLoginUser";

export default {
  setup() {
    const handleLoginOut = async () => {
      await loginOut();
      this.$router.push("/login");
    };
    return {
      handleLoginOut,
      loginUserStore,
    };
  },
  methods: {
    toPageHandle(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import url(./index.scss);
</style>
