export const formatTime = value => {
  let time = new Date(value)
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  var day = time.getDate()
  var hour = time.getHours()
  var minute = time.getMinutes()
  var second = time.getSeconds()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  time = `${year}/${month}/${day} ${hour}:${minute}:${second}`
  return time
}

// 设置cookie
export function setCookie (Cname, value, expire) {
  var date = new Date()
  date.setSeconds(date.getSeconds() + expire)
  document.cookie = Cname + '=' + escape(value) + '; expires=' + date.toGMTString()
  console.log(document.cookie)
};
// 获取cookie
export function getCookie (Cname) {
  if (document.cookie.length > 0) {
    let Cstart = document.cookie.indexOf(Cname + '=')
    if (Cstart !== -1) {
      Cstart = Cstart + Cname.length + 1
      // let Cend = document.cookie.indexOf(';', Cstart)
      // if (Cend == -1) Cend = document.cookie.length
      // return unescape(document.cookie.substring(Cstart, Cend))
    }
  }
  return ''
};
/* 删除cookie */
export function delCookie (Cname) {
  setCookie(Cname, '', -1)
};

export const getCodeMessage = err => {
  let status = 0
  if (err.message) {
    status = Number(err.message.slice(-3))
  }
  console.log(status)
  switch (status) {
    case 400:
      err.message = '请求错误'
      break

    case 401:
      err.message = '未授权，请登录'
      break

    case 403:
      err.message = '拒绝访问'
      break

    case 404:
      err.message = `请求地址出错: ${err.response.config.url}`
      break

    case 408:
      err.message = '请求超时'
      break

    case 500:
      err.message = '服务器内部错误'
      break

    case 501:
      err.message = '服务未实现'
      break

    case 502:
      err.message = '网关错误'
      break

    case 503:
      err.message = '服务不可用'
      break

    case 504:
      err.message = '网关超时'
      break

    case 505:
      err.message = 'HTTP版本不受支持'
      break

  }
  return err
}
