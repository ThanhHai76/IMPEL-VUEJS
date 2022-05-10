import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Default from '../layout/Wrappers/defaultLayout.vue'
import Login from '../layout/Wrappers/loginLayout.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueLoadingOverlay from 'vue-loading-overlay'
import VueSlickCarousel from 'vue-slick-carousel'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('VueLoadingOverlay', VueLoadingOverlay)
Vue.component('VueSlickCarousel', VueSlickCarousel)

Vue.component('default-layout', Default)
Vue.component('login-layout', Login)
