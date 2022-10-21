<template>
<div class="container">
  <div class="list">
    <s>Editor: </s>
    <!-- Editor div-list -->
    <div class="list">
       <CheckEditor v-model="checked" />
    </div>
    <!-- Selling div-List -->
    <div class="list">
      <s>Selling : </s>
    </div>
  </div>
</div>

</template>

<script>
import CheckEditor from './components/CheckEditor.vue'

const defaultSells=[
   {
    id: 1,
    sell: true,
    title: "iphone12",
  },
  { id: 2, sell: false, title: "xiaomi" },
  { id: 3, sell: true, title: "huawei" },
  { id: 4, sell: true, title: "vivo" },
]

export default {
  name: 'App',
  components: {
    CheckEditor
  },
  data(){
    return{
      checked:true,
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;
}
.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}
strong {
  margin-right: 1em;
}
</style>
