import {
  SAVE_USER_INFO,
  RESET_USER_INFO
} from "./mutation-type"

export default {
  [SAVE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  }
}
