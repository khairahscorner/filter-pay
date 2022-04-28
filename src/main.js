import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

import './assets/css/index.css'

// For API calls
// axios.defaults.baseURL = 'https://cornie-assessment.herokuapp.com'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
