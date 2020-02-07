import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faCheck, faExclamationTriangle, faTimes, faChartPie, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false
library.add(faExternalLinkAlt)
library.add(faCheck)
library.add(faExclamationTriangle)
library.add(faTimes)
library.add(faChartPie)
library.add(faInfoCircle)
library.add(faQuestionCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VTooltip, { defaultTrigger: 'hover focus click',})
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
