import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueNumberInput);
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
