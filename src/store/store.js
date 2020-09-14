import Vue from 'vue'
import Vuex from 'vuex'
import dataDummy from '../dummy/data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: dataDummy,
      filter:"",
      keyword:'',
  },
  mutations: {
      updateSearching:(state,searchProduct) =>{
          state.keyword = searchProduct
      },
    },
  actions: {
      filterData({commit}){
          const data = 0
          commit("setFilterData",data)
      }

    },
})