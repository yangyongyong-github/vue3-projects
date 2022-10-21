

## 分类

有表头（first line is title）、没有表头

## 实现 Excel 转 JSON 功能

通过 FileReader 以二进制的方式读取 Excel 文件，即 fileReader.readAsBinaryString(file)

将对应的二进制数据通过 XLSX.read(fileData, { type: "binary" }) 方法生成 workbook 对象

workbook.SheetNames[0] 获取第一个 Sheet 的名称 wsname，因为表格是有序列表，因此可以有多个 Sheet

通过 XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) 方法将对应的 Sheet 内容转换为 JSON 数据