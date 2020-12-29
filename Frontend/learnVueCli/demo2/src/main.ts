import Vue from 'vue'
import App from './App.vue'
import axios from 'genal-axios'

axios.get('http://localhost:4000',{
  name: 'genal'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
