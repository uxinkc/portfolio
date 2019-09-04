

import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Insights from '../views/insights/overview';
import Projects from '../views/projects/overview';
import Contact from '../views/contact';


Vue.use( Router );

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },

    { path: '/insights',
      name: 'insights',
      component: Insights
    },

    { path: '/projects',
      name: 'projects',
      component: Projects
    },

    { path: '/contact',
      name: 'contact',
      component: Contact
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
