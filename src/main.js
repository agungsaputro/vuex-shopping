import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '@/assets/styles/main.css'
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

Vue.config.productionTip = false

Vue.filter('currency',(num) =>
  new Intl.NumberFormat('id-ID', {style: 'currency', currency:'IDR'}).format(num)
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
