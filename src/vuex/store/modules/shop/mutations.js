import {
  SAVE_SHOPS,
  SAVE_SHOP_GOODS,
  SAVE_SHOP_RATINGS,
  SAVE_SHOP_INFO,
  ADD_CART_FOOD_COUNT,
  DEC_CART_FOOD_COUNT,
  CLEAR_FOOD_COUNT
} from './mutation-type'

import Vue from 'vue'

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
  },
  
  [ADD_CART_FOOD_COUNT] (state, food) {
    if(!food.count){
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    }else{
      food.count += 1
    }
  },
  [DEC_CART_FOOD_COUNT] (state, food) {
    if(food.count>0){
      food.count -= 1
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_FOOD_COUNT] (state) {
    state.cartFoods.forEach(food=>food.count = 0)
    state.cartFoods = []
  }
}
