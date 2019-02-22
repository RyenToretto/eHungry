import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from "./mutation-type"

export default {
  [REQUESTING] (state) {
    state.isFirst = false;
    state.isSearching = true;
    state.errorMsg = "";
    state.users = [];
  },
  [REQUEST_SUCCESS] (state, users) {
    state.isSearching = false;
    state.users = users;
  },
  [REQUEST_ERROR] (state, errorMsg) {
    state.isSearching = false;
    state.errorMsg = errorMsg;
  }
}
