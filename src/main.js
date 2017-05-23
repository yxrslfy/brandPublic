// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/home/Home.vue'
import BrandClassific from './components/brand-classific/Brand-classific.vue'
import Overview from './components/brand-classific/overview/Overview.vue'
import Comment from './components/brand-classific/comment/Comment.vue'
import Summary from './components/brand-classific/summary/Summary.vue'
import Analysis from './components/brand-classific/analysis/Analysis.vue'
import BrandList from './components/brand-list/BrandList.vue'
import Detail from './components/detail/Detail.vue'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path:'/index',
    component: Home
  },
  {
    path: '/classific',
    component: BrandClassific,
    children: [
      {
        path: 'overview',
        component: Overview
      },
      {
        path: 'comment',
        component: Comment
      },
      {
        path: 'summary',
        component: Summary
      },
      {
        path: 'analysis',
        component: Analysis
      }
    ]
  },
  {
    path: '/list',
    component: BrandList
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/',
    redirect: '/index'
  }
];


const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
});
