import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from '@/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuetify, VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
