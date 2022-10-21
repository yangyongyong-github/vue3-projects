<!-- 从excel文件中解读出其值  -->

<template>
  <input
    type="file"
    ref="excelRef"
    :accept="props.accept"
    @change="onChange"
    class="excel"
  />
  <h1>解析数据：</h1>
  <h2>
    <code>{{ excelData }}</code>
  </h2>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import * as XLSX from "xlsx";

interface Props {
  accept: string;
}

const props = withDefaults(defineProps<Props>(), {
  accept:
    ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
});

const excelRef: any = ref(null);
const excelData: any[] = reactive([]);

const onChange = (event: any) => {
  // 获取文件对象
  const file = event.target.files[0];
  console.log(file);
};
</script>
