import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import ProductAdd from '../views/ProductAdd.vue'
import ProductDelete from '../views/ProductDelete.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/index/:id',
    name: 'ProductAdd',
    component: ProductAdd
  },
    {
    path: '/ProductDelete/:id',
    name: 'ProductDelete',
    component: ProductDelete
  },
  {
    path: '/index/',
    name: 'productAdd',
    component: ProductAdd
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
