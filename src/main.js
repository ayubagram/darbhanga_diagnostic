import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    navHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 70
        case 'sm': return 110
        case 'md': return 110
        default: return 110
      }
    },
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
