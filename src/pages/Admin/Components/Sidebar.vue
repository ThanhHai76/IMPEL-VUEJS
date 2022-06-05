<template>
  <div class="nk-sidebar nk-sidebar-fixed is-dark " data-content="sidebarMenu">
      <div class="nk-sidebar-element nk-sidebar-head">
          <div class="nk-menu-trigger">
              <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
              <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
          </div>
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
                          <h6 class="overline-title text-primary-alt">Use-Case Preview</h6>
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item">
                          <a href="html/crm/index.html" class="nk-menu-link">
                              <span class="nk-menu-icon"><em class="icon ni ni-user-list"></em></span>
                              <span class="nk-menu-text">CRM Panel</span><span class="nk-menu-badge">HOT</span>
                          </a>
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item">
                          <a href="html/hotel/index.html" class="nk-menu-link">
                              <span class="nk-menu-icon"><em class="icon ni ni-building"></em></span>
                              <span class="nk-menu-text">Hotel Management</span><span class="nk-menu-badge">HOT</span>
                          </a>
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-heading">
                          <h6 class="overline-title text-primary-alt">Dashboards</h6>
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item">
                          <a href="html/index.html" class="nk-menu-link">
                              <span class="nk-menu-icon"><em class="icon ni ni-dashlite"></em></span>
                              <span class="nk-menu-text">Default Dashboard</span>
                          </a>
                      </li><!-- .nk-menu-item -->
                      
                      <li class="nk-menu-heading">
                          <h6 class="overline-title text-primary-alt">Pre-Built Pages</h6>
                      </li><!-- .nk-menu-heading -->
                      <li class="nk-menu-item has-sub">
                          <a href="#" class="nk-menu-link nk-menu-toggle">
                              <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb"></em></span>
                              <span class="nk-menu-text">Projects</span>
                          </a>
                          <ul class="nk-menu-sub">
                              <li class="nk-menu-item">
                                  <a href="html/project-card.html" class="nk-menu-link"><span class="nk-menu-text">Project Cards</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/project-list.html" class="nk-menu-link"><span class="nk-menu-text">Project List</span></a>
                              </li>
                          </ul><!-- .nk-menu-sub -->
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item has-sub">
                          <a href="#" class="nk-menu-link nk-menu-toggle">
                              <span class="nk-menu-icon"><em class="icon ni ni-users"></em></span>
                              <span class="nk-menu-text">User Manage</span>
                          </a>
                          <ul class="nk-menu-sub">
                              <li class="nk-menu-item">
                                  <a href="html/user-list-regular.html" class="nk-menu-link"><span class="nk-menu-text">User List - Regular</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/user-list-compact.html" class="nk-menu-link"><span class="nk-menu-text">User List - Compact</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/user-details-regular.html" class="nk-menu-link"><span class="nk-menu-text">User Details - Regular</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/user-profile-regular.html" class="nk-menu-link"><span class="nk-menu-text">User Profile - Regular</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/user-card.html" class="nk-menu-link"><span class="nk-menu-text">User Contact - Card</span></a>
                              </li>
                          </ul><!-- .nk-menu-sub -->
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item has-sub">
                          <a href="#" class="nk-menu-link nk-menu-toggle">
                              <span class="nk-menu-icon"><em class="icon ni ni-file-docs"></em></span>
                              <span class="nk-menu-text">AML / KYCs</span>
                          </a>
                          <ul class="nk-menu-sub">
                              <li class="nk-menu-item">
                                  <a href="html/kyc-list-regular.html" class="nk-menu-link"><span class="nk-menu-text">KYC List - Regular</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/kyc-details-regular.html" class="nk-menu-link"><span class="nk-menu-text">KYC Details - Regular</span></a>
                              </li>
                          </ul><!-- .nk-menu-sub -->
                      </li><!-- .nk-menu-item -->
                      <li class="nk-menu-item has-sub">
                          <a href="#" class="nk-menu-link nk-menu-toggle">
                              <span class="nk-menu-icon"><em class="icon ni ni-tranx"></em></span>
                              <span class="nk-menu-text">Transactions</span>
                          </a>
                          <ul class="nk-menu-sub">
                              <li class="nk-menu-item">
                                  <a href="html/transaction-basic.html" class="nk-menu-link"><span class="nk-menu-text">Tranx List - Basic</span></a>
                              </li>
                              <li class="nk-menu-item">
                                  <a href="html/transaction-crypto.html" class="nk-menu-link"><span class="nk-menu-text">Tranx List - Crypto</span></a>
                              </li>
                          </ul><!-- .nk-menu-sub -->
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
        
      }
    }
  }
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>