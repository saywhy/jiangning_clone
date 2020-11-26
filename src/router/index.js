/* eslint-disable no-new */

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let moban = [{
  path: `/moban1`,
  name: `moban1`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban1`)
}, {
  path: `/moban2`,
  name: `moban2`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban2`)
}, {
  path: `/moban3`,
  name: `moban3`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban3`)
}, {
  path: `/moban4`,
  name: `moban4`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban4`)
}, {
  path: `/moban5`,
  name: `moban5`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban5`)
}, {
  path: `/moban6`,
  name: `moban6`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban6`)
}, {
  path: `/moban7`,
  name: `moban7`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban7`)
}, {
  path: `/moban8`,
  name: `moban8`,
  meta: {
    name: '模版数据'
  },
  component: () => import(`@/view/offLine/tempData/moban8`)
// , {
//   path: `/moban9`,
//   name: `moban9`,
//   meta: {
//     name: '模版数据'
//   },
//   component: () => import(`@/view/offLine/tempData/moban9`)
// }
}]

let featureData = [{
  path: `/featureData1`,
  name: `featureData1`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData1`)
}, {
  path: `/featureData2`,
  name: `featureData2`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData2`)
}, {
  path: `/featureData3`,
  name: `featureData3`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData3`)
}, {
  path: `/featureData4`,
  name: `featureData4`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData4`)
}, {
  path: `/featureData5`,
  name: `featureData5`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData5`)
}, {
  path: `/featureData6`,
  name: `featureData6`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData6`)
}, {
  path: `/featureData7`,
  name: `featureData7`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData7`)
}, {
  path: `/featureData8`,
  name: `featureData8`,
  meta: {
    name: '特征数据'
  },
  component: () => import(`@/view/offLine/featureData/featureData8`)
// }
// , {
//   path: `/featureData9`,
//   name: `featureData9`,
//   meta: {
//     name: '特征数据'
//   },
//   component: () => import(`@/view/offLine/featureData/featureData9`)
}]

let featureAnalysisData = [{
  path: `/featureAnalysisData1`,
  name: `featureAnalysisData1`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData1`)
}, {
  path: `/featureAnalysisData2`,
  name: `featureAnalysisData2`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData2`)
}, {
  path: `/featureAnalysisData3`,
  name: `featureAnalysisData3`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData3`)
}, {
  path: `/featureAnalysisData4`,
  name: `featureAnalysisData4`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData4`)
}, {
  path: `/featureAnalysisData5`,
  name: `featureAnalysisData5`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData5`)
}, {
  path: `/featureAnalysisData6`,
  name: `featureAnalysisData6`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData6`)
}, {
  path: `/featureAnalysisData7`,
  name: `featureAnalysisData7`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData7`)
}, {
  path: `/featureAnalysisData8`,
  name: `featureAnalysisData8`,
  meta: {
    name: '特征分析数据'
  },
  component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData8`)
// }, {
//   path: `/featureAnalysisData9`,
//   name: `featureAnalysisData9`,
//   meta: {
//     name: '特征分析数据'
//   },
//   component: () => import(`@/view/offLine/featureAnalysisData/featureAnalysisData9`)
}]

let offLineRouters = [{
  path: '',
  name: 'home',
  meta: {
    name: '首页'
  },
  component: () => import('@/view/offLine/home')
},
{
  path: '/userManage',
  name: 'userManage',
  meta: {
    name: '用户管理'
  },
  component: () => import('@/view/offLine/userManage')
}
]

export default new Router({
  mode: 'history',
  // base: '/qr-code-web/',
  routes: [{
    path: '*',
    redirect: '/home'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/view/layout/login')
  },
    // 数字管理系统-jianing
  {
    path: '/',
    component: () => import('@/view/offLine/main'),
    children: [
      ...offLineRouters,
      ...featureData,
      ...moban,
      ...featureAnalysisData, {
        path: '/sysLog',
        name: 'sysLog',
        meta: {
          name: '系统日志'
        },
        component: () => import('@/view/offLine/sysLog')
      }, {
        path: '/testLog',
        name: 'testLog',
        meta: {
          name: '测试页面'
        },
        component: () => import('@/view/offLine/testLog')
      }, {
        path: '/sysStatus',
        name: 'sysStatus',
        meta: {
          name: '系统状态'
        },
        component: () => import('@/view/offLine/sysStatus')
      }, {
        path: '/featureView',
        name: 'featureView',
        meta: {
          name: '特征提取'
        },
        component: () => import('@/view/offLine/common/featureView')
      }, {
        path: '/infoView',
        name: 'infoView',
        meta: {
          name: '查看信息'
        },
        component: () => import('@/view/offLine/common/infoView')
      },
      {
        path: '/infoViewJEM',
        name: 'infoViewJEM',
        meta: {
          name: '查看JEM信息'
        },
        component: () => import('@/view/offLine/common/infoViewJEM')
      },
      {
        path: '/featureAnalysisDataSingle',
        name: 'featureAnalysisDataSingle',
        meta: {
          name: '单条特征分析'
        },
        component: () => import('@/view/offLine/common/featureAnalysisDataSingle')
      }
    ]
  }
  ]
})
