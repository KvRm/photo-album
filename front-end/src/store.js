import { createStore } from 'vuex'

const store = createStore({
  state: {
    isUserAuthorizated: false
  },
  mutations: {
    CHANGE_USER_AUTH_STATE: (state, payload) => {
      state.isUserAuthorizated = payload;
    }
  },
  actions: {
    AUTH_USER({commit}, payload) {
      commit('CHANGE_USER_AUTH_STATE', payload)
    }
  },
  getters: {
    USER_AUTH_STATE(state) {
      return state.isUserAuthorizated
    }
  }
})

export default store