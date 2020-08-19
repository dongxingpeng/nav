<template>
  <div>
    <TableCommon
      :data="tableList"
      :columns="columns"
      :total="tableList.length"
      :currentPage="currentPage"
      :direction="direction"
      @select="handleSelect"
      @selectAll="handleSelectAll"
      @currentChange="handleCurrentChange"
      @sizeChange="handleSizeChange"
    >
      <template slot-scope="scope">
        <Button type="text" size="small" @click="handleBtnLClick(scope)">查看</Button>
        <Button type="text" size="small">编辑</Button>
      </template>

      <template slot="name" slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </TableCommon>
  </div>
</template>

<script>
import { Button } from "element-ui";
import TableCommon from "@/components/table-common";
export default {
  name: "Home",
  data() {
    return {
      columns: [
        //表格每列
        { type: "selection", width: "50" },
        { label: "日期", prop: "date" },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
      ],
      tableList: [], //表格数据
      currentPage: 1, //当前显示第几页
      direction: "", //分页显示方式：left(默认);center;right
    };
  },
  components: {
    TableCommon,
    Button,
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      for (let i = 0; i < 10; i++) {
        this.tableList.push({
          id: i,
          date: this.date,
          name: "王小虎" + i,
          address: "上海市普陀区金沙江路 1518 弄",
        });
      }
    },
    handleSelect(options) {
      //点击复选框单选
      console.log(options);
    },
    handleSelectAll(options) {
      //点击复选框全选
      console.log(options);
    },
    handleSizeChange(page) {
      //点击改变一页展示多少条
      console.log(page);
    },
    handleCurrentChange(page) {
      //点击进行下一页
      console.log(page);
    },
    handleBtnLClick(scope) {
      //自定义表格内部
      console.log(scope);
    },
  },
};
</script>