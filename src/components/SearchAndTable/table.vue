<template>
  <Table
    ref="table"
    :border="border"
    :loading="loading"
    :columns="columns"
    :data="tableData"
    :row-class-name="rowClassName"
    :highlight-row="highlightRow"
    :row-key="rowKey"
    @on-select="_select"
    @on-select-all="_selectAll"
    @on-selection-change="_selectChange"
    @on-row-click="_rowClick"
    @on-row-dblclick="_rowDbclick"
  ></Table>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default: Array
    },
    tableData: {
      type: Array,
      default: Array
    },
    border: {
      type: Boolean,
      default: true
    },
    // 确定每一行的类名（每一列的类名在columns中设置className）
    rowClassName: {
      type: Function,
      default: (row, index) => ''
    },
    // 是否支持高亮选中的行，即单选
    highlightRow: {
      type: Boolean,
      default: false
    },
    // 是否强制使用内置的 row-key，开启后可能会影响性能
    rowKey: {
      type: [Boolean, String],
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  methods: {
    /**
     * 多选模式
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
    _select (selection, row) {
      this.$emit('on-select', selection, row)
    },
    _selectAll (selection) {
      this.$emit('on-select-all', selection)
    },
    selectAll (isChecked = true) {
      this.$refs.table.selectAll(isChecked)
    },
    _selectChange (selection) {
      this.$emit('on-selection-change', selection)
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
    _rowClick (row, index) {
      this.$emit('on-row-click', row, index)
    },
    _rowDbclick (row, index) {
      this.$emit('on-row-dbclick', row, index)
    },
    /**
     * 功能方法部分
     *
     * 1、导出（exportCsv）
     *
     */
    exportData (params) {
      let secondKey = ''
      params.columns = this.columns.filter(o => {
        return o.title !== '操作' && o.type !== "selection"
      }).map((o, i) => {
        if(o.type === 'index') {
          o.key = 'index'
        }
        if(i === 1) {
          secondKey = o.key
        }
        return o
      })
      params.data = this.tableData.map((o, i) => {
        o.index = i + 1
        return o
      })
      params.data.push({
        index: '总条数',
        [secondKey]: this.tableData.length
      })

      this.$refs.table.exportCsv(params)
    }
  }
}
</script>
