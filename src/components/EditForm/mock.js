// 字典
export const list = [{
  value: 0,
  label: 'value0'
}, {
  value: 1,
  label: 'value1'
}, {
  value: 2,
  label: 'value2'
}, {
  value: 3,
  label: 'value3'
}, {
  value: 4,
  label: 'value4'
}]

// 基本功能
export const basicInfos = [{
  label: 'text',
  key: 'text',
  // type: 'text',
  value: '这是个text输入框'
}, {
  label: 'textarea',
  key: 'textarea',
  type: 'textarea',
  value: '这是个文本域'
}, {
  label: 'select',
  key: 'select',
  type: 'select',
  value: 1,
  list
}, {
  label: 'radio',
  key: 'radio',
  type: 'radio',
  value: 1,
  list
}, {
  label: 'checkbox',
  key: 'checkbox',
  type: 'checkbox',
  value: [1, 2, 3, 4],
  list
}, {
  label: 'date',
  key: 'date',
  type: 'datetime',
  value: '2020/02/02'
}, {
  label: 'date',
  key: 'startTime, endTime',
  type: 'datetime'
}, {
  label: 'upload',
  key: 'upload',
  type: 'upload'
}, {
  label: 'upload',
  key: 'uploadmultiple',
  type: 'upload',
  multiple: true,
  value: [{
    url: 'https://img.yzcdn.cn/vant/leaf.jpg'
  }]
}]

// 联动表单功能
export const linkingInfos = [{
  label: '单选联动',
  type: 'hr'
}, {
  label: 'radioLink',
  key: 'radioLink',
  type: 'radio',
  colSpan: 24,
  value: 4,
  list
}, {
  label: 'input_0',
  key: 'input_0',
  type: 'input',
  value: '联动：0时隐藏本项',
  linking: {
    key: 'radioLink', // 联动key值
    value: 0, // 联动值(param[key] === value时，联动生效)
    linkingType: 'hidden' // 联动时，本表单项做的反应（hidden disabled show undisabled）
  }
}, {
  label: 'input_1',
  key: 'input_1',
  type: 'input',
  value: '联动：1时禁用本项',
  disabled: false,
  linking: {
    key: 'radioLink',
    value: 1,
    linkingType: 'disabled'
  }
}, {
  label: 'input_2',
  key: 'input_2',
  type: 'input',
  value: '联动：2时启用本项',
  disabled: false,
  linking: {
    key: 'radioLink',
    value: 2,
    linkingType: 'undisabled'
  }
}, {
  label: 'input_3',
  key: 'input_3',
  type: 'input',
  value: '联动：3时启用本项',
  disabled: false,
  linking: {
    key: 'radioLink',
    value: 3,
    linkingType: 'undisabled'
  }
}, {
  label: '多选联动',
  type: 'hr'
}, {
  label: 'checkboxLink',
  key: 'checkboxLink',
  type: 'checkbox',
  colSpan: 24,
  value: [3],
  list
}, {
  label: 'input_0',
  key: 'checkbox_0',
  type: 'input',
  value: '联动：0时隐藏本项',
  linking: {
    key: 'checkboxLink',
    value: 0,
    linkingType: 'hidden'
  }
}, {
  label: 'input_1',
  key: 'checkbox_1',
  type: 'input',
  disabled: false,
  value: '联动：1、2时禁用本项',
  linking: {
    key: 'checkboxLink',
    value: [1, 2],
    linkingType: 'disabled'
  }
}, {
  label: 'input_2',
  key: 'checkbox_2',
  type: 'input',
  disabled: false, // 这里必须初始化disabled，否则无效
  value: '联动：3、4时启用本项',
  linking: {
    key: 'checkboxLink',
    value: [3, 4],
    linkingType: 'undisabled'
  }
}, {
  label: 'input_3',
  key: 'checkbox_3',
  type: 'input',
  value: '联动：3时启显示本项',
  linking: {
    key: 'checkboxLink',
    value: 3,
    linkingType: 'show'
  }
}]

// 其它功能
export const otherInfos = [ {
  label: '插槽功能',
  type: 'slot',
  key: 'slot'
}, {
  type: 'hr'
}, {
  label: 'hr_top',
  type: 'hr'
}, {
  label: 'hr_bottom',
  type: 'hr',
  position: 'bottom'
}]

export const infos = [{
  label: '基础信息',
  type: 'hr'
},
...basicInfos,
{
  label: '联动功能',
  type: 'hr'
},
...linkingInfos,
{
  label: '其它功能',
  type: 'hr'
},
...otherInfos
]

export const rules = {
  text: [{
    required: true
  }]
}
