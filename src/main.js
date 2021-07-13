import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vGoogleTranslate from 'v-google-translate';

Vue.config.productionTip = false
Vue.use(vGoogleTranslate)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')