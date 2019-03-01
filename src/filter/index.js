import Vue from "vue"
import moment from "moment"
Vue.filter("format-date", function(timeStick, formatStr="YYYY-MM-DD HH:mm:ss"){
  return moment(timeStick).format(formatStr)
})
