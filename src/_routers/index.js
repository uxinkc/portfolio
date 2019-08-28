

import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Boilerplate from '../views/Boilerplate';
import ReportsOverview from '../views/Reports/Overview';


Vue.use( Router );

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },

    { path: '/boilerplate',
      name: 'boilerplate',
      component: Boilerplate
    },

    { path: '/reports/overview',
      name: 'reports-overview',
      component: ReportsOverview
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
