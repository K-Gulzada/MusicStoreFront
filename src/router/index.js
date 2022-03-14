import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import BookingPage from '../views/BookingPage.vue'
import BrandPage from '../views/BrandPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import DeliveryPage from '../views/DeliveryPage.vue'
import DiscountPage from '../views/DiscountPage.vue'
import FavoritePage from '../views/FavoritePage.vue'
import ProductPage from '../views/ProductPage.vue'
import StatusPage from '../views/StatusPage.vue'

const routes = [
  {
    path: '/',
    name: 'productList',
    component: ProductList
  },

  {
    path: '/booking',
    name: 'booking',
    component: BookingPage
  },
  {
    path: '/brand',
    name: 'brand',
    component: BrandPage
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryPage
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryPage
  },
  {
    path: '/discount',
    name: 'discount',
    component: DiscountPage
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoritePage
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage
  },
  {
    path: '/status',
    name: 'status',
    component: StatusPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
