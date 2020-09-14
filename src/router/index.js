import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

    const routes = [
      {
        path: '/',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/HomeView.vue"),
      },
      {
        path: '/cart',
        name: 'Cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Cart" */ "../views/CartView.vue"),
      }
    ]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router