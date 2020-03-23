import * as Api from '../../api/index'
import axios from '../../tools/axios'
export default {
  state: {
    test:null    
  },
  getters: {
    getTest: state => {
      return state.test
    },   
  },
  mutations: {
    setTest (state, data) {
      state.test = data      
    }
  },
  actions: {
    testActions({commit}, params) {
      commit('setTest', params)
      return axios.get(Api.getTest, {
        params
      })
    }
  }
}
