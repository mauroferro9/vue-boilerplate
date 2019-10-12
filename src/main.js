import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'

import { filters } from '@/filters/filters'

// https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
import { i18n } from './i18n/i18n'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// to allow using <i> icons in Font Awesome 5
// https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821
dom.watch()

// Filters
Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
