<script>
/***
 * 表格封装
 */
import { Table, TableColumn, Pagination } from "element-ui";
export default {
  name: "TableCommon",
  components: {
    Table,
    TableColumn,
    Pagination,
  },
  props: {
    columns: {
      type: Array,
      default: function () {
        return [];
      },
    },
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
    border: {
      type: Boolean,
      default: true,
    },
    fit: {
      type: Boolean,
      default: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "",
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 30, 40];
      },
    },
    total: {
      type: Number,
      default: 1,
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    direction: {
      type: String,
      default: "left",
    },
  },
  methods: {
    handleSelect(selection, row) {
      this.$emit("select", { selection, row });
    },
    handleSelectAll(selection) {
      this.$emit("selectAll", selection);
    },
    handleHeaderClick(column, event) {
      this.$emit("headerClick", { column, event });
    },
    handleCurrentChange(page) {
      this.$emit("currentChange", page);
    },
    handleSizeChange(page, next) {
      this.currentPage = 1;
      this.$emit("sizeChange", page);
    },
  },
  render() {
    return (
      <div class="table-common">
        <Table
          data={this.data}
          border={this.border}
          fit={this.fit}
          size={this.size}
          show-header={this.showHeader}
          onselect-all={this.handleSelectAll}
          onselect={this.handleSelect}
          onheader-click={this.handleHeaderClick}
        >
          {this.columns.map((item) => {
            return (
              <TableColumn
                type={item.type}
                prop={item.prop}
                label={item.type == "index" ? "序号" : item.label}
                width={item.width}
                min-width={item.minWidth}
                fixed={item.fixed}
                align={item.align || "center"}
                show-overflow-tooltip={item.tooltip || true}
              >
                {this.$scopedSlots[item.prop]
                  ? this.$scopedSlots[item.prop]
                  : null}
              </TableColumn>
            );
          })}
          {this.$scopedSlots.default ? (
            <TableColumn label="操作" align="center">
              {this.$scopedSlots.default}
            </TableColumn>
          ) : null}
        </Table>
        {Object.keys(this._events).includes("currentChange") ? (
          <Pagination
            style={`margin-top:5px;text-align:${this.direction}`}
            oncurrent-change={this.handleCurrentChange}
            onsize-change={this.handleSizeChange}
            current-page={this.currentPage}
            page-sizes={this.pageSizes}
            layout={this.layout}
            total={this.total}
          ></Pagination>
        ) : null}
      </div>
    );
  },
};
</script>