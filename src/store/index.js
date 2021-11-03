import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {
      name: "",
      head: ""
    }
  },
  getters: {
  },
  mutations: {
    login (state, item) {
      state.userInfo = { name: item.name, head: item.head };
    },
    logout (state) {
      state.userInfo = { name: "", head: "" };
    }
  },
  actions: {
  },
  modules: {
  }
})
