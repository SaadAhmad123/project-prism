import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faCheck, faExclamationTriangle, faTimes, faChartPie, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
library.add(faExternalLinkAlt)
library.add(faCheck)
library.add(faExclamationTriangle)
library.add(faTimes)
library.add(faChartPie)
library.add(faInfoCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
