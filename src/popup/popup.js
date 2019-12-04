import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
