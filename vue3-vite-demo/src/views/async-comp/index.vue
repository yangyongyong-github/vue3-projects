<template>
  <div class="container">
    <div class="block">
      <h2>Area_1</h2>
      <p><button @click="modalVisible = true">Open modal</button></p>
      <Teleport to="body">
        <Modal v-if="modalVisible">
          <button @click="modalVisible = false">Close Modal</button>
        </Modal>
      </Teleport>
    </div>

    <div class="block mid">
      <h2>Area_2</h2>
    </div>
    <div class="block big async"><Block3 /></div>
    <div class="block big"><h2>区域4</h2></div>
    <div class="block mid async"><Block5 /></div>
    <div class="block"><h2>区域6</h2></div>
  </div>
</template>

<script>
import { ref } from "vue";
import Modal from "../../components/Modal.vue";
import { getAsyncComponent } from "../../utils/asyncComp";

const Block3 = getAsyncComponent("@/components/Block3.vue");
const Block5 = getAsyncComponent("../../components/Block5.vue");

export default {
  components: {
    Block3,
    Block5,
    Modal,
  },
  setup() {
    const modalVisibleRef = ref(false);
    return {
      modalVisible: modalVisibleRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(./index.scss);
</style>