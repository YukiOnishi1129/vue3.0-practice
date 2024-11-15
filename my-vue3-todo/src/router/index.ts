import { createRouter, createWebHistory } from 'vue-router'

import MainTodo from '@/views/MainTodo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mainTodo',
      component: MainTodo,
    },
    {
      path: '/mainTodo',
      name: 'mainTodo',
      component: MainTodo,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
