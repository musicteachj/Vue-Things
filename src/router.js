import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';
import Manual from '@/components/Manual.vue';
import Scan from "@/components/Scan.vue";
import Print from "@/components/Print.vue";

Vue.use(Router)

export default new Router ({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: 'Home'
    },
    {
      path: "/manual",
      component: Manual,
      name: 'manual'
    },
    {
      path: '/scan',
      component: Scan,
      name: 'Scan'
    },
    {
      path: '/print',
      component: Print,
      name: "print"
    }
  ]
}) 