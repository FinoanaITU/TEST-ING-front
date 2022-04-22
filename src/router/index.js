import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginBoard from '../views/LoginBoard.vue'
import NotFound from '../views/error/notFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: LoginBoard, meta:{title: '404 not found'} },
  { path: '/home', name: 'home', component: HomeView },  
  { path: '*', name: 'NotFound', component: NotFound, meta:{title: '404 not found'} },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) =>{

//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

export default router
