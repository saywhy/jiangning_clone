
import axios from 'axios'
import {
  getCodeMessage
} from './tools'

// 请求拦截器
// axios.interceptors.request.use

// 响应拦截器即异常处理
// axios.interceptors.response.use

// 设置默认请求头
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest',
//   'Content-Type': 'application/json'
// }

axios.defaults.timeout = 400000
axios.defaults.withCredentials = true

const handleUrl = url => {
  url = url.replace(/^\//, '')
  return url.startsWith('http') ? url : `/${url}`
}

export const get = (url, param = {}) => {
  url = handleUrl(url)
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'get',
      url,
      data: param
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      resolve({
        data: []
      })
      getCodeMessage(error)
      reject(error)
    })
  })
}
export const post = (url, param) => {
  url = handleUrl(url)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: param,
      headers: {}
    }).then(res => {
      resolve(res.data)
    }).catch((error) => {
      getCodeMessage(error)
      resolve(error)
    })
  })
}
export const postDWG = (url, param) => {
  url = handleUrl(url)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      timeout: 300000,
      data: param,
      responseType: 'blob',
      headers: {}
    }).then(res => {
      resolve(res.data)
    }).catch((error) => {
      getCodeMessage(error)
      resolve(error)
    })
  })
}
export const formPost = (url, param = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'multipart/form-data;charset=utf-8'
      },
      url,
      timeout: 300000,
      data: param,
      dataType: 'json'
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      getCodeMessage(error)
      reject(error)
    })
  })
}
export const formPost2 = (url, param = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'multipart/form-data;charset=UTF-8'
        // 'Content-Type': 'application/json;charset=UTF-8'
        'Content-Type': 'multipart/form-data'
      },
      url,
      timeout: 300000,
      data: param
      // dataType: 'json',
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      getCodeMessage(error)
      reject(error)
    })
  })
}
export function put (url, data = {}) {
  url = handleUrl(url)
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'put',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: JSON.stringify(data)
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      getCodeMessage(error)
      reject(error)
    })
  })
}
