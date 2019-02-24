import {
  TOLOGINREGISTER,
  SAVE_POSITION,
  SAVE_CATEGORY,
  SAVE_SHOPS
} from "./mutation-type"

import {requestPosition, requestCategory, requestShops} from "../../api"

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
  }
}
