import axios from "axios"
import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from "./mutation-type"

export default {
  search({commit}, searchName){
    commit(REQUESTING);
    const url = "https://api.github.com/search/users?q="+searchName;
    axios.get(url).then((response=>{
      const result = response.data;
      const {login, avatar_url, html_url} = result.items[0];
      const users = result.items.map(user=>({
        name: user.login,
        homeUrl: user.html_url,
        headImg: user.avatar_url,
      }));
      commit(REQUEST_SUCCESS, users)
    })).catch(errorMsg=>{
      commit(REQUEST_ERROR, errorMsg);
    })
  }
}
