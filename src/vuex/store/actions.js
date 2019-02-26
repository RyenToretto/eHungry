import {
  SAVE_POSITION,
  SAVE_CATEGORY,
  SAVE_SHOPS,
  SAVE_SHOP_GOODS,
  SAVE_SHOP_RATINGS,
  SAVE_SHOP_INFO,
  SAVE_USER_INFO,
  RESET_USER_INFO
} from "./mutation-type"

import {
  requestPosition,
  requestCategory,
  requestShops,
  requestGoods,
  requestRatings,
  requestInfo,
  requestUserInfo,
  requestLogout
} from "../../api"

export default {
  async getPosition({commit, state}){
    const {longitude, latitude} = state
    const result = await requestPosition(longitude, latitude)
    if(result.code === 0){
      commit(SAVE_POSITION, result.data)
    }
  },
  async getCategorys({commit}){
    const result = await requestCategory()
    if(result.code === 0){
      commit(SAVE_CATEGORY, result.data)
    }
  },
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
  },
  saveUserInfo({commit}, userInfo){
    commit(SAVE_USER_INFO, userInfo)
  },
  async getUserInfo({commit}){
    const result = await requestUserInfo()
    if(result.code === 0){
      commit(SAVE_USER_INFO, result.data)
    }
  },
  async logout({commit}){
    const result = await requestLogout()
    if(result.code === 0){
      commit(RESET_USER_INFO)
    }
  }
}
