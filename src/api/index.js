import ajax from "./ajax"

const BASE = "/api"

// 根据 经 纬度 获取位置详情
export const requestPosition = (longitude, latitude)=>{
  return ajax(BASE+`/position/${latitude},${longitude}`)
}

// 获取食品分类列表
export const requestCategory = ()=>{
  return ajax(BASE+`/index_category`)
}

// 根据 经 纬度 获取商铺列表
export const requestShops = (longitude, latitude)=>{
  return ajax(BASE+`/shops`, {longitude, latitude})
}

// 发送短信验证码
export const requestSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

// 手机号验证码登陆
export const requestSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

// 用户名密码登陆
export const requestPwdLogin = (name, pwd, captcha) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

// 根据会话获取用户信息
export const requestUserInfo = () => ajax(BASE + '/userinfo')

// 用户退出登录
export const requestLogout = () => ajax(BASE + '/logout')

// 用户退出登录
export const requestGoods = () => ajax('/goods')

// 用户退出登录
export const requestRatings = () => ajax('/ratings')

// 用户退出登录
export const requestInfo = () => ajax('/info')
