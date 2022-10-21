<template>
  <div class="container">
    <h3>Excel-JSON 数据转换处理</h3>
    <div class="wrapper">
      <div class="link-item" v-for="item in paths" :key="item.id">
        <router-link :to="item.url">{{ item.title }}</router-link>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
const paths = [
  {
    id: "excel001",
    title: "Read",
    url: "/excel/read",
  },
  {
    id: "excel002",
    title: "toExcel",
    url: "/excel/out",
  },
];
</script>

<style>
.wrapper {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
}
</style>
