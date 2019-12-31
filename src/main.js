import Vue from 'vue'
import App from './App.vue'
import './quasar'

// Sync router with store
import {
  sync
} from 'vuex-router-sync'

import VueMathjax from 'vue-mathjax'
import router from '@/router'
import store from '@/store'

sync(store, router)

Vue.use(VueMathjax)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
