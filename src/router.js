import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/icon'
  },
  {
    path: '/icon',
    component: r => require.ensure([], () => r(require('./page/icon.vue')), 'icon')
  },
  {
    path: '/button',
    component: r => require.ensure([], () => r(require('./page/button.vue')), 'button')
  },
  {
    path: '/radio',
    component: r => require.ensure([], () => r(require('./page/radio.vue')), 'radio')
  },
  {
    path: '/tree',
    component: r => require.ensure([], () => r(require('./page/tree.vue')), 'tree')
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;