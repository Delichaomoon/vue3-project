import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// eslint-disable
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: '登入頁面',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '商品列表',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'cooupons',
        name: '優惠券',
        component: () => import('../views/Coupons.vue')
      }
    ]
  },
  {
    path: '/user',
    name: '使用者',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        name: '各別商品',
        component: () => import('../views/UserProducts.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    // `to` 和 `from` 都是路由路径
    // `savedPosition` 如果不存在可以为 null
  }
})

export default router
