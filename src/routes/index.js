import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import Board from '@/views/Board.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/board',
    component: Board,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});