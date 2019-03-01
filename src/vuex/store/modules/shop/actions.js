import {
  SAVE_SHOPS,
  
  SAVE_SHOP_GOODS,
  SAVE_SHOP_RATINGS,
  SAVE_SHOP_INFO,
  
  ADD_CART_FOOD_COUNT,
  DEC_CART_FOOD_COUNT,
  CLEAR_FOOD_COUNT
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
  
  async getShopGoods({commit}, callback){
    const result = await requestGoods()
    if(result.code === 0){
      commit(SAVE_SHOP_GOODS, result.data);
      (typeof callback === "function") && callback()
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
  
  updateCartFoodCount({commit}, {food, isAdd}){
    if(isAdd){
      commit(ADD_CART_FOOD_COUNT, food)
    }else{
      commit(DEC_CART_FOOD_COUNT, food)
    }
  },
  
  clearFoodCount({commit}){
    commit(CLEAR_FOOD_COUNT)
  }
}
