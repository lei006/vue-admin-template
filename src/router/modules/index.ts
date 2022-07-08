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
    path: "/about",
    component: Layout,
    children: [{
      path: '/about/index',
      name: 'About',
      component: () => import('../../views/system/about/index.vue'),
      meta: { title: '报告', icon: 'dashboard' }
    }]    
  },
];

export default routes;
