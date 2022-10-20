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
        return state.data
      },
      getDataByID: state => (id, filter) => {
        return state.data[filter].filter(d => d.id === id);
      }
  }
})