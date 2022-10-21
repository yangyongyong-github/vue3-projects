<template>
  <div>
    <button @click="exportExcel">导出 Excel</button>

    <h4>JSON 数据：</h4>

    <div class="code-wrap">
      <code>
        {{ jsonData }}
      </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import json2Excel from "./json2Excel";
import { jsonData } from "./data";

// key -> name 的映射
const excelKeyToName = {
  name: "姓名",
  age: "年龄",
  skill: "特长",
  telephone: "电话",
  address: "地址",
};

// 导出 Excel 文件
const exportExcel = () => {
  // 格式化参数
  const data = jsonData.map((item) => {
    let newItem: any = {};
    Object.keys(item).forEach((key) => {
      newItem[excelKeyToName[key]] = item[key];
    });
    return newItem;
  });

  // 导出 Excel
  json2Excel(data);
};
</script>
