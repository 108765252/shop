import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Ajax from '../views/Ajax.vue'
import Vbase from '../views/Vbase.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },{
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },{
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  },{
    path: '/vbase',
    name: 'vbase',
    component: Vbase
  }

]

const router = new VueRouter({
  routes
})

export default router
