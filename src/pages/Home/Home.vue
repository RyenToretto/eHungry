<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="position.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text" @click="$router.push('/login_register')">登录|注册</span>
      </span>
    </Header>
    
    <!--首页导航-->
    <nav class="msite_nav">
      <div v-if="categorysArr.length>0" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, cIndex) in categorys" :key="cIndex">
              <div class="food_container">
                <img :src="prePicUrl+category.image_url" :alt="category.description">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img v-else src="./images/msite_back.svg" alt="loading"/>
    </nav>
  
    <ShopList></ShopList>
  </section>
</template>

<script>
  import {mapState} from "vuex"
  import ShopList from "../../components/ShopList/ShopList"
  
  import "../../common/swiper/swiper.css"
  import Swiper from "swiper"
  
  export default {
    name: 'Home',
    data () {
      return {
        prePicUrl: "https://fuss10.elemecdn.com"
      }
    },
    components: {
      ShopList
    },
    computed: {
      ...mapState(["position", "categorys"]),
      categorysArr () {
        const {categorys} = this
        const result = []
        
        let indexArr = []
  
        categorys.forEach(category=>{
          if(indexArr.length===0){
            result.push(indexArr)
          }
          indexArr.push(category)
          if(indexArr.length>=8){
            indexArr = []
          }
        })
        
        return result
      }
    },
    watch: {
      categorysArr () {
        // 在下次 DOM 更新后，再执行回调
        this.$nextTick(()=>{
          const mySwiper = new Swiper('.swiper-container', {
            loop: true,    // 循环模式选项
            pagination: {    // 如果需要分页器
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    async mounted () {
      await this.$store.dispatch("getPosition")
      await this.$store.dispatch("getCategorys")
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
