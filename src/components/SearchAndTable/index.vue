<template>
  <div>
    <iSearch
      :infos="searchData"
      submitText="查询"
      operateType="search"
      submitPosition="top"
      @submit="search"
      @on-enter="search"
      @on-clear="search"
    ></iSearch>
    <slot name="operate">
      <div v-if="operateData.length" style="margin-bottom: 20px">
        <template v-for="(o, i) in operateData">
          <Button
            @click="o.click"
            :type="o.type || `primary`"
            :size="o.size || `default`"
            style="margin-right: 15px"
            :key="i"
            v-show="!o.hidden"
          >{{o.label}}</Button>
        </template>
      </div>
    </slot>
    <iTable
      ref="table"
      :border="border"
      :loading="loading"
      :columns="columns"
      :table-data="tableData"
      :row-class-name="rowClassName"
      :highlight-row="highlightRow"
      :row-key="rowKey"
      @on-select="_select"
      @on-select-all="_selectAll"
      @on-selection-change="_selectChange"
      @on-row-click="_rowClick"
      @on-row-dblclick="_rowDbclick"
    ></iTable>
    <div style="display: flex">
      <Page
        :total="total"
        show-sizer
        @on-change="pageChange"
        :current.sync="tableDefaultParam.page"
        @on-page-size-change="pageSizeChange"
        :page-size-opts="[10, 50, 100,200]"
        class="table-page"
      >
      </Page>
      <div style="line-height: 32px;height: 32px;margin: 15px">
        <span v-if="total">
          总条数: {{total}}条
        </span>
        <span v-if="resData.ybsCount">
          已标识: {{resData.ybsCount}}条
        </span>
        <span v-if="resData.wbsCount">
          未标识: {{resData.wbsCount}}条
        </span>
        <span v-if="resData.sqlTime">
          查询时间: {{resData.sqlTime}}ms
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import iTable from "./table";
import iSearch from "@/components/EditForm/index";
import { columns, getTableData, searchData, operateData } from "./mock";
export default {
  name: "SearchAndTable",
  components: {
    iTable,
    iSearch,
  },
  props: {
    columns: {
      type: Array,
      default: () => columns,
    },
    // 表格的过滤条件展示
    searchData: {
      type: Array,
      default: () => searchData,
    },
    // 表格的操作按钮展示
    operateData: {
      type: Array,
      default: () => operateData,
    },
    getTableData: {
      type: Function,
      default: getTableData,
    },
    // 额外的参数
    param: {
      type: Object,
      default: Object,
    },
    border: {
      type: Boolean,
      default: true,
    },
    // 确定每一行的类名（每一列的类名在columns中设置className）
    rowClassName: {
      type: Function,
      default: (row, index) => "",
    },
    // 是否支持高亮选中的行，即单选
    highlightRow: {
      type: Boolean,
      default: false,
    },
    // 是否强制使用内置的 row-key，开启后可能会影响性能
    rowKey: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      tableData: [],
      tableRawData: [],
      searchParam: {},
      tableDefaultParam: { page: 1, size: 10 },
      total: 0,
      loading: true,
      resData: {}
    };
  },
  computed: {
    tableParam() {
      let { page, size } = this.tableDefaultParam;
      return { ...this.param, ...this.searchParam, page, size };
    },
  },
  mounted() {
    this.initTableData();
  },
  methods: {
    /**
     * 筛选栏部分
     * 1、搜索
     * 2、重置
     */
    search(v = this.searchParam) {
      Object.keys(v).map((o) => {
        if (o.includes(",")) {
          let [start, end] = o.split(",");
          v[start] = v[o][0];
          v[end] = v[o][1];
          delete v[o];
        }
      });
      this.searchParam = v;
      this.tableDefaultParam.page = 1;
      this.$emit('tableParam', this.tableParam)
      this.initTableData();
    },
    /**
     * 功能方法部分
     *
     * 1、导出：
     * exportCsv 将数据导出为 .csv 文件，参数说明params(Object):
     * filename 文件名，默认为 table.csv
     * original 是否导出为原始数据，默认为 true
     * noHeader 不显示表头，默认为 false
     * columns 自定义导出的列数据
     * data 自定义导出的行数据
     * callback 添加此函数后，不会下载，而是返回数据
     * separator 数据分隔符，默认是逗号(,)
     * quoted 每项数据是否加引号，默认为 false
     * 说明：columns 和 data 需同时声明，声明后将导出指定的数据，建议列数据有自定义render时，可以根据需求自定义导出内容
     *
     */
    exportData(params) {
      this.$refs.table.exportData(params);
    },
    beforeUpload(o, files) {
      this.importFile(o, files);
      return false;
    },
    async importFile(o, files) {
      let url = "/order/waitDeliveryInfo/import";
      let params = new FormData(); // 创建form对象
      params.append("files", files);
      this.spinShow = true;
      // let { success } = await this.http.saasPost({ url, params, prefix });
      // success && this.$Message.success("导入成功！");
      if (o.callback) {
        await o.callback();
      }
      this.$refs.table.refresh();
      this.spinShow = false;
    },
    /**
     * 初始化表格数据：
     * 大量数据渲染时：处理loading问题
     * 筛选onClear时：处理顺序问题
     */
    async initTableData() {
      // on-clear数据变化顺序不对
      await this.$nextTick(() => {});
      // 获取数据时开启遮罩，并抛出一个更新状态
      this.loading = true;
      this.$emit("loading", true);
      let { total, data, ...resData } = await this.getTableData(this.tableParam);
      this.resData = resData
      this.loading = false;
      this.$emit("loading", false);
      // 数据获取结束，更新table数据
      this.total = total;
      this.tableData = data;
      this.$emit("table-data", data);
    },
    /**
     * 表格多选模式
     *
     * 1、on-select（单选）
     * 选中某项时触发，抛出选中项和当前选中项
     *
     * 2、on-select-all（多选）
     * 全选时触发，抛出选中项
     *
     * 3、on-selection-change
     * 选项变化时触发，抛出选中项
     *
     */
    _select(selection, row) {
      this.$emit("on-select", selection, row);
    },
    _selectAll(selection) {
      this.$emit("on-select-all", selection);
    },
    selectAll(isChecked = true) {
      this.$refs.table.selectAll(isChecked);
    },
    _selectChange(selection) {
      this.$emit("on-selection-change", selection);
    },
    /**
     * 表格点击行事件
     *
     * 1、on-row-click（单击）
     * 单击某一行是触发，抛出当前行和索引
     *
     * 2、on-row-dbclick（双击）
     * 双击某一行是触发，抛出当前行和索引
     *
     */
    _rowClick(row, index) {
      this.$emit("on-row-click", row, index);
    },
    _rowDbclick(row, index) {
      this.$emit("on-row-dbclick", row, index);
    },
    /**
     * 表格排序部分
     */
    /**
     * 表格展开部分
     */
    /**
     * 分页组件部分
     *
     */
    pageChange(v) {
      this.$emit("page-change", v);
      this.tableDefaultParam.page = v;
      this.initTableData();
    },
    pageSizeChange(v) {
      this.tableDefaultParam.size = v;
      this.search()
    },
  },
};
</script>

<style scoped>
.table-page {
  margin: 15px 0;
}
</style>
