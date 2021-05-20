<template>
  <div>
    <table-common
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
        <Button type="text" size="small" @click="handleBtnLClick(scope)"
          >查看</Button
        >
        <Button type="text" size="small">编辑</Button>
      </template>

      <template slot="name" slot-scope="scope">
        <span>{{ scope.row.name }}测</span>
      </template>
    </table-common>
    <form-common :form="form" :model="model"></form-common>
  </div>
</template>

<script>
import { Button } from "element-ui";
import TableCommon from "@/components/table-common";
import FormCommon from "@/components/form-common";
export default {
  name: "Home",
  data() {
    return {
      columns: [
        //表格每列
        { type: "selection", width: "50" },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
      ],
      tableList: [], //表格数据
      currentPage: 1, //当前显示第几页
      direction: "", //分页显示方式：left(默认);center;right
      model: {
        text: "",
        select: "",
        checks: [],
        radios: "",
        date: "",
      },
      form: {
        config: [
          {
            type: "text",
            prop: "text",
            label: "名称",
          },
          {
            type: "select",
            prop: "select",
            label: "地址",
            option: [
              { label: "1-1", value: "测试1" },
              { label: "2-1", value: "测试2" },
            ],
          },

          {
            type: "checkbox",
            prop: "checks",
            label: "复选框",
            option: [
              { label: "1-1", value: "测试1" },
              { label: "2-1", value: "测试2" },
            ],
          },

          {
            type: "radio",
            prop: "radios",
            label: "单选框",
            option: [
              { label: "1-1", value: "测试1" },
              { label: "2-1", value: "测试2" },
            ],
          },

          {
            type: "datetime",
            prop: "date",
            label: "时间",
          },
        ],
        direction: "center",
        inline: false,
        size: "small",
      },
    };
  },
  components: {
    TableCommon,
    FormCommon,
    Button,
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      for (let i = 0; i < 5; i++) {
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