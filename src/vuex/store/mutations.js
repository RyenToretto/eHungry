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

export default {
  [SAVE_POSITION] (state, position) {
    state.position = position
  },
  [SAVE_CATEGORY] (state, categorys) {
    state.categorys = categorys
  },
  [SAVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  [SAVE_SHOP_GOODS] (state, shopGoods) {
    state.shopGoods = shopGoods
  },
  [SAVE_SHOP_RATINGS] (state, shopRatings) {
    state.shopRatings = shopRatings
  },
  [SAVE_SHOP_INFO] (state, shopInfo) {
    state.shopInfo = shopInfo
  },
  [SAVE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  }
}
