import {
  SAVE_SHOPS,
  SAVE_SHOP_GOODS,
  SAVE_SHOP_RATINGS,
  SAVE_SHOP_INFO
} from "./mutation-type"

import {
  requestShops,
  requestGoods,
  requestRatings,
  requestInfo
} from "../../../../api"

export default {
  async getShops({commit, state}){
    const {longitude, latitude} = state
    const result = await requestShops(longitude, latitude)
    if(result.code === 0){
      commit(SAVE_SHOPS, result.data)
    }
  },
  async getShopGoods({commit}){
    const result = await requestGoods()
    if(result.code === 0){
      commit(SAVE_SHOP_GOODS, result.data)
    }
  },
  async getShopRatings({commit}){
    const result = await requestRatings()
    if(result.code === 0){
      commit(SAVE_SHOP_RATINGS, result.data)
    }
  },
  async getShopInfo({commit}){
    const result = await requestInfo()
    if(result.code === 0){
      commit(SAVE_SHOP_INFO, result.data)
    }
  }
}
