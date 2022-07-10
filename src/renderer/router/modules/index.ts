import { RouteRecordRaw } from "vue-router";

import Layout from '../../layout/index.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: '/dashboard/index',
    children: [{
        path: '/dashboard/index',
        name: 'Dashboard',
        component: () => import('../../views/dashboard/index.vue'),
        meta: { title: 'dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: "/report",
    component: Layout,
    redirect: '/report/index',
    children: [{
        path: '/report/index',
        name: 'Report',
        component: () => import('../../views/report/index.vue'),
        meta: { title: '报告', icon: 'dashboard' }
    }]
  },
  {
    path: "/report1",
    component: Layout,
    redirect: '/report1/index',
    children: [{
        path: '/report1/index',
        name: 'Report1',
        component: () => import('../../views/report1/index.vue'),
        meta: { title: '报告1', icon: 'dashboard' }
    }]
  },

  {
    path: "/about",
    component: Layout,
    redirect: '/about/index',
    children: [{
      path: '/about/index',
      name: 'About',
      component: () => import('../../views/about/index.vue'),
      meta: { title: '关于', icon: 'dashboard' }
    }]    
  },
  {
    path: "/system",
    component: Layout,
    redirect: '/system/login',
    name:"登录",
    children: [{
      path: '/system/login',
      name: 'Login',
      component: () => import('../../views/system/login1/index.vue'),
      meta: { title: '登录', icon: 'dashboard' }
    },{
      path: '/system/about',
      name: 'About',
      component: () => import('../../views/system/about/index.vue'),
      meta: { title: '关于', icon: 'dashboard' }
    },]
  },
];

export default routes;
