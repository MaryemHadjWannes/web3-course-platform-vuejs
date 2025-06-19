import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/course/:slug',
    name: 'CourseDetail',
    component: () => import('@/views/CourseDetail.vue')
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
