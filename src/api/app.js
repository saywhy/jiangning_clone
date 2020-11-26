import {
  get,
  post,
  postDWG
} from './https'
import {
  formatTime
} from './tools'
export {
  formatTime
}
// 获取图片url
export const getFileUrl = file => {
  let getUrl = null
  if (window.createObjectURL !== undefined) { // basic
    getUrl = window.createObjectURL(file)
  } else if (window.URL !== undefined) { // mozilla(firefox)
    getUrl = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) { // webkit or chrome
    getUrl = window.webkitURL.createObjectURL(file)
  }
  return getUrl
}
export let base64Prefix = 'data:image/png;base64,' + ''
// 图片base64转文件
export const base64ImgtoFile = (dataurl = base64Prefix, filename = 'img' + Date.parse(new Date())) => {
  let base64 = dataurl.split(',')[1]
  if (base64) {
    base64 = base64.replace(/-/g, '+')
  }
  if (base64) {
    base64 = base64.replace(/_/g, '/')
  }
  let bstr = window.atob(base64)
  bstr = decodeURIComponent(escape(bstr))
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${'upload.jpeg'}`, {
    type: 'image/jpeg',
    lastModified: Date.now()
  })
}

export let isDevelop = /^192\.168\..*8080$/.test(location.host)
export let baseUrl = '/api' // proxy 'config/index.js'

/**
 * 获取tableData
 */
export const getTableData = (param) => {
  let {
    page,
    size,
    name = '',
    phone = ''
  } = param
  return get(`${baseUrl}/qr-code/api/getList/${page}/${size}?name=${name}&phone=${phone}`)
}

/**
 * 新增内容
 */
export const newReply = (param) => {
  return post(`${baseUrl}/shenzhen/userRelevant/addPartyReplay`, param)
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  let userInfo = sessionStorage.getItem('userInfo')
  return JSON.parse(userInfo)
}

/**
 * 登录
 */
export const login = (param) => {
  return post(`${baseUrl}/login`, param)
}
/**
 * 登出
 */
export const logout = () => {
  console.log('登出...')
  return post(`${baseUrl}/logout`)
}
/**
 * 用户列表
 */
export const userList = (param) => {
  return post(`${baseUrl}/user/list`, param)
}
/**
 * 用户列表
 * 新增
 */
export const userAdd = (param) => {
  let createUser = getUserInfo().id
  return post(`${baseUrl}/user/saveOrUpdate`, {
    ...param,
    createUser
  })
}
/**
 * 用户列表
 * 删除
 */
export const userDel = (param) => {
  return post(`${baseUrl}/user/delete`, param)
}
/**
 * 对比表格
 * 展示
 */
export const contrastList = (param) => {
  return post(`${baseUrl}/contrast/list`, param)
}
/**
 * 对比表格
 * 删除
 * contrast
 */
export const contrastDel = (param) => {
  return post(`${baseUrl}/contrast/delete`, param)
}
/**
 * 对比表格
 * 新增
 */
export const contrastAdd = (param) => {
  let createUser = getUserInfo().id
  return post(`${baseUrl}/contrast/add`, {
    ...param,
    createUser
  })
}
export const downImg = async (param) => {
  let { data } = await post(`${baseUrl}/file/download`, param)
  return 'data:image/png;base64,' + data
}
/**
 * 上传klm
 */
export const uploadKlm = (param) => {
  return postDWG(`${baseUrl}/upload/uploadAction`, param)
}
/**
 * 上传图片
 */
export const uploadImg = (file) => {
  let type = file.typeStatus
  let typeStatusOrder = file.typeStatusOrder
  let param = new FormData()
  param.append('file', file)
  param.append('type', type)
  param.append('status', typeStatusOrder)
  return post(`${baseUrl}/file/uploadFile`, param)
}
/**
 * 对比表格
 * 展示
 */
export const historyList = (param) => {
  return post(`${baseUrl}/history/list`, param)
}
/**
 * 图1
 */
export const netWoekServerDwg = (param) => {
  return get(`${baseUrl}/netWorkSystem/uploadAction?params="${param}"`)
}

/**
 * 111宽带HRRP数据
 */
export const HRRPTemplateList = (param) => {
  return post(`${baseUrl}/HRRPTemplate/list`, param)
}
export const HRRPTemplateAddOrUpdate = (param) => {
  return post(`${baseUrl}/HRRPTemplate/saveOrUpdate`, param)
}
export const HRRPTemplateDel = (param) => {
  return post(`${baseUrl}/HRRPTemplate/delete`, param)
}
/**空中 */
export const HRRPSkyTemplateList = (param) => {
  return post(`${baseUrl}/HRRPSkyTemplate/list`, param)
}
export const HRRPSkyTemplateAddOrUpdate = (param) => {
  return post(`${baseUrl}/HRRPSkyTemplate/saveOrUpdate`, param)
}
export const HRRPSkyTemplateDel = (param) => {
  return post(`${baseUrl}/HRRPSkyTemplate/delete`, param)
}
export const getTzData = (param) => {
  return post(`${baseUrl}/hrrptz/getByTemplateId`, param)
}


// 模板获取一维数组
export const getHrrpTemplateHight = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateHight`, param)
}
// 模板获取饼图
export const getHrrpTemplatePieChart = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplatePieChart`, param)
}
// 模板获取柱状图
export const getHrrpTemplateBarChart = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateBraChart`, param)
}

export const getHrrpTemplateArray1 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray1`, param)
}
export const getHrrpTemplateArray2 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray2`, param)
}
export const getHrrpTemplateArray3 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray3`, param)
}
export const getHrrpTemplateArray4 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray4`, param)
}
export const getHrrpTemplateArray5 = (param) => {
  return post(`${baseUrl}/HRRPTemplate/getHrrpAnalysODA`, param)
}
export const getHrrpTemplateArray6 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray6`, param)
}
export const getHrrpTemplateArray7 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray7`, param)
}
export const getHrrpTemplateArray8 = (param) => {
  return post(`${baseUrl}/hrrpTemplateConversion/getHrrpTemplateArray8`, param)
}
export const getHrrpTemplateArray9 = (param) => {
  return post(`${baseUrl}/HRRPSkyTemplate/getHrrpAnalysODA`, param)
}
/**特征查看信息页面 */
export const getHrrpTemplateArray10 = (param) => {
  return post(`${baseUrl}/HRRPTemplate/getHrrpAnalysODA`, param)
}
export const getHrrpTemplateArray11 = (param) => {
  return post(`${baseUrl}/HRRPSkyTemplate/getHrrpAnalysODA`, param)
}
/**特征查看信息页面 */
export const getHrrpTemplateArray12 = (param) => {
  return post(`${baseUrl}/hrrptz/getXbbhById`, param)
}
export const getHrrpTemplateArray13 = (param) => {
  return post(`${baseUrl}/hrrptz/getFlybhById`, param)
}
export const getHrrpTemplateArray14 = (param) => {
  return post(`${baseUrl}/hrrptz/getMbblById`, param)
}



/* 特征 */
export const HRRPList = (param) => {
  return post(`${baseUrl}/hrrptz/list`, param)
}
export const HRRPAddOrUpdate = (param) => {
  return post(`${baseUrl}/hrrptz/saveOrUpdate`, param)
}
export const HRRPDel = (param) => {
  return post(`${baseUrl}/hrrptz/delete`, param)
}
/**
 * 222宽带RCS数据
 */
export const kdRCSTemplateList = (param) => {
  return post(`${baseUrl}/kdTemplate/list`, param)
}
export const kdRCSTemplateAddOrUpdate = (param) => {
  return post(`${baseUrl}/kdTemplate/saveOrUpdate`, param)
}
export const kdRCSTemplateDel = (param) => {
  return post(`${baseUrl}/kdTemplate/delete`, param)
}

export const getKdtzAnalysisArray1 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray1`, param)
}
export const getKdtzAnalysisArray2 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray2`, param)
}
export const getKdtzAnalysisArray3 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray3`, param)
}
export const getKdtzAnalysisArray4 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray4`, param)
}
export const getKdtzAnalysisArray5 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray5`, param)
}
export const getKdtzAnalysisArray6 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray6`, param)
}
export const getKdtzAnalysisArray7 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray7`, param)
}
export const getKdtzAnalysisArray8 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray8`, param)
}
export const getKdtzAnalysisArray9 = (param) => {
  return post(`${baseUrl}/kdtzAnalysis/getKdtzAnalysisArray9`, param)
}

