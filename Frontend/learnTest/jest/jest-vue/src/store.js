import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex)
const store = new vuex.Store({
  state: {
    inputValue: ''
  },
  mutations: {
    changeInputValue(state, payload) {
      state.inputValue = payload
    }
  }
})

export default store;