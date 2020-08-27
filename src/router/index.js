import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    meta: {
      layout: 'front'
    },
    component: () => import('../views/FrontPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'front'
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'front'
    },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      layout: 'dashboard'
    },
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/project/:curr_project',
    name: 'Project',
    meta: {
      layout: 'dashboard'
    },
    component: () => import('../views/Project.vue')
  },
  {
    path: '/step',
    name: 'Step',
    meta: {
      layout: 'dashboard'
    },
    component: () => import('../views/Step.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