/* 特征 */
export const kdRCSList = (param) => {
  return post(`${baseUrl}/kdtz/list`, param)
}
export const kdRCSAddOrUpdate = (param) => {
  return post(`${baseUrl}/kdtz/saveOrUpdate`, param)
}
export const kdRCSDel = (param) => {
  return post(`${baseUrl}/kdtz/delete`, param)
}
/**
 * 333窄带RCS数据
 */
export const zdRCSTemplateList = (param) => {
  return post(`${baseUrl}/zdTemplate/list`, param)
}
export const zdRCSTemplateAddOrUpdate = (param) => {
  return post(`${baseUrl}/zdTemplate/saveOrUpdate`, param)
}
export const zdRCSTemplateDel = (param) => {
  return post(`${baseUrl}/zdTemplate/delete`, param)
}

export const getZdtzAnalysisArray1 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray1`, param)
}
export const getZdtzAnalysisArray2 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray2`, param)
}
export const getZdtzAnalysisArray3 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray3`, param)
}
export const getZdtzAnalysisArray4 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray4`, param)
}
export const getZdtzAnalysisArray5 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray5`, param)
}
export const getZdtzAnalysisArray6 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray6`, param)
}
export const getZdtzAnalysisArray7 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray7`, param)
}
export const getZdtzAnalysisArray8 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray8`, param)
}
export const getZdtzAnalysisArray9 = (param) => {
  return post(`${baseUrl}/zdtzAnalysis/getZdtzAnalysisArray9`, param)
}

/* 特征 */
export const zdRCSList = (param) => {
  return post(`${baseUrl}/zdtz/list`, param)
}
export const zdRCSAddOrUpdate = (param) => {
  return post(`${baseUrl}/zdtz/saveOrUpdate`, param)
}
export const zdRCSDel = (param) => {
  return post(`${baseUrl}/zdtz/delete`, param)
}
/**
 * 444 JEM数据
 */
export const JEMTemplateList = (param) => {
  return post(`${baseUrl}/jemTemplate/list`, param)
}
export const JEMTemplateAddOrUpdate = (param) => {
  return post(`${baseUrl}/jemTemplate/saveOrUpdate`, param)
}
export const JEMTemplateDel = (param) => {
  return post(`${baseUrl}/jemTemplate/delete`, param)
}

export const getJemtzAnalysisArray1 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray1`, param)
}
export const getJemtzAnalysisArray2 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray2`, param)
}
export const getJemtzAnalysisArray3 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray3`, param)
}
export const getJemtzAnalysisArray4 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray4`, param)
}
export const getJemtzAnalysisArray5 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray5`, param)
}
export const getJemtzAnalysisArray6 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray6`, param)
}
export const getJemtzAnalysisArray7 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray7`, param)
}
export const getJemtzAnalysisArray8 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray8`, param)
}
export const getJemtzAnalysisArray9 = (param) => {
  return post(`${baseUrl}/jemtzAnalysis/getJemtzAnalysisArray9`, param)
}

/* 特征 */
export const JEMList = (param) => {
  return post(`${baseUrl}/jemtz/list`, param)
}
export const JEMAddOrUpdate = (param) => {
  return post(`${baseUrl}/jemtz/saveOrUpdate`, param)
}
export const JEMDel = (param) => {
  return post(`${baseUrl}/jemtz/delete`, param)
}
/**
 * 555 点航迹数据
 */

export const getdhjTZAnalysisArray1 = (param) => {
  return post(`${baseUrl}/dhjTZAnalysis/getdhjTZAnalysisArray1`, param)
}
export const getdhjTZAnalysisArray2 = (param) => {
  return post(`${baseUrl}/dhjTZAnalysis/getdhjTZAnalysisArray2`, param)
}
export const getdhjTZAnalysisArray3 = (param) => {
  return post(`${baseUrl}/dhjTZAnalysis/getdhjTZAnalysisArray3`, param)
}
export const getdhjTZAnalysisArray4 = (param) => {
  return post(`${baseUrl}/dhjTZAnalysis/getdhjTZAnalysisArray4`, param)
}

/** 特征 */
export const DHJList = (param) => {
  return post(`${baseUrl}/pointtrack/list`, param)
}
export const DHJAddOrUpdate = (param) => {
  return post(`${baseUrl}/pointtrack/saveOrUpdate`, param)
}
export const DHJDel = (param) => {
  return post(`${baseUrl}/pointtrack/delete`, param)
}

