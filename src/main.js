import Vue from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'
import './mixins'
import './plugins'
import './thirdParty'
import './vue-component'
import './vue-filter'

import 'bootstrap'
// import '@/assets/css/fonts.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/ion.rangeSlider.css'

import '@/assets/css/ion.rangeSlider.skinFlat.css'
import '@/assets/js/plugin/magnific/magnific-popup.css'
import '@/assets/js/plugin/slick/slick.css'
import '@/assets/js/plugin/slick/slick-theme.css'
import '@/assets/js/plugin/nice_select/nice-select.css'
// import '@/assets/js/plugin/revolution/css/settings.css'
import '@/assets/css/style.css'

new Vue({
  name: 'Root',
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app')
