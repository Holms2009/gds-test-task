import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import normalizecss from 'normalize.css';

import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
