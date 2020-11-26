import { export_array_to_excel } from '@/libs/excel'
export default {
  methods: {
    _exportExcel (title, key, data, filename) {
      // 导出文件
      export_array_to_excel({title, key, data, filename, autoWidth: true})
      // 关闭 loading 并 提示
      return '导出成功，文件已开始下载'
    }
  }

}
