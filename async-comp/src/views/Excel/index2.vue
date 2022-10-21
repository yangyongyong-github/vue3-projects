<!-- 
  实现 Excel 转 JSON 功能 
1. 通过 FileReader 以二进制的方式读取 Excel 文件，即 fileReader.readAsBinaryString(file)
2. 将对应的二进制数据通过 XLSX.read(fileData, { type: "binary" }) 方法生成 workbook 对象
3. workbook.SheetNames[0] 获取第一个 Sheet 的名称 wsname，因为表格是有序列表，因此可以有多个 Sheet
4. 通过 XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) 方法将对应的 Sheet 内容转换为 JSON 数据
-->

<template>
  <input type="file" ref="excelRef" :accept="props.accept" @change="onChange" />
  <h4>解析数据：</h4>
  <code>{{ excelData }}</code>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import * as XLSX from "xlsx";
import { excelNameToKey } from "./data";

interface Props {
  accept: string;
}

const props = withDefaults(defineProps<Props>(), {
  accept:
    ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
});

const excelRef: any = ref(null);
const excelData: any[] = reactive([]);

const clearFile = () => {
  excelRef.value.value = "";
};

// 标准化 JSON 数据
const excelDataToJson = (sheetJson: any[]) => {
  if (!sheetJson.length) return;

  let result = sheetJson;
  const hasTableHead = !!sheetJson[0].__EMPTY;

  // 拥有表头的数据，需要取正确的值
  if (hasTableHead) {
    const header = sheetJson.shift();
    const data: any[] = [];
    Object.keys(header).forEach((key) => {
      sheetJson.forEach((item, index) => {
        const obj = data[index] || {};
        obj[header[key]] = item[key];
        data[index] = obj;
      });
    });

    console.log("【】【】", data);
    result = data;
  }

  // 将表格对应的文字转换为 key
  result.forEach((item) => {
    const newItem: any = {};
    Object.keys(item).forEach((key) => {
      newItem.title = key;
      newItem[excelNameToKey[key]] = item[key];
    });
    excelData.push(newItem);
  });
};

// 读取对应表格文件
const readerExcel = (file: File) => {
  const fileReader = new FileReader();

  // 以二进制的方式读取表格内容
  fileReader.readAsBinaryString(file);

  // 表格内容读取完成
  fileReader.onload = (event: any) => {
    try {
      const fileData = event.target.result;
      const workbook = XLSX.read(fileData, {
        type: "binary",
      });

      // 表格是有序列表，因此可以取多个 Sheet，这里取第一个 Sheet
      const wsname = workbook.SheetNames[0];
      // 将表格内容生成 json 数据
      const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);

      console.log(sheetJson);

      // 标准化 JSON 数据
      excelDataToJson(sheetJson);
    } catch (e) {
      console.log(e);
      return false;
    }
  };
};

// 文件变化时触发
const onChange = (event) => {
  // 获取文件对象
  const file = event.target.files[0];

  // 读取文件内容
  readerExcel(file);

  // 清除数据
  clearFile();
};
</script>