/**
 * 666  AIS数据
 */

export const getAisAnalysisArray1 = (param) => {
  return post(`${baseUrl}/aisAnalysis/getAisAnalysisArray1`, param)
}
export const getAisAnalysisArray2 = (param) => {
  return post(`${baseUrl}/aisAnalysis/getAisAnalysisArray2`, param)
}
export const getAisAnalysisArray3 = (param) => {
  return post(`${baseUrl}/aisAnalysis/getAisAnalysisArray3`, param)
}
export const getAisAnalysisArray4 = (param) => {
  return post(`${baseUrl}/aisAnalysis/getAisAnalysisArray4`, param)
}

/** 特征 */
export const AISList = (param) => {
  return post(`${baseUrl}/ais/list`, param)
}
export const AISAddOrUpdate = (param) => {
  return post(`${baseUrl}/ais/saveOrUpdate`, param)
}
export const AISDel = (param) => {
  return post(`${baseUrl}/ais/delete`, param)
}

/**
 * 777  ADS-B数据
 */

export const getAdsBTZAnalysisArray1 = (param) => {
  return post(`${baseUrl}/adsBTZAnalysis/getAdsBTZAnalysisArray1`, param)
}
export const getAdsBTZAnalysisArray2 = (param) => {
  return post(`${baseUrl}/adsBTZAnalysis/getAdsBTZAnalysisArray2`, param)
}
export const getAdsBTZAnalysisArray3 = (param) => {
  return post(`${baseUrl}/adsBTZAnalysis/getAdsBTZAnalysisArray3`, param)
}
export const getAdsBTZAnalysisArray4 = (param) => {
  return post(`${baseUrl}/adsBTZAnalysis/getAdsBTZAnalysisArray4`, param)
}

/** 特征 */
export const ADSBList = (param) => {
  return post(`${baseUrl}/adsBTZ/list`, param)
}
export const ADSBAddOrUpdate = (param) => {
  return post(`${baseUrl}/adsBTZ/saveOrUpdate`, param)
}
export const ADSBDel = (param) => {
  return post(`${baseUrl}/adsBTZ/delete`, param)
}

/**
 * 888   GPS数据
 */

export const getGpsTzAnalysisArray1 = (param) => {
  return post(`${baseUrl}/gpsTzAnalysis/getGpsTzAnalysisArray1`, param)
}
export const getGpsTzAnalysisArray2 = (param) => {
  return post(`${baseUrl}/gpsTzAnalysis/getGpsTzAnalysisArray2`, param)
}
export const getGpsTzAnalysisArray3 = (param) => {
  return post(`${baseUrl}/gpsTzAnalysis/getGpsTzAnalysisArray3`, param)
}
export const getGpsTzAnalysisArray4 = (param) => {
  return post(`${baseUrl}/gpsTzAnalysis/getGpsTzAnalysisArray4`, param)
}

/** 特征 */
export const GPSList = (param) => {
  return post(`${baseUrl}/gpsTZ/list`, param)
}
export const GPSAddOrUpdate = (param) => {
  return post(`${baseUrl}/gpsTZ/saveOrUpdate`, param)
}
export const GPSDel = (param) => {
  return post(`${baseUrl}/gpsTZ/delete`, param)
}

// 公共统计接口
export const getCommonAnalysisArray1 = (param) => {
  return post(`${baseUrl}/hrrptz/getByLineChart`, param)
}
export const getCommonAnalysisArray2 = (param) => {
  return post(`${baseUrl}/hrrptz/getByBarGraph`, param)
}
export const getCommonAnalysisArray3 = (param) => {
  return post(`${baseUrl}/hrrptz/getByPicChart`, param)
}

export const userLog = (param) => {
  return post(`${baseUrl}/user/pageSelectUserLog`, param)
}
export const getJemAnalysTDA = (param) => {
  return post(`${baseUrl}/jemTemplate/getJemAnalysTDA`, param)
}



/** 系统状态 */
export const systemLog = (param) => {
  return post(`${baseUrl}/system/systemInfo`, param)
}
export const uploadListFile = (param) => {
  return post(`${baseUrl}/upload/batch/HrrpHM`, param)
}
export const sendDBData = (param) => {
  return post(`${baseUrl}/gpsTZ/send`, param)
}
export const getJEMByTemplateId = (param) => {
  return post(`${baseUrl}/jemtz/getByTemplateId`, param)
}