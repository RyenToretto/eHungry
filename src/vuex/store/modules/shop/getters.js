export default {
  totalCount (state) {
    return state.cartFoods.reduce((total, next)=>total += next.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((total, next)=>total += next.count*next.price, 0)
  },
  allRatingCount (state) {
    return state.shopRatings.length
  },
  niceRatingCount (state) {
    return state.shopRatings.reduce((pre, rating)=>pre+(rating.rateType===0?1:0), 0)
  }
}
