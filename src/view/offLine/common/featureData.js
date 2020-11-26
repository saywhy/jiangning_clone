import Dropdown from './Dropdown'

export default {
  data() {
    return {
      index: this.$route.name.slice(-1),
      dialogShow: false,
      dialogEditShow: false,
      dialogDelShow: false,
      dialogExpShow: false,
      dialogImportShow: false,
      currentInfo: {},
      currentInfos: [],
      // 查询
      searchDataMap: {
        1: [
          {
            label: '雷达号',
            labelWidth: 90,
            key: 'ldbh'
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
          }
        ],
        2: [    {
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
        3: [    {
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
        4: [{
          label: '目标调制周期',
          labelWidth: 90,
          key: 'mbtzzq'
        },
        {
          label: '目标谱线根数',
          labelWidth: 90,
          key: 'mbpxgs'
        },
        {
          label: '普标谱宽',
          labelWidth: 90,
          key: 'pbpk'
        }],
        5: [{
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
          label: '方位',
          labelWidth: 90,
          key: 'fw'
        },
        {
          label: '距离',
          labelWidth: 90,
          key: 'jl'
        },
        {
          label: '高度',
          labelWidth: 90,
          key: 'gd'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        }],
        6: [{
          label: 'MMSI',
          labelWidth: 90,
          key: 'mmsi'
        },
        {
          label: 'IMO',
          labelWidth: 90,
          key: 'imo'
        },
        {
          label: '类型',
          labelWidth: 90,
          key: 'lx'
        },
        {
          label: '国家地区',
          labelWidth: 90,
          key: 'gjdq'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        }],
        7: [{
          label: '目标经度',
          labelWidth: 90,
          key: 'mbjd'
        },
        {
          label: '目标纬度',
          labelWidth: 90,
          key: 'mbwd'
        },
        {
          label: '目标高度',
          labelWidth: 90,
          key: 'mbgd'
        },
        {
          label: '目标国籍',
          labelWidth: 90,
          key: 'mbgj'
        },
        {
          label: '目标类型',
          labelWidth: 90,
          key: 'mblx'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        }],
        8: [{
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
          label: '纬度',
          labelWidth: 90,
          key: 'wd'
        },
        {
          label: '经度',
          labelWidth: 90,
          key: 'jd'
        },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'sj1,sj2',
          type: 'date'
        }]
        // 9: [{
        //   label: "条件1",
        //   labelWidth: 90,
        //   key: "title",
        // }, ],
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
            this.dialogImportShow = true;
          },
          hidden: this.$route.name.slice(-1) <= 4
        },
        {
          label: '导出',
          click: () => this.exportData()
        }
      ],
      columnsMap: {
        1: [{
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
            title: '批号',
            align: 'center',
            minWidth: 90,
            key: 'ph'
          },
          {
            title: '雷达编号',
            align: 'center',
            minWidth: 90,
            key: 'ldbh'
          },
          {
            title: '模板ID',
            align: 'center',
            minWidth: 90,
            key: 'templateId'
          },
          {
            title: '均值',
            align: 'center',
            minWidth: 90,
            key: 'jz'
          },
          {
            title: '极小值',
            align: 'center',
            minWidth: 90,
            key: 'jxz'
          },
          {
            title: '极大值',
            align: 'center',
            minWidth: 90,
            key: 'jdz'
          },
          {
            title: '极差',
            align: 'center',
            minWidth: 90,
            key: 'jc'
          },
          {
            title: '标准差',
            align: 'center',
            minWidth: 90,
            key: 'bzc'
          },
          {
            title: '变异系数',
            align: 'center',
            minWidth: 90,
            key: 'byxs'
          },
          {
            title: '平滑度',
            align: 'center',
            minWidth: 90,
            key: 'phd'
          },
          {
            title: '标准偏度系数',
            align: 'center',
            minWidth: 90,
            key: 'bzpdxs'
          },
          {
            title: '标准峰度系数',
            align: 'center',
            minWidth: 90,
            key: 'bzfdxs'
          },
          {
            title: '熵',
            align: 'center',
            minWidth: 90,
            key: 's'
          },
          {
            title: '像长特征',
            align: 'center',
            minWidth: 90,
            key: 'xctz'
          },
          {
            title: '目标包络',
            align: 'center',
            minWidth: 90,
            key: 'mbbl'
          },
          {
            title: '长度特征',
            align: 'center',
            minWidth: 90,
            key: 'cctz'
          },
          {
            title: '对称性特征',
            align: 'center',
            minWidth: 90,
            key: 'dcxtz'
          },
          {
            title: '离散性特征',
            align: 'center',
            minWidth: 90,
            key: 'lsxtz'
          },
          {
            title: '中心矩特征',
            align: 'center',
            minWidth: 90,
            key: 'zxjtz'
          },
          {
            title: '扩展中心矩特征',
            align: 'center',
            minWidth: 90,
            key: 'kzzxtz'
          },
          {
            title: '峰堆特征',
            align: 'center',
            minWidth: 90,
            key: 'fdtz'
          },
          {
            title: '散射点数量',
            align: 'center',
            minWidth: 90,
            key: 'ssdsl'
          },
          {
            title: '傅里叶变换',
            align: 'center',
            minWidth: 90,
            key: 'flybh---'
          },
          {
            title: '小波变换',
            align: 'center',
            minWidth: 90,
            key: 'xbbh---'
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
            width: 150,
            render: (h, {
                row
              }) =>
              h('div', [
                h(Dropdown, {
                  props: {
                    row,
                    index: 'f1'
                  }
                })
              ])
          }
        ],
        2: [{
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
            title: '批号',
            align: 'center',
            minWidth: 90,
            key: 'ph'
          },
          {
            title: '雷达编号',
            align: 'center',
            minWidth: 90,
            key: 'ldbh'
          },
          {
            title: '模板ID',
            align: 'center',
            minWidth: 90,
            key: 'templateId'
          },
          {
            title: '均值',
            align: 'center',
            minWidth: 90,
            key: 'jz'
          },
          {
            title: '极小值',
            align: 'center',
            minWidth: 90,
            key: 'jxz'
          },
          {
            title: '极大值',
            align: 'center',
            minWidth: 90,
            key: 'jdz'
          },
          {
            title: '极差',
            align: 'center',
            minWidth: 90,
            key: 'jc'
          },
          {
            title: '标准差',
            align: 'center',
            minWidth: 90,
            key: 'bzc'
          },
          {
            title: '变异系数',
            align: 'center',
            minWidth: 90,
            key: 'byxs'
          },
          {
            title: '平滑度',
            align: 'center',
            minWidth: 90,
            key: 'phd'
          },
          {
            title: '标准偏度系数',
            align: 'center',
            minWidth: 90,
            key: 'bzpdxs'
          },
          {
            title: '标准峰度系数',
            align: 'center',
            minWidth: 90,
            key: 'bzfdxs'
          },
          {
            title: '熵',
            align: 'center',
            minWidth: 90,
            key: 's'
          },
          {
            title: '像长特征',
            align: 'center',
            minWidth: 90,
            key: 'xctz'
          },
          {
            title: '目标包络',
            align: 'center',
            minWidth: 90,
            key: 'mbbl'
          },
          {
            title: '长度特征',
            align: 'center',
            minWidth: 90,
            key: 'cctz'
          },
          {
            title: '对称性特征',
            align: 'center',
            minWidth: 90,
            key: 'dcxtz'
          },
          {
            title: '离散性特征',
            align: 'center',
            minWidth: 90,
            key: 'lsxtz'
          },
          {
            title: '中心矩特征',
            align: 'center',
            minWidth: 90,
            key: 'zxjtz'
          },
          {
            title: '扩展中心矩特征',
            align: 'center',
            minWidth: 90,
            key: 'kzzxtz'
          },
          {
            title: '峰堆特征',
            align: 'center',
            minWidth: 90,
            key: 'fdtz'
          },
          {
            title: '散射点数量',
            align: 'center',
            minWidth: 90,
            key: 'ssdsl'
          },
          {
            title: '傅里叶变换',
            align: 'center',
            minWidth: 90,
            key: 'flybh---'
          }, {
            title: '小波变换',
            align: 'center',
            minWidth: 90,
            key: 'xbbh---'
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

                h(Dropdown, {
                  props: {
                    row,
                    index: 'f2'
                  }
                })
              ])
          }
        ],
        3: [{
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
            title: '批号',
            align: 'center',
            minWidth: 90,
            key: 'ph'
          },
          {
            title: '雷达编号',
            align: 'center',
            minWidth: 90,
            key: 'ldbh'
          },
          {
            title: '模板ID',
            align: 'center',
            minWidth: 90,
            key: 'templateId'
          },
          {
            title: '均值',
            align: 'center',
            minWidth: 90,
            key: 'jz'
          },
          {
            title: '极小值',
            align: 'center',
            minWidth: 90,
            key: 'jxz'
          },
          {
            title: '极大值',
            align: 'center',
            minWidth: 90,
            key: 'jdz'
          },
          {
            title: '极差',
            align: 'center',
            minWidth: 90,
            key: 'jc'
          },
          {
            title: '标准差',
            align: 'center',
            minWidth: 90,
            key: 'bzc'
          },
          {
            title: '变异系数',
            align: 'center',
            minWidth: 90,
            key: 'byxs'
          },
          {
            title: '平滑度',
            align: 'center',
            minWidth: 90,
            key: 'phd'
          },
          {
            title: '标准偏度系数',
            align: 'center',
            minWidth: 90,
            key: 'bzpdxs'
          },
          {
            title: '标准峰度系数',
            align: 'center',
            minWidth: 90,
            key: 'bzfdxs'
          },
          {
            title: '熵',
            align: 'center',
            minWidth: 90,
            key: 's'
          },
          {
            title: '像长特征',
            align: 'center',
            minWidth: 90,
            key: 'xctz'
          },
          {
            title: '目标包络',
            align: 'center',
            minWidth: 90,
            key: 'mbbl'
          },
          {
            title: '长度特征',
            align: 'center',
            minWidth: 90,
            key: 'cctz'
          },
          {
            title: '对称性特征',
            align: 'center',
            minWidth: 90,
            key: 'dcxtz'
          },
          {
            title: '离散性特征',
            align: 'center',
            minWidth: 90,
            key: 'lsxtz'
          },
          {
            title: '中心矩特征',
            align: 'center',
            minWidth: 90,
            key: 'zxjtz'
          },
          {
            title: '扩展中心矩特征',
            align: 'center',
            minWidth: 90,
            key: 'kzzxtz'
          },
          {
            title: '峰堆特征',
            align: 'center',
            minWidth: 90,
            key: 'fdtz'
          },
          {
            title: '散射点数量',
            align: 'center',
            minWidth: 90,
            key: 'ssdsl'
          },
          {
            title: '傅里叶变换',
            align: 'center',
            minWidth: 90,
            key: 'flybh---'
          }, {
            title: '小波变换',
            align: 'center',
            minWidth: 90,
            key: 'xbbh---'
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

                h(Dropdown, {
                  props: {
                    row,
                    index: 'f3'
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
          //   title: '模板id',
          //   align: 'center',
          //   minWidth: 90,
          //   key: 'templateId'
          // },
          {
            title: '目标调制周期',
            align: 'center',
            minWidth: 90,
            key: 'mbtzzq'
          },
          {
            title: '目标谱线根数',
            align: 'center',
            minWidth: 90,
            key: 'mbpxgs'
          },
          {
            title: '普标谱宽',
            align: 'center',
            minWidth: 90,
            key: 'mbpk'
          },
          {
            title: '目标包络',
            align: 'center',
            minWidth: 90,
            key: 'mbbl'
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
                h(Dropdown, {
                  props: {
                    row,
                    index: 'f4'
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
          // {
          //   title: '特征id',
          //   align: 'center',
          //   minWidth: 90,
          //   key: 'id'
          // },
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
            title: '姿态角',
            align: 'center',
            minWidth: 90,
            key: 'ztj'
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
          // {
          //   title: '特征id',
          //   align: 'center',
          //   minWidth: 90,
          //   key: 'id'
          // },
          {
            title: 'ais_mmsi',
            align: 'center',
            minWidth: 90,
            key: 'aismmsi'
          },
          {
            title: 'imo',
            align: 'center',
            minWidth: 90,
            key: 'imo'
          },
          {
            title: '呼号',
            align: 'center',
            minWidth: 90,
            key: 'hh'
          },
          {
            title: '船名',
            align: 'center',
            minWidth: 90,
            key: 'cm'
          },
          {
            title: '类型',
            align: 'center',
            minWidth: 90,
            key: 'lx'
          },
          {
            title: '船长',
            align: 'center',
            minWidth: 90,
            key: 'cc'
          },
          {
            title: '船宽',
            align: 'center',
            minWidth: 90,
            key: 'ck'
          },
          {
            title: '定位设备',
            align: 'center',
            minWidth: 90,
            key: 'dwsb'
          },
          {
            title: '国家地区',
            align: 'center',
            minWidth: 90,
            key: 'gjdq'
          },
          {
            title: '状态',
            align: 'center',
            minWidth: 90,
            key: 'zt'
          },
          {
            title: '转向率',
            align: 'center',
            minWidth: 90,
            key: 'zxl'
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
            title: '位置经度',
            align: 'center',
            minWidth: 90,
            key: 'wzjd'
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
          // {
          //   title: '特征id',
          //   align: 'center',
          //   minWidth: 90,
          //   key: 'id'
          // },
          {
            title: '本地经度',
            align: 'center',
            minWidth: 90,
            key: 'bdjd'
          },
          {
            title: '本地纬度',
            align: 'center',
            minWidth: 90,
            key: 'bdwd'
          },
          {
            title: '本地高度',
            align: 'center',
            minWidth: 90,
            key: 'bdgd'
          },
          {
            title: '目标经度',
            align: 'center',
            minWidth: 90,
            key: 'mbjd'
          },
          {
            title: '目标纬度',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
          },
          {
            title: '目标高度',
            align: 'center',
            minWidth: 90,
            key: 'mbgd'
          },
          {
            title: '目标国籍',
            align: 'center',
            minWidth: 90,
            key: 'mbgj'
          },
          {
            title: '目标类型',
            align: 'center',
            minWidth: 90,
            key: 'mblx'
          },
          {
            title: '目标身份',
            align: 'center',
            minWidth: 90,
            key: 'mbsf'
          },
          {
            title: '目标航速',
            align: 'center',
            minWidth: 90,
            key: 'mbhs'
          },
          {
            title: '目标航向',
            align: 'center',
            minWidth: 90,
            key: 'mbhx'
          },
          {
            title: '目标升降率',
            align: 'center',
            minWidth: 90,
            key: 'mbsjl'
          },
          {
            title: '速度导航精度类别',
            align: 'center',
            minWidth: 90,
            key: 'sddhjdlb'
          },
          {
            title: '源于大气压高度差',
            align: 'center',
            minWidth: 90,
            key: 'yydqygdc'
          },
          {
            title: '目标意图高度',
            align: 'center',
            minWidth: 90,
            key: 'mbytgd'
          },
          {
            title: '目标意图航向',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
          },
          {
            title: '位置导航精度类别',
            align: 'center',
            minWidth: 90,
            key: '位置导航精度类别'
          },
          {
            title: '监视完整性精度类别',
            align: 'center',
            minWidth: 90,
            key: 'jswzxjdlb'
          },
          {
            title: '紧急/优先状态',
            align: 'center',
            minWidth: 90,
            key: 'jjyxzt'
          },
          {
            title: '目标长/宽',
            align: 'center',
            minWidth: 90,
            key: 'mbck'
          },
          {
            title: '目标纬度',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
          },
          {
            title: '目标纬度',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
          },
          {
            title: '目标纬度',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
          },
          {
            title: '目标纬度',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
          },
          {
            title: '目标纬度',
            align: 'center',
            minWidth: 90,
            key: 'mbwd'
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
          // {
          //   title: '特征id',
          //   align: 'center',
          //   minWidth: 90,
          //   key: 'id'
          // },
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
        1: [{
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
            label: '长度特征',
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
        1: [{
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
            label: '长度特征',
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
          },
          {
            label: '傅里叶变换',
            key: 'flybh',
            value: '',
            rules: true
          },
          {
            label: '小波变换',
            key: 'xbbh',
            value: '',
            rules: true
          }
        ],
        2: [{
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
          }
        ],
        3: [{
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
          }
        ],
        4: [{
          label: '姓名',
          key: 'name',
          value: '',
          rules: true
        }],
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
