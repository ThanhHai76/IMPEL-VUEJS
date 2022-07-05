<template>
  <div class="nk-sidebar nk-sidebar-fixed is-dark"
    :class="{'is-compact': showMiniSidebar, 'has-hover': showSidebarHover, 'nk-sidebar-active': showSidebarActive}"
    data-content="sidebarMenu"
  >
      <div class="nk-sidebar-element nk-sidebar-head">
          <div class="nk-menu-trigger">
              <a href="javascript:void(0)" @click="showSidebarActive = !showSidebarActive" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
              <a href="javascript:void(0)" @click="showSidebarAction()" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
          </div>

          <div class="nk-sidebar-brand">
              <a href="html/index.html" class="logo-link nk-sidebar-logo">
                  <img class="logo-light logo-img" src="@/assets/auth-css/images/logo.png" srcset="@/assets/auth-css/images/logo2x.png 2x" alt="logo">
                  <img class="logo-dark logo-img" src="@/assets/auth-css/images/logo-dark.png" srcset="@/assets/auth-css/images/logo-dark2x.png 2x" alt="logo-dark">
              </a>
          </div>
      </div><!-- .nk-sidebar-element -->
      <div class="nk-sidebar-element nk-sidebar-body">
          <div class="nk-sidebar-content" @mouseover="showSidebarHover = true" @mouseleave="showSidebarHover = false">
              <div class="nk-sidebar-menu" data-simplebar>
                  <ul class="nk-menu">
                      <li class="nk-menu-heading">
                          <h6 class="overline-title text-primary-alt">Dashboards</h6>
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item">
                          <router-link to="/admin" class="nk-menu-link">
                            <span class="nk-menu-icon"><em class="icon ni ni-dashlite"></em></span>
                            <span class="nk-menu-text">Default Dashboard</span>
                          </router-link>
                      </li><!-- .nk-menu-item -->
                      
                      <li class="nk-menu-heading">
                          <h6 class="overline-title text-primary-alt">Pre-Built Pages</h6>
                      </li><!-- .nk-menu-heading -->
                      <li class="nk-menu-item has-sub">
                          <a href="#" v-b-toggle.my-collapse class="nk-menu-link nk-menu-toggle">
                              <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb"></em></span>
                              <span class="nk-menu-text">Phương tiện</span>
                          </a>
                          <b-collapse id="my-collapse">
                            <ul class="nk-menu-sub">

                                <!-- <li class="nk-menu-item">
                                  <a href="#" v-b-toggle.brand-collapse class="nk-menu-link nk-menu-toggle">
                                      <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb"></em></span>
                                      <span class="nk-menu-text">Hãng</span>
                                  </a>
                                  <b-collapse id="brand-collapse">
                                    <ul class="nk-menu-sub">
                                      
                                    </ul>
                                  </b-collapse>
                                </li> -->

                                <li class="nk-menu-item">
                                  <router-link class="nk-menu-link" to="/admin/config-vehicle">
                                    <span class="nk-menu-text">Cấu hình phương tiện</span>
                                  </router-link>
                                </li>

                                <li class="nk-menu-item">
                                  <router-link class="nk-menu-link" to="/admin/create-vehicle">
                                    <span class="nk-menu-text">Thêm phương tiện</span>
                                  </router-link>
                                </li>
                            </ul><!-- .nk-menu-sub -->
                          </b-collapse>
                      </li><!-- .nk-menu-item -->

                  </ul><!-- .nk-menu -->
              </div><!-- .nk-sidebar-menu -->
          </div><!-- .nk-sidebar-content -->
      </div><!-- .nk-sidebar-element -->
  </div>
</template>

<script>
import EventBus from './EventBus'
export default {
  data () {
    return {
      showMiniSidebar: false,
      showSidebarHover: false,
      showSidebarActive: false
    }
  },
  created () {
    this.loadScripts()
  },

  mounted() {
    // Listening the event hello
    EventBus.$on('showSidebar', this.handler);
  },
  methods: {
    loadScripts () {
      const loadscript = document.createElement('script')
      loadscript.setAttribute('type', 'text/javascript')
      loadscript.setAttribute('src', 'admin-js/bundle.js')
      document.body.appendChild(loadscript)

      const loadscript2 = document.createElement('script')
      loadscript2.setAttribute('type', 'text/javascript')
      loadscript2.setAttribute('src', 'admin-js/scripts.js')
      document.body.appendChild(loadscript2)

      const loadscript3 = document.createElement('script')
      loadscript3.setAttribute('type', 'text/javascript')
      loadscript3.setAttribute('src', 'admin-js/gd-default.js')
      document.body.appendChild(loadscript3)
    },

    showSidebarAction () {
      this.showMiniSidebar = !this.showMiniSidebar
    },

    handler (data) {
      this.showSidebarActive = data
    }
  }
}
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>