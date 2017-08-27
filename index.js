function addParamToUrl (key, val, url) {
  if (!url) {
    return
  }

  let params = url.match(/.+\?(.*)/i)
  const reg = new RegExp(`(${key})=\\w*`, 'i')

  if (!params || !params[1]) {
    return `${key}=${val}`
  }
  // 获取已存在的参数
  params = params[1]

  if (!reg.test(params)) {
    return `${params}&${key}=${val}`
  }
  const replaceVal = (match, p1, offset, str) => `${p1}=${val}`
  return params.replace(reg, replaceVal)
}

module.exports = addParamToUrl