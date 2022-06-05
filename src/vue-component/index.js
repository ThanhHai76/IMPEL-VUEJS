import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Default from '../layout/Wrappers/defaultLayout.vue'
import Login from '../layout/Wrappers/loginLayout.vue'
import Admin from '../layout/Wrappers/adminLayout.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueLoadingOverlay from 'vue-loading-overlay'
import VueSlickCarousel from 'vue-slick-carousel'

// import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, ToolbarType } from "@syncfusion/ej2-vue-richtexteditor";

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
// Vue.use(RichTextEditorPlugin);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('VueLoadingOverlay', VueLoadingOverlay)
Vue.component('VueSlickCarousel', VueSlickCarousel)
// Vue.component('RichTextEditorPlugin', RichTextEditorPlugin)

Vue.component('default-layout', Default)
Vue.component('login-layout', Login)
Vue.component('admin-layout', Admin)
