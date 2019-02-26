import {
  SAVE_USER_INFO,
  RESET_USER_INFO
} from "./mutation-type"

import {
  requestUserInfo,
  requestLogout
} from "../../../../api"

export default {
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
