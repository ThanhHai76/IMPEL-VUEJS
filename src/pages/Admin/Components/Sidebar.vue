<template>
  <div class="nk-sidebar nk-sidebar-fixed is-dark " data-content="sidebarMenu">
      <div class="nk-sidebar-element nk-sidebar-head">
          <div class="nk-menu-trigger">
              <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
              <a href="#" @click="showSidebarAction()" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
          </div>

          <b-sidebar v-model="showSidebar" id="sidebar-1" title="Sidebar" shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
            </div>
          </b-sidebar>

          <div class="nk-sidebar-brand">
              <a href="html/index.html" class="logo-link nk-sidebar-logo">
                  <img class="logo-light logo-img" src="@/assets/auth-css/images/logo.png" srcset="@/assets/auth-css/images/logo2x.png 2x" alt="logo">
                  <img class="logo-dark logo-img" src="@/assets/auth-css/images/logo-dark.png" srcset="@/assets/auth-css/images/logo-dark2x.png 2x" alt="logo-dark">
              </a>
          </div>
      </div><!-- .nk-sidebar-element -->
      <div class="nk-sidebar-element nk-sidebar-body">
          <div class="nk-sidebar-content">
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
  export default {
    data () {
      return {
        showSidebar: false
      }
    },
    created () {
      this.loadScripts()
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
        // this.showSidebar = true
      }
    }
  }
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>