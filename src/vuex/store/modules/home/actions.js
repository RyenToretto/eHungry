import {
  SAVE_POSITION,
  SAVE_CATEGORY,
} from "./mutation-type"

import {
  requestPosition,
  requestCategory,
} from "../../../../api"

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
  }
}
