import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Default from '../layout/Wrappers/defaultLayout.vue'
import Login from '../layout/Wrappers/loginLayout.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueLoadingOverlay from 'vue-loading-overlay'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('VueLoadingOverlay', VueLoadingOverlay)

Vue.component('default-layout', Default)
Vue.component('login-layout', Login)
