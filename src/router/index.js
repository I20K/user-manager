import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import NewUser from '../views/NewUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cadastros',
    component: Users
  },
  {
    path: '/new-user',
    name: 'Novo Usuário',
    component: NewUser
  }
]

const router = new VueRouter({
  routes
})

export default router
