import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Home from '../views/Home.vue'
import BookList from '../views/BookList.vue'
import Cart from '../views/Cart.vue'
import Login from '../components/Login.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import Register from '../components/Register.vue'
import PersonalHomepage from '../components/PersonalHomepage.vue'

const routes = [
  
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  
  {
    path: '/1',
    name: 'Home',
    component: Home
  },

  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },

  {
    path:'/register',
    name:'register',
    component:Register
  },

  {
    path:'/PersonalHomepage',
    name:'PersonalHomepage',
    component:PersonalHomepage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 


