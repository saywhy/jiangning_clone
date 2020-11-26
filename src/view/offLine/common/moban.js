import Dropdown from './Dropdown'
import { TableColumnRenderHeadParams } from 'view-design'

export default {
  data () {
    return {
      index: 1,
      dialogShow: false,
      dialogEditShow: false,
      dialogDelShow: false,
      dialogExpShow: false,
      dialogImportShow: false,
      currentInfo: {},
      currentInfos: [],
      // 查询
      searchDataMap: {
        '1sea': [{
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        },
        {
          label: '海况',
          labelWidth: 90,
          key: 'hk',
          type: 'select',
          list: [{
            value: '',
            label: '全部'
          },
          {
            value: '1',
            label: '1级'
          },
          {
            value: '2',
            label: '2级'
          },
          {
            value: '3',
            label: '3级'
          },
          {
            value: '4',
            label: '4级'
          },
          {
            value: '5',
            label: '5级'
          }
        ],
          colSpan: '12'
        },
        {
          label: '干扰类型',
          labelWidth: 90,
          key: 'gr',
          type: 'select',
          list: [{
              value: '',
              label: '全部'
            },
            {
              value: 1,
              label: '是'
            },
            {
              value: 0,
              label: '否'
            }
          ],
          colSpan: '12'
        }],
        '1sky': [{
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        },
        {
          label: '天气',
          labelWidth: 90,
          key: 'tq',
          type: 'select',
          list: [{
            value: '',
            label: '全部'
          },
          {
            value: '晴',
            label: '晴'
          },
          {
            value: '阴',
            label: '阴'
          },
          {
            value: '雨',
            label: '雨'
          },
          {
            value: '雪',
            label: '雪'
          },
          {
            value: '雾',
            label: '雾'
          }
        ],
         
          colSpan: '12'
        },
        {
          label: '干扰类型',
          labelWidth: 90,
          key: 'gr',
          type: 'select',
          list: [{
              value: '',
              label: '全部'
            },
            {
              value: 1,
              label: '是'
            },
            {
              value: 0,
              label: '否'
            }
          ],
          colSpan: '12'
        }],
        '2sea': [{
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        },
        {
          label: '海况',
          labelWidth: 90,
          key: 'hk',
          type: 'select',
          list: [{
            value: '',
            label: '全部'
          },
          {
            value: '1',
            label: '1级'
          },
          {
            value: '2',
            label: '2级'
          },
          {
            value: '3',
            label: '3级'
          },
          {
            value: '4',
            label: '4级'
          },
          {
            value: '5',
            label: '5级'
          }
        ],
          colSpan: '12'
        },
        {
          label: '干扰类型',
          labelWidth: 90,
          key: 'gr',
          type: 'select',
          list: [{
              value: '',
              label: '全部'
            },
            {
              value: 1,
              label: '是'
            },
            {
              value: 0,
              label: '否'
            }
          ],
          colSpan: '12'
        },
        {
          label: '信噪比',
          labelWidth: 90,
          key: 'xzb'
        }],
        '2sky': [{
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        },
        {
          label: '天气',
          labelWidth: 90,
          key: 'tq',
          type: 'select',
          list: [{
            value: '',
            label: '全部'
          },
          {
            value: '晴',
            label: '晴'
          },
          {
            value: '阴',
            label: '阴'
          },
          {
            value: '雨',
            label: '雨'
          },
          {
            value: '雪',
            label: '雪'
          },
          {
            value: '雾',
            label: '雾'
          }
        ],
         
          colSpan: '12'
        },
        {
          label: '干扰类型',
          labelWidth: 90,
          key: 'gr',
          type: 'select',
          list: [{
              value: '',
              label: '全部'
            },
            {
              value: 1,
              label: '是'
            },
            {
              value: 0,
              label: '否'
            }
          ],
          colSpan: '12'
        },
        {
          label: '信噪比',
          labelWidth: 90,
          key: 'xzb'
        }],
        '3sea': [{
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        },
        {
          label: '海况',
          labelWidth: 90,
          key: 'hk',
          type: 'select',
          list: [{
            value: '',
            label: '全部'
          },
          {
            value: '1',
            label: '1级'
          },
          {
            value: '2',
            label: '2级'
          },
          {
            value: '3',
            label: '3级'
          },
          {
            value: '4',
            label: '4级'
          },
          {
            value: '5',
            label: '5级'
          }
        ],
          colSpan: '12'
        },
        {
          label: '干扰类型',
          labelWidth: 90,
          key: 'gr',
          type: 'select',
          list: [{
              value: '',
              label: '全部'
            },
            {
              value: 1,
              label: '是'
            },
            {
              value: 0,
              label: '否'
            }
          ],
          colSpan: '12'
        },
        {
          label: '信噪比',
          labelWidth: 90,
          key: 'xzb'
        }],
        '3sky': [{
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        },
        {
          label: '天气',
          labelWidth: 90,
          key: 'tq',
          type: 'select',
          list: [{
            value: '',
            label: '全部'
          },
          {
            value: '晴',
            label: '晴'
          },
          {
            value: '阴',
            label: '阴'
          },
          {
            value: '雨',
            label: '雨'
          },
          {
            value: '雪',
            label: '雪'
          },
          {
            value: '雾',
            label: '雾'
          }
        ],
         
          colSpan: '12'
        },
        {
          label: '干扰类型',
          labelWidth: 90,
          key: 'gr',
          type: 'select',
          list: [{
              value: '',
              label: '全部'
            },
            {
              value: 1,
              label: '是'
            },
            {
              value: 0,
              label: '否'
            }
          ],
          colSpan: '12'
        },
        {
          label: '信噪比',
          labelWidth: 90,
          key: 'xzb'
        }],
        4: [    {
          label: '雷达号',
          labelWidth: 90,
          key: 'ldh'
        },
        {
          label: '批号',
          labelWidth: 90,
          key: 'ph'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        }],
        5: [{
          label: '条件1',
          labelWidth: 90,
          key: 'title'
        }],
        6: [{
          label: '条件1',
          labelWidth: 90,
          key: 'title'
        }],
        7: [{
          label: '条件1',
          labelWidth: 90,
          key: 'title'
        }],
        8: [{
          label: '条件1',
          labelWidth: 90,
          key: 'title'
        }],
        9: [{
          label: '条件1',
          labelWidth: 90,
          key: 'title'
        }]
      },
      // 操作按钮
      operateData: [{
        //   label: "新增",
        //   click: () => (this.dialogShow = true),
        // },
        // {
        label: '删除',
        click: () => {
          this.dialogDelShow = true
        }
      },
      {
        label: '导入',
        click: () => {
          this.dialogImportShow = true
        }
      },
      {
        label: '导出',
        click: () => this.exportData()
      }
      ],
      columnsMap: {
        '1sea': [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        // {
        //   title: 'id',
        //   align: 'center',
        //   minWidth: 90,
        //   key: 'id'
        // },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '方位',
          align: 'center',
          minWidth: 90,
          key: 'fw'
        },
        {
          title: '距离',
          align: 'center',
          minWidth: 90,
          key: 'jl'
        },
        {
          title: '航向',
          align: 'center',
          minWidth: 90,
          key: 'hx'
        },
        {
          title: '航速',
          align: 'center',
          minWidth: 90,
          key: 'hs'
        },
        {
          title: '姿态角',
          align: 'center',
          minWidth: 90,
          key: 'ztj'
        },
        {
          title: '像长',
          align: 'center',
          minWidth: 90,
          key: 'xc'
        },
        {
          title: '真实像长',
          align: 'center',
          minWidth: 90,
          key: 'zsxc'
        },
        {
          title: '像起点',
          align: 'center',
          minWidth: 90,
          key: 'xqd'
        },
        {
          title: '像终点',
          align: 'center',
          minWidth: 90,
          key: 'xzd'
        },
        {
          title: '观通站名',
          align: 'center',
          minWidth: 90,
          key: 'gtzm'
        },
        {
          title: '班长名',
          align: 'center',
          minWidth: 90,
          key: 'bzm'
        },
        {
          title: '海况',
          align: 'center',
          minWidth: 90,
          key: 'hk'
        },
        {
          title: '干扰',
          align: 'center',
          minWidth: 90,
          key: 'gr'
        },
        {
          title: '国家地区',
          align: 'center',
          minWidth: 90,
          key: 'gjdq'
        },
        {
          title: '型号',
          align: 'center',
          minWidth: 90,
          key: 'xh'
        },
        {
          title: '舷号',
          align: 'center',
          minWidth: 90,
          key: 'xih'
        },
        {
          title: '船类型',
          align: 'center',
          minWidth: 90,
          key: 'type'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      let status = this.index != '4' ? this.currentTableStatus : ''
                      this.editInfos[this.index] = this.editInfos[
                        this.index + status
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm1'
                }
              })
            ])
        }
        ],
        '1sky': [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        {
          title: '天气',
          align: 'center',
          minWidth: 90,
          key: 'tq'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '标识',
          align: 'center',
          minWidth: 90,
          key: 'bs'
        },
        {
          title: '雷达带宽',
          align: 'center',
          minWidth: 90,
          key: 'b'
        },
        {
          title: '雷达采样频率',
          align: 'center',
          minWidth: 90,
          key: 'fs'
        },
        {
          title: '目标方位',
          align: 'center',
          minWidth: 90,
          key: 'azi'
        },
        {
          title: '目标航向',
          align: 'center',
          minWidth: 90,
          key: 'course'
        },
        {
          title: '干扰',
          align: 'center',
          minWidth: 90,
          key: 'gr'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      let status = this.index != '4' ? this.currentTableStatus : ''
                      this.editInfos[this.index] = this.editInfos[
                        this.index + status
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm11'
                }
              })
            ])
        }
        ],
        '2sea': [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        // {
        //   title: 'id',
        //   align: 'center',
        //   minWidth: 90,
        //   key: 'id'
        // },
        {
          title: '海况',
          align: 'center',
          minWidth: 90,
          key: 'hk'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '幅度',
          align: 'center',
          minWidth: 90,
          key: 'fd'
        },
        {
          title: '干扰',
          align: 'center',
          minWidth: 90,
          key: 'gr'
        },
        {
          title: '信噪比',
          align: 'center',
          minWidth: 90,
          key: 'xzb'
        },
        {
          title: 'rcs',
          align: 'center',
          minWidth: 90,
          key: 'rcs'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      let status = this.index != '4' ? this.currentTableStatus : ''
                      this.editInfos[this.index] = this.editInfos[
                        this.index + status
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm2'
                }
              })
            ])
        }
        ],
        '2sky': [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        // {
        //   title: 'id',
        //   align: 'center',
        //   minWidth: 90,
        //   key: 'id'
        // },
        {
          title: '天气',
          align: 'center',
          minWidth: 90,
          key: 'tq'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '幅度',
          align: 'center',
          minWidth: 90,
          key: 'fd'
        },
        {
          title: '干扰',
          align: 'center',
          minWidth: 90,
          key: 'gr'
        },
        {
          title: '信噪比',
          align: 'center',
          minWidth: 90,
          key: 'xzb'
        },
        {
          title: 'rcs',
          align: 'center',
          minWidth: 90,
          key: 'rcs'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      let status = this.index != '4' ? this.currentTableStatus : ''
                      this.editInfos[this.index] = this.editInfos[
                        this.index + status
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm22'
                }
              })
            ])
        }
        ],
        '3sea': [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        // {
        //   title: 'id',
        //   align: 'center',
        //   minWidth: 90,
        //   key: 'id'
        // },
        {
          title: '海况',
          align: 'center',
          minWidth: 90,
          key: 'tq'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '幅度',
          align: 'center',
          minWidth: 90,
          key: 'fd'
        },
        {
          title: '干扰',
          align: 'center',
          minWidth: 90,
          key: 'gr'
        },
        {
          title: '信噪比',
          align: 'center',
          minWidth: 90,
          key: 'xzb'
        },
        {
          title: 'rcs',
          align: 'center',
          minWidth: 90,
          key: 'rcs'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      let status = this.index != '4' ? this.currentTableStatus : ''
                      this.editInfos[this.index] = this.editInfos[
                        this.index + status
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm3'
                }
              })
            ])
        }
        ],
        '3sky': [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        // {
        //   title: 'id',
        //   align: 'center',
        //   minWidth: 90,
        //   key: 'id'
        // },
        {
          title: '天气',
          align: 'center',
          minWidth: 90,
          key: 'tq'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '幅度',
          align: 'center',
          minWidth: 90,
          key: 'fd'
        },
        {
          title: '干扰',
          align: 'center',
          minWidth: 90,
          key: 'gr'
        },
        {
          title: '信噪比',
          align: 'center',
          minWidth: 90,
          key: 'xzb'
        },
        {
          title: 'rcs',
          align: 'center',
          minWidth: 90,
          key: 'rcs'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      let status = this.index != '4' ? this.currentTableStatus : ''
                      this.editInfos[this.index] = this.editInfos[
                        this.index + status
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm33'
                }
              })
            ])
        }
        ],
        4: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        // {
        //   title: 'id',
        //   align: 'center',
        //   minWidth: 100,
        //   key: 'id'
        // },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '标识',
          align: 'center',
          minWidth: 150,
          key: 'bs'
        },
        {
          title: '雷达带宽(Hz)',
          align: 'center',
          minWidth: 90,
          key: 'b'
        },
        {
          title: '雷达采样频率(Hz)',
          align: 'center',
          minWidth: 100,
          key: 'fs'
        },
        {
          title: '目标方位(°)',
          align: 'center',
          minWidth: 90,
          key: 'azi'
        },
        {
          title: '目标航向(°)',
          align: 'center',
          minWidth: 90,
          key: 'course'
        },
        {
          title: '目标位置',
          align: 'center',
          minWidth: 90,
          key: 'tgtIdx'
        },
        {
          title: '雷达载频(Hz)',
          align: 'center',
          minWidth: 90,
          key: 'fc'
        },
        {
          title: '目标速度(m/s)',
          align: 'center',
          minWidth: 90,
          key: 'v'
        },
        {
          title: '雷达重频(Hz)',
          align: 'center',
          minWidth: 90,
          key: 'p'
        },
        {
          title: '脉冲数(次)',
          align: 'center',
          minWidth: 90,
          key: 'pluseN'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [
              h(
                'Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogEditShow = true
                      this.editInfos[this.index] = this.editInfos[
                        this.index
                      ].map((o) => {
                        o.value = row[o.key] || ''
                        return o
                      })
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown, {
                props: {
                  row,
                  index: 'm4'
                }
              })
            ])
        }
        ],
        5: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        {
          title: '特征id',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '方位',
          align: 'center',
          minWidth: 90,
          key: 'fw'
        },
        {
          title: '仰角',
          align: 'center',
          minWidth: 90,
          key: 'yj'
        },
        {
          title: '距离',
          align: 'center',
          minWidth: 90,
          key: 'jl'
        },
        {
          title: 'v19',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: '高度',
          align: 'center',
          minWidth: 90,
          key: 'gd'
        },
        {
          title: '速度',
          align: 'center',
          minWidth: 90,
          key: 'sd'
        },
        {
          title: '加速度',
          align: 'center',
          minWidth: 90,
          key: 'jsd'
        },
        {
          title: '航向角',
          align: 'center',
          minWidth: 90,
          key: 'hxj'
        },
        {
          title: 'GPS时间',
          align: 'center',
          minWidth: 90,
          key: 'gpsTime'
        },
        {
          title: '幅度',
          align: 'center',
          minWidth: 90,
          key: 'fd'
        },
        {
          title: '信噪比',
          align: 'center',
          minWidth: 90,
          key: 'xzb'
        },
        {
          title: 'rcs',
          align: 'center',
          minWidth: 90,
          key: 'rcs'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [

              h(Dropdown, {
                props: {
                  row,
                  index: 'f5'
                }
              })
            ])
        }
        ],
        6: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        {
          title: '特征id',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v2',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v3',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v4',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v5',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v6',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v7',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v8',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v9',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v10',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v11',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v12',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v13',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v14',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v15',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v16',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v17',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v18',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [

              h(Dropdown, {
                props: {
                  row,
                  index: 'f6'
                }
              })
            ])
        }
        ],
        7: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        {
          title: '特征id',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v2',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v3',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v4',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v5',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: 'v6',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [

              h(Dropdown, {
                props: {
                  row,
                  index: 'f7'
                }
              })
            ])
        }
        ],
        8: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 65,
          align: 'center'
        },
        {
          title: '特征id',
          align: 'center',
          minWidth: 90,
          key: 'id'
        },
        {
          title: '经度',
          align: 'center',
          minWidth: 90,
          key: 'jd'
        },
        {
          title: '纬度',
          align: 'center',
          minWidth: 90,
          key: 'wd'
        },
        {
          title: '雷达号',
          align: 'center',
          minWidth: 90,
          key: 'ldh'
        },
        {
          title: '批号',
          align: 'center',
          minWidth: 90,
          key: 'ph'
        },
        {
          title: '速度',
          align: 'center',
          minWidth: 90,
          key: 'sd'
        },
        {
          title: '航向',
          align: 'center',
          minWidth: 90,
          key: 'hx'
        },
        {
          title: '海拔高度',
          align: 'center',
          minWidth: 90,
          key: 'hbgd'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, {
            row
          }) =>
            h('div', [

              h(Dropdown, {
                props: {
                  row,
                  index: 'f8'
                }
              })
            ])
        }
        ]
        // 9: [{
        //     title: "角色",
        //     align: "center",
        //     minWidth: 150,
        //     key: "id",
        //   },
        //   {
        //     title: "操作",
        //     align: "center",
        //     fixed: "right",
        //     width: 220,
        //     render: (h, {
        //         row
        //       }) =>
        //       h("div", [
        //         h(Dropdown),
        //       ]),
        //   },
        // ],
      },
      infos: {
        '1sea': [{
          label: '批号',
          key: 'ph',
          value: '',
          rules: true
        },
        {
          label: '雷达编号',
          key: 'ldbh',
          value: '',
          rules: true
        },
        {
          label: '均值',
          key: 'jz',
          value: '',
          rules: true
        },
        {
          label: '极小值',
          key: 'jxz',
          value: '',
          rules: true
        },
        {
          label: '极大值',
          key: 'jdz',
          value: '',
          rules: true
        },
        {
          label: '极差',
          key: 'jc',
          value: '',
          rules: true
        },
        {
          label: '标准差',
          key: 'bzc',
          value: '',
          rules: true
        },
        {
          label: '变异系数',
          key: 'byxs',
          value: '',
          rules: true
        },
        {
          label: '平滑度',
          key: 'center',
          value: '',
          rules: true
        },
        {
          label: '标准偏度系数',
          key: 'bzpdxs',
          value: '',
          rules: true
        },
        {
          label: '标准峰度系数',
          key: 'bzfdxs',
          value: '',
          rules: true
        },
        {
          label: '熵',
          key: 's',
          value: '',
          rules: true
        },
        {
          label: '像长特征',
          key: 'xctz',
          value: '',
          rules: true
        },
        // {
        //   label: "目标包络",
        //   key: "mbbl",
        //   value: "",
        //   rules: true,
        // },
        {
          label: '船长特征',
          key: 'cztz',
          value: '',
          rules: true
        },
        {
          label: '对称性特征',
          key: 'dcxtz',
          value: '',
          rules: true
        },
        {
          label: '离散性特征',
          key: 'lsxtz',
          value: '',
          rules: true
        },
        {
          label: '中心矩特征',
          key: 'zxjtz',
          value: '',
          rules: true
        },
        {
          label: '扩展中心矩特征',
          key: 'kzzxtz',
          value: '',
          rules: true
        },
        {
          label: '峰堆特征',
          key: 'fdtz',
          value: '',
          rules: true
        },
        {
          label: '散射点数量',
          key: 'ssdsl',
          value: '',
          rules: true
        }
        ],
        '1sky': [
        {
          label: '天气',
          key: 'tq',
          value: '',
          rules: true
        },
        {
          label: '雷达号',
          key: 'ldh',
          value: '',
          rules: true
        },
        {
          label: '批号',
          key: 'ph',
          value: '',
          rules: true
        },
        {
          label: '标识',
          key: 'bs',
          value: '',
          rules: true
        },
        {
          label: '雷达带宽',
          key: 'b',
          value: '',
          rules: true
        },
        {
          label: '雷达采样频率',
          key: 'fs',
          value: '',
          rules: true
        },
        {
          label: '目标方位',
          key: 'azi',
          value: '',
          rules: true
        },
        {
          label: '目标航向',
          key: 'course',
          value: '',
          rules: true
        },
        {
          label: '干扰',
          key: 'gr',
          value: '',
          rules: true
        }
        ],
        2: [{
          label: '模板ID',
          key: 'templateId',
          rules: true
        },
        {
          label: 'v1',
          key: 'passWord',
          rules: true
        },

        {
          label: 'v3',
          key: 'passWord',
          rules: true
        }
        ],
        2: [{
          label: '模板ID',
          key: 'templateId',
          rules: true
        },
        {
          label: 'v1',
          key: 'passWord',
          rules: true
        },

        {
          label: 'v3',
          key: 'passWord',
          rules: true
        }
        ],
        3: [{
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: 'v1',
          key: 'passWord',
          rules: true
        },
        {
          label: 'v2',
          key: 'passWord',
          rules: true
        }, {
          label: 'v3',
          key: 'passWord',
          rules: true
        }
        ],
        3: [{
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: 'v1',
          key: 'passWord',
          rules: true
        },
        {
          label: 'v2',
          key: 'passWord',
          rules: true
        }, {
          label: 'v3',
          key: 'passWord',
          rules: true
        }
        ],
        4: [{
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: 'v1',
          key: 'passWord',
          rules: true
        },
        {
          label: 'v2',
          key: 'passWord',
          rules: true
        }, {
          label: 'v3',
          key: 'passWord',
          rules: true
        }
        ],
        5: [{
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }
        ],
        6: [{
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }],
        7: [{
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }],
        8: [{
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }, {
          label: '姓名',
          key: 'name',
          rules: true
        }]
        // 9: [{
        //   label: "姓名",
        //   key: "name",
        //   rules: true,
        // }, ],
      },
      editInfos: {
        '1sea': [{
          label: '雷达号',
          key: 'ldh',
          value: '',
          rules: true
        },
        {
          label: '批号',
          key: 'ph',
          value: '',
          rules: true
        },
        {
          label: '方位',
          key: 'fw',
          value: '',
          rules: true
        },
        {
          label: '距离',
          key: 'jl',
          value: '',
          rules: true
        },
        {
          label: '航向',
          key: 'hx',
          value: '',
          rules: true
        },
        {
          label: '航速',
          key: 'hs',
          value: '',
          rules: true
        },
        {
          label: '姿态角',
          key: 'ztj',
          value: '',
          rules: true
        },
        {
          label: '像长',
          key: 'xc',
          value: '',
          rules: true
        },
        {
          label: '真实像长',
          key: 'zsxc',
          value: '',
          rules: true
        },
        {
          label: '像起点',
          key: 'xqd',
          value: '',
          rules: true
        },
        {
          label: '像终点',
          key: 'xzd',
          value: '',
          rules: true
        },
        {
          label: '观通站名',
          key: 'gtzm',
          value: '',
          rules: true
        },
        {
          label: '班长名',
          key: 'bzm',
          value: '',
          rules: true
        },
        {
          label: '海况',
          key: 'hk',
          value: '',
          rules: true
        },
        {
          label: '干扰',
          key: 'gr',
          value: '',
          rules: true
        },
        {
          label: '国家地区',
          key: 'gjdq',
          value: '',
          rules: true
        },
        {
          label: '型号',
          key: 'xh',
          value: '',
          rules: true
        },
        {
          label: '舷号',
          key: 'xih',
          value: '',
          rules: true
        },
        {
          label: '船类型',
          key: 'type',
          value: '',
          rules: true
        },
        // {
        //   label: '时间',
        //   key: 'shj',
        //   value: '',
        //   rules: true
        // },
        ],
        '1sky': [
        {
          label: '天气',
          key: 'tq',
          value: '',
          rules: true
        },
        {
          label: '雷达号',
          key: 'ldh',
          value: '',
          rules: true
        },
        {
          label: '批号',
          key: 'ph',
          value: '',
          rules: true
        },
        {
          label: '标识',
          key: 'bs',
          value: '',
          rules: true
        },
        {
          label: '雷达带宽',
          key: 'b',
          value: '',
          rules: true
        },
        {
          label: '雷达采样频率',
          key: 'fs',
          value: '',
          labelWidth: 130,
          rules: true
        },
        {
          label: '目标方位',
          key: 'azi',
          value: '',
          rules: true
        },
        {
          label: '目标航向',
          key: 'course',
          value: '',
          rules: true
        },
        {
          label: '干扰',
          key: 'gr',
          value: '',
          rules: true
        }
        ],
        '2sea': [

          {
            label: '海况',
            key: 'hk',
            value: '',
            rules: true
          },
          {
            label: '雷达号',
            key: 'ldh',
            value: '',
            rules: true
          },
          {
            label: '批号',
            key: 'ph',
            value: '',
            rules: true
          },
          {
            label: '幅度',
            key: 'fd',
            value: '',
            rules: true
          },
          {
            label: '信噪比',
            key: 'xzb',
            value: '',
            rules: true
          },
          {
            label: 'rcs',
            key: 'rcs',
            value: '',
            rules: true
          },
          {
            label: '干扰',
            key: 'gr',
            value: '',
            rules: true
          }

        ],
        '2sky': [
          {
            label: '天气',
            key: 'tq',
            value: '',
            rules: true
          },
          {
            label: '雷达号',
            key: 'ldh',
            value: '',
            rules: true
          },
          {
            label: '批号',
            key: 'ph',
            value: '',
            rules: true
          },
          {
            label: '幅度',
            key: 'fd',
            value: '',
            rules: true
          },
          {
            label: '信噪比',
            key: 'xzb',
            value: '',
            rules: true
          },
          {
            label: 'rcs',
            key: 'rcs',
            value: '',
            rules: true
          },
          {
            label: '干扰',
            key: 'gr',
            value: '',
            rules: true
          }
        ],
        '3sea': [
          {
            label: '海况',
            key: 'hk',
            value: '',
            rules: true
          },
          {
            label: '雷达号',
            key: 'ldh',
            value: '',
            rules: true
          },
          {
            label: '批号',
            key: 'ph',
            value: '',
            rules: true
          },
          {
            label: '幅度',
            key: 'fd',
            value: '',
            rules: true
          },
          {
            label: '信噪比',
            key: 'xzb',
            value: '',
            rules: true
          },
          {
            label: 'rcs',
            key: 'rcs',
            value: '',
            rules: true
          },
          {
            label: '干扰',
            key: 'gr',
            value: '',
            rules: true
          }
        ],
        '3sky': [
          {
            label: '天气',
            key: 'tq',
            value: '',
            rules: true
          },
          {
            label: '雷达号',
            key: 'ldh',
            value: '',
            rules: true
          },
          {
            label: '批号',
            key: 'ph',
            value: '',
            rules: true
          },
          {
            label: '幅度',
            key: 'fd',
            value: '',
            rules: true
          },
          {
            label: '信噪比',
            key: 'xzb',
            value: '',
            rules: true
          },
          {
            label: 'rcs',
            key: 'rcs',
            value: '',
            rules: true
          },
          {
            label: '干扰',
            key: 'gr',
            value: '',
            rules: true
          }
        ],
        4: [
          {
            label: '雷达号',
            value: '',
            key: 'ldh',
            rules: true
          },
          {
            label: '批号',
            value: '',
            key: 'ph',
            rules: true
          },
          {
            label: '标识',
            value: '',
            key: 'bs',
            rules: true
          },
          {
            label: '雷达带宽(Hz)',
            value: '',
            key: 'b',
            rules: true
          },
          {
            label: '雷达采样频率(Hz)',
            value: '',
            key: 'fs',
            rules: true
          },
          {
            label: '目标方位(°)',
            value: '',
            key: 'azi',
            rules: true
          },
          {
            label: '目标航向(°)',
            value: '',
            key: 'course',
            rules: true
          },
          {
            label: '目标位置',
            value: '',
            key: 'tgtIdx',
            rules: true
          },
          {
            label: '雷达载频(Hz)',
            value: '',
            key: 'fc',
            rules: true
          },
          {
            label: '目标速度(m/s)',
            value: '',
            key: 'v',
            rules: true
          },
          {
            label: '雷达重频(Hz)',
            value: '',
            key: 'p',
            rules: true
          },
          {
            label: '脉冲数(次)',
            value: '',
            key: 'pluseN',
            rules: true
          }
        ],
        5: [{
          label: '姓名',
          key: 'name',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        }
        ],
        6: [{
          label: '姓名',
          key: 'name',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        }
        ],
        7: [{
          label: '姓名',
          key: 'name',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        }
        ],
        8: [{
          label: '姓名',
          key: 'name',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          value: '',
          rules: true
        }
        ]
        // 9: [{
        //   label: "姓名",
        //   key: "name",
        //   value: "",
        //   rules: true,
        // }, ],
      }
    }
  }
}
