import ajax from "./ajax"

const BASE = "/api"

export const requestPosition = (longitude, latitude)=>{
  return ajax(BASE+`/position/${latitude},${longitude}`)
}

export const requestCategory = ()=>{
  return ajax(BASE+`/index_category`)
}

export const requestShops = (longitude, latitude)=>{
  return ajax(BASE+`/shops`, {longitude, latitude})
}
