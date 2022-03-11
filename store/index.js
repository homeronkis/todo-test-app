import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
  flats: [],
  houses: [],
  tenants: []
})

export const mutations = {
  DELETE_TENANT_FROM_STORE(state, index){
    return state.tenants.splice(index, 1)
  },
  DELETE_HOUSE_FROM_STORE(state, index){
    return state.houses.splice(index, 1)
  },
  ADD_NEW_TENANT_TO_STORE(state, tenant){
    state.tenants.push(tenant)
  },
  ADD_NEW_HOUSE_TO_STORE(state, house){
    state.houses.push(house)
  }
}
export const actions = {
  deleteTenant({commit}, index){
    console.log(index, "index")
    commit('DELETE_TENANT_FROM_STORE', index)
  },
  deleteHouse({commit}, index){
    console.log(index, "index")
    commit('DELETE_HOUSE_FROM_STORE', index)
  },
  addNewTenant({commit}, tenant){
    commit('ADD_NEW_TENANT_TO_STORE', tenant)
  },
  addNewHouse({commit}, house){
    commit('ADD_NEW_HOUSE_TO_STORE', house)
  }
}
export const getters = {
  tenantsList: state => {
    return state.tenants
  },
  housesList: state => {
    return state.houses
  },
}
