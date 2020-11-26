export let base64Prefix = 'data:image/png;base64,' + ''
export let defaultBase64 = base64Prefix + 'iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAYAAAC4e0AJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABnSURBVGhD7dmxDcAgDABBwzJhyzBmtoHGEkUGeCz9NXb5hTu39T4riuo5SzKe8r/5+eVymTlyOTwbivEU4ynGU4ynGE8xnmI8xXiK8RTjKcZTjKcYTzGeYjzFeIrxlNLxfsApxjMiNuvECkZnkue8AAAAAElFTkSuQmCC'

// 字典转换：value => label
export const transLabel = (list, value) => {
  if (!list || list.length === 0) {
    return ''
  }
  let item = list.find(o => o.value + '' === value + '') || {
    label: ''
  }
  return item.label
}

// 图片base64转文件
export const base64ImgtoFile = (dataurl = base64Prefix, filename = 'name' + Date.parse(new Date())) => {
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

// 格式化日期
export const formatTime = (value, type = 'YY/MM/DD') => {
  let time = new Date(value)
  if (Number.isNaN(time.getTime())) {
    return value
  }
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
  // type = 'YY/MM/DD HH:MM:SS'
  return type.toUpperCase().replace('YY', `${year}`).replace('MM', `${month}`).replace('DD', `${day}`).replace('HH', `${hour}`).replace('MM', `${minute}`).replace('SS', `${second}`)
}
