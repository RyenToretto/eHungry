import {
  SAVE_SHOPS,
  SAVE_SHOP_GOODS,
  SAVE_SHOP_RATINGS,
  SAVE_SHOP_INFO
} from "./mutation-type"

export default {
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
  }
}
