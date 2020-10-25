import Vue from 'vue'
import Vuex from 'vuex'
import UserWS from '../components/api/UserWS'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUser(state, u) {
      UserWS.addUser(u).then(() => {
        state.users.push(u)
        alert('Usuário cadastrado.')
      }).catch(() => {
        alert('Não foi possível adicionar o usuário.')
      })
    },
    removeUser(state, payload) {
      UserWS.removeUser(payload.id).then(() => {
        state.users.splice(payload.i, 1)
      }).catch(() => {
        alert('Não foi possível remover o usuário.')
      })
    },
    fetchUsers(state) {
      UserWS.getUsers().then(e => {
        state.users = e.data
      }).catch(() => {
        alert('Não foi possível localizar os usuários cadastrados.')
      })
    }
  },
  actions: {},
  modules: {},
  getters: {
    allUsers: state => {
      return state.users;
    }
  }
})