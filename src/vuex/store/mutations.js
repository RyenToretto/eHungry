import {
  SAVE_POSITION,
  SAVE_CATEGORY,
  SAVE_SHOPS
} from "./mutation-type"

export default {
  [SAVE_POSITION] (state, position) {
    state.position = position
  },
  
  [SAVE_CATEGORY] (state, categorys) {
    state.categorys = categorys
  },
  
  [SAVE_SHOPS] (state, shops) {
    state.shops = shops
  }
}
