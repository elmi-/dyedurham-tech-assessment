import { createStore } from 'vuex'
import data from "@/api/data"

export default createStore({
  state: {
    filterValue: "users",
    data,
    detailsValue: null
  },
  mutations: {

  },
  actions: {

  },
  getters: {
      data: state => {
        return { data: state.data, keys: Object.keys(state.data) }
      },
      filteredData: state => (filter) => {
        return { data: state.data[filter], keys: Object.keys(state.data[filter]) }
      },
      getDataByID: state => (id, filter) => {
        return state.data[filter].filter(d => d.id === id);
      }
  }
})