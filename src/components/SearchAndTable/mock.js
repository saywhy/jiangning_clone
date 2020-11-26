export const searchData = [{
  label: '姓名',
  labelWidth: 60,
  key: 'name'
}, {
  label: '手机号码',
  labelWidth: 90,
  key: 'phone'
}]

export const operateData = [{
  label: '新增',
  click: () => console.log('新增')
}, {
  label: '导出',
  click: () => console.log('导出')
}, {
  label: '导入',
  click: () => console.log('导入')
}]

/**
 * columns属性：
 * 1、设置type index 序号
 * 2、设置type selection 多选模式
 * 3、设置type expand 开启扩展功能
 * 4、设置ellipsis true 省略号
 * 5、设置tooltip true 提示完整内容
 * 6、设置sortable true 静态排序
 */
export const columns = [{
  title: '序号',
  width: 80,
  align: 'center',
  type: 'index' // index是序号默认 selection 是为多选模式 expand 开启扩展功能
}, {
  title: '姓名',
  align: 'center',
  ellipsis: true, // 开启后，文本将不换行，超出部分显示为省略号
  tooltip: true, // 开启后，文本将不换行，超出部分显示为省略号，并用 Tooltip 组件显示完整内容
  key: 'name'
}, {
  title: '手机号码',
  align: 'center',
  sortable: true, // sortable是静态排序
  key: 'phone'
}, {
  title: '年龄',
  align: 'center',
  key: 'age'
}, {
  title: '价格',
  align: 'center',
  key: 'price'
}, {
  title: '数量',
  align: 'center',
  key: 'count'
}, {
  title: '时间',
  align: 'center',
  key: 'date'
}, {
  title: '时间',
  align: 'center',
  key: 'date'
}]

/**
 * 初始化tableData
 * 1、设置特殊 key _checked: true 可以默认选中当前项
 * 2、设置特殊 key _disabled: true 可以禁止选择当前项
 * 3、设置特殊 key _expanded: true 可以默认展开当前行
 * 4、设置特殊 key _disableExpand: true 可以禁用当前行的展开功能
 */
export const tableData = [{
  id: '0',
  name: 'John Brown',
  // _checked: true, // 选中当前项
  // _disabled: true, // 禁止选择当前项
  age: 18,
  price: 20000,
  count: 10,
  phone: 18813034320,
  date: '2020-10-03'
}, {
  id: '2',
  name: 'Jim Green',
  age: 24,
  price: 20000,
  count: 10,
  phone: 18813034321,
  date: '2020-10-01'
}, {
  id: '3',
  name: 'Joe Black',
  age: 30,
  price: 20000,
  count: 10,
  phone: 18813034322,
  date: '2020-10-02'
}, {
  id: '4',
  name: 'Jon Snow',
  age: 26,
  price: 20000,
  count: 10,
  phone: 18813034323,
  date: '2020-10-04'
}]

export const getTableData = async param => {
  console.log('tableData param: ', param)
  const result = new Promise(resolve => {
    let data = {
      data: JSON.parse(JSON.stringify(tableData)),
      total: 100
    }
    setTimeout(() => resolve(data), 800)
  })
  return result
}
