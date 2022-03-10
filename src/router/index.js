import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductAdd from '../views/ProductAdd.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import ProductDelete from '../views/ProductDelete.vue'
import AdminPage from '../views/AdminPage.vue'

const routes = [
  {
    path: '/',
    name: 'productList',
    component: ProductList
  },
  {
    path: '/productList/:id',
    name: 'ProductAdd',
    component: ProductAdd
  },
  {
    path: '/productUpdate',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
    {
    path: '/ProductDelete/:id',
    name: 'ProductDelete',
    component: ProductDelete
  },
  {
    path: '/productList/',
    name: 'productAdd',
    component: ProductAdd
  },
  {
    path: '/adminPage',
    name: 'adminPage',
    component: AdminPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
