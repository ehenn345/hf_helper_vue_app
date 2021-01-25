import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue";
import WeightsIndex from '../views/WeightsIndex.vue'
import WeightsNew from '../views/WeightsNew.vue'
import SodiaIndex from '../views/SodiaIndex.vue'
import SodiaNew from '../views/SodiaNew.vue'
import SodiaShow from '../views/SodiaShow.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/signup",
    name: 'signup',
    component: Signup
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/logout",
    name: 'logout',
    component: Logout
  },
  {
    path: "/weights",
    name: 'weights-index',
    component: WeightsIndex,
  },
  {
    path: "/weights/new",
    name: 'weights-new',
    component: WeightsNew,
  },
  {
    path: "/sodia",
    name: 'sodia-index',
    component: SodiaIndex,
  },
  {
    path: "/sodia/new",
    name: 'sodia-new',
    component: SodiaNew,
  },
  {
    path: "/showsodia",
    name: "sodia-show",
    component: SodiaShow,
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
