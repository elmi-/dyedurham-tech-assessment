import { createStore } from 'vuex'
import data from "@/api/data"

const transactionsModule = {
  state: () => ({
    data: data.transactions,
  }),
}

const usersModule = {
  state: () => ({
    data: data.users,
  })
}

const firmModule = {
  state: () => ({
    data: data.firms,
  })
}

export default createStore({
  modules: {
    users: usersModule,
    transactions: transactionsModule,
    firms: firmModule
  },
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
        if(state.filterValue == "users") {
          return { data: state.users.data }
        }
      },
      filteredData: state => (filter) => {
        if(filter === "users") {
          return { data: state.users.data }
        } else {
          return { data: state.transactions.data }
        }
      },
      getDataByID: state => (id, filter) => {
        if(filter === "users") {
          return state.users.data.filter(d => d.id === id);
        } else {
          return state.transactions.data.filter(d => d.id === id);
        }
      },
      getUserFirm: state => (id) => {
        return  state.firms.data.filter(f => f.id === id).map(({name}) => name);
      },
  }
})