import 'normalize-css/normalize.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import i18n from './locale'
import vuetify from './plugins/vuetify'
import router from './router'
import './router/permission'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
