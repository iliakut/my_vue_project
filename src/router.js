import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import AddUser from '@/views/Add.vue'
import EditUser from '@/views/EdtitUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'about',
      component: Users
    },
    {
      path: '/add',
      name: 'about',
      component: AddUser
    },
    {
      path: '/add',
      component: EditUser
    }
  ]
})
