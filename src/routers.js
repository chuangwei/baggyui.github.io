import Vue from 'vue';
import VueRouter from 'vue-router';

import Icon from './page/icon';
import Button from './page/button';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/icon'
}, {
  path: '/icon',
  component: Icon
}, {
  path: '/button',
  component: Button
}];

const router = new VueRouter({
  routes
});

export default router;