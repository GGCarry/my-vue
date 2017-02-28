// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/less/index.less';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/goods', name: 'goods', component: goods },
  { path: '/ratings', name: 'ratings', component: ratings },
  { path: '/seller', name: 'seller', component: seller }
];

const router = new VueRouter(
  { routes: routes, linkActiveClass: 'active' }
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

