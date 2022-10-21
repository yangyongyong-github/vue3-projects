<template>
  <div class="bar1">
    <div class="item" v-for="item in bars" :key="item.country">
      <label>{{ item.country }}</label>
      <div
        class="bar"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>

      <div class="value">{{ item.value }}万亿</div>
    </div>
  </div>
</template>

<script>
import useGdp from "./composition/useGDP";
import { computed } from "vue";

export default {
  props: ["gdp"],
  setup(props) {
    const gdp = computed(() => props.gdp); // 通过计算属性来产生依赖
    return {
      // ...useGdp(props.gdp),
      ...useGdp(400, gdp),
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(./style/bar1.scss);
</style>
