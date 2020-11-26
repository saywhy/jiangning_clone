<template>
  <Layout :info="userInfo" @logout="logout" :infos ="infos" logo="离线目标特征库管理系统">
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from '@/view/layout/main'
import login from '@/view/layout/login'
import { logout } from '@/api/app'
export default {
  components: {
    Layout,
    login
  },
  data () {
    return {
      userInfo: { name: 'ziChin' },
      infos: []
    }
  },
  computed: {
    isLogin () {
      return this.$route.path === '/login'
    }
  },
  created () {
    let userInfo = sessionStorage.getItem('userInfo')

    if (!userInfo) {
      this.$router.push('/login')
    } else {
      userInfo = JSON.parse(userInfo)
      this.userInfo = userInfo

      this.initInfos()
    }
  },
  methods: {
    logout (v) {
      this.userInfo = null
      logout()
      sessionStorage.removeItem('userInfo')
      this.$router.push('/login')
    },
    initInfos () {
      this.infos = [
        {
          name: 'home',
          label: '首页',
          icon: 'ios-analytics'
        },
        {
          name: 'userManage',
          label: '用户管理',
          icon: 'ios-people',
          hidden: this.userInfo.role === '1'
        },
        {
          name: 'data',
          label: '数据类型',
          icon: 'ios-filing',
          children: [
            {
              name: 'data-1',
              label: '宽带HRRP数据',
              icon: 'ios-paper',
              children: [
                {
                  name: 'moban1',
                  label: '模版数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureData1',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData1',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-2',
              label: '宽带RCS数据',
              icon: 'ios-paper',
              children: [
                {
                  name: 'moban2',
                  label: '模版数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureData2',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData2',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-3',
              label: '窄带RCS数据',
              icon: 'ios-paper',
              children: [
                {
                  name: 'moban3',
                  label: '模版数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureData3',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData3',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-4',
              label: 'JEM数据',
              icon: 'ios-paper',
              children: [
                {
                  name: 'moban4',
                  label: '模版数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureData4',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData4',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-5',
              label: '点航迹数据',
              icon: 'ios-paper',
              children: [
                // {
                //   name: 'moban5',
                //   label: '模版数据',
                //   icon: 'md-document'
                // },
                {
                  name: 'featureData5',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData5',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-6',
              label: 'AIS数据',
              icon: 'ios-paper',
              children: [
                // {
                //   name: 'moban6',
                //   label: '模版数据',
                //   icon: 'md-document'
                // },
                {
                  name: 'featureData6',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData6',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-7',
              label: 'ADS-B数据',
              icon: 'ios-paper',
              children: [
                // {
                //   name: 'moban7',
                //   label: '模版数据',
                //   icon: 'md-document'
                // },
                {
                  name: 'featureData7',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData7',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            },
            {
              name: 'data-8',
              label: 'GPS数据',
              icon: 'ios-paper',
              children: [
                // {
                //   name: 'moban8',
                //   label: '模版数据',
                //   icon: 'md-document'
                // },
                {
                  name: 'featureData8',
                  label: '特征数据',
                  icon: 'md-document'
                },
                {
                  name: 'featureAnalysisData8',
                  label: '特征分析数据',
                  icon: 'ios-stats'
                }
              ]
            }
            // {
            //   name: 'data-9',
            //   label: '雷达HRRP数据',
            //   icon: 'ios-paper',
            //   children: [
            //     {
            //       name: 'rawData9',
            //       label: '原始数据',
            //       icon: 'md-document'
            //     },
            //     {
            //       name: 'moban9',
            //       label: '模版数据',
            //       icon: 'md-document'
            //     },
            //     {
            //       name: 'featureData9',
            //       label: '特征数据',
            //       icon: 'md-document'
            //     },
            //     {
            //       name: 'featureAnalysisData9',
            //       label: '特征分析数据',
            //       icon: 'ios-stats'
            //     }
            //   ]
            // }

          ]
        },
        {
          name: 'sysLog',
          label: '系统日志',
          icon: 'ios-construct',
          hidden: this.userInfo.role === '1'
        },
        {
          name: 'sysStatus',
          label: '系统状态',
          icon: 'ios-construct'
        },
        {
          name: 'testLog',
          label: '测试页面',
          icon: 'ios-construct'
        }
        // {
        //   name: '2',
        //   label: '设计输入',
        //   icon: 'ios-people',
        //   hidden: this.userInfo.type === 1,
        //   children: [
        //     {
        //       name: '2-1',
        //       label: '网络系统图',
        //       icon: 'md-photos',
        //       children: [
        //         {
        //           name: 'networkServerSystem',
        //           label: '单交接箱',
        //           icon: 'md-photos'
        //         },
        //         {
        //           name: 'networkServerSystem2',
        //           label: '双交接箱',
        //           icon: 'md-photos'
        //         }
        //       ]
        //     },
        //     {
        //       name: 'kmlManage',
        //       label: '光缆线路图',
        //       icon: 'md-photos'
        //     },
        //     {
        //       name: '2-3',
        //       label: '宽带光缆分布图',
        //       icon: 'md-photos',
        //       children: [
        //         {
        //           name: 'fbt',
        //           label: '288芯',
        //           icon: 'md-photos'
        //         },
        //         {
        //           name: 'fbt2',
        //           label: '576芯',
        //           icon: 'md-photos'
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   name: 'contrastManage',
        //   label: '图标对比',
        //   icon: 'md-cloudy'
        // },
        // {
        //   name: 'historyManage',
        //   label: '历史记录',
        //   icon: 'md-cloudy'
        // }
      ]
    }
  }
}
</script>
