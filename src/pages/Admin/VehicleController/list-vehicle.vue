<template>
 <div class="nk-wrap">
    <!-- Header -->
    <div class="nk-header nk-header-fixed is-light">
      <div class="container-fluid">
          <div class="nk-header-wrap">
              <div class="nk-menu-trigger d-xl-none ml-n1">
                  <a href="#" @click="showSidebar()" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
              </div>
              <div class="nk-header-brand d-xl-none">
                  <a href="html/index.html" class="logo-link">
                      <img class="logo-light logo-img" src="@/assets/auth-css/images/logo.png" srcset="@/assets/auth-css/images/logo2x.png 2x" alt="logo">
                      <img class="logo-dark logo-img" src="@/assets/auth-css/images/logo-dark.png" srcset="@/assets/auth-css/images/logo-dark2x.png 2x" alt="logo-dark">
                  </a>
              </div><!-- .nk-header-brand -->
              <div class="nk-header-news d-none d-xl-block">
                  <div class="nk-news-list">
                      <a class="nk-news-item" href="#">
                          <div class="nk-news-icon">
                              <em class="icon ni ni-card-view"></em>
                          </div>
                      </a>
                  </div>
              </div><!-- .nk-header-news -->
              <div class="nk-header-tools">
                  <ul class="nk-quick-nav">
                      <b-dropdown class="dropdown user-dropdown" variant="link">
                        <template #button-content>
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                              <div class="user-toggle">
                                  <div class="user-avatar sm">
                                      <em class="icon ni ni-user-alt"></em>
                                  </div>
                                  <div class="user-info d-none d-md-block">
                                      <div class="user-status">Administrator</div>
                                      <div class="user-name dropdown-indicator">{{ dataUser.username }}</div>
                                  </div>
                              </div>
                          </a>
                        </template>
                        <b-dropdown-item href="#">
                          <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                              <div class="user-card">
                                  <div class="user-avatar">
                                      <span>AB</span>
                                  </div>
                                  <div class="user-info">
                                      <span class="lead-text">{{ dataUser.username }}</span>
                                      <span class="sub-text">{{ dataUser.email }}</span>
                                  </div>
                              </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          <div class="dropdown-inner">
                              <ul class="link-list">
                                  <li><a href="#" @click="goBackHome"><em class="icon ni ni-home"></em><span>Trang chủ</span></a></li>
                              </ul>
                          </div>
                          <div class="dropdown-inner">
                              <ul class="link-list">
                                  <li><a href="javascript:void(0)" @click="logout()"><em class="icon ni ni-signout"></em><span>Đăng xuất</span></a></li>
                              </ul>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                      <li class="dropdown notification-dropdown mr-n1">
                          <a href="#" class="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                              <div class="icon-status icon-status-info"><em class="icon ni ni-bell"></em></div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                              <div class="dropdown-head">
                                  <span class="sub-title nk-dropdown-title">Notifications</span>
                                  <a href="#">Mark All as Read</a>
                              </div>
                              <div class="dropdown-body">
                                  <div class="nk-notification">
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                      <div class="nk-notification-item dropdown-inner">
                                          <div class="nk-notification-icon">
                                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                          </div>
                                          <div class="nk-notification-content">
                                              <div class="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                              <div class="nk-notification-time">2 hrs ago</div>
                                          </div>
                                      </div>
                                  </div><!-- .nk-notification -->
                              </div><!-- .nk-dropdown-body -->
                              <div class="dropdown-foot center">
                                  <a href="#">View All</a>
                              </div>
                          </div>
                      </li><!-- .dropdown -->
                  </ul><!-- .nk-quick-nav -->
              </div><!-- .nk-header-tools -->
          </div><!-- .nk-header-wrap -->
      </div><!-- .container-fliud -->
    </div>
    
    <div class="nk-content ">
        <div class="container-fluid">
            <div class="nk-content-inner">
                <div class="nk-content-body">
                    <div class="nk-block-head">
                        <div class="nk-block-between g-3">
                            <div class="nk-block-head-content">
                                <h3 class="nk-block-title page-title">Danh sách phương tiện</h3>
                            </div><!-- .nk-block-head-content -->
                            <div class="nk-block-head-content">
                                <div class="toggle-wrap nk-block-tools-toggle">
                                    <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                                    <div class="toggle-expand-content" data-content="pageMenu">
                                        <ul class="nk-block-tools justify-between g-3">
                                            <!-- <li><a href="#" class="btn btn-white btn-outline-light"><em class="icon ni ni-upload-cloud"></em><span>Import</span></a></li> -->
                                            <li><a href="#" data-toggle="modal" @click="showModalAdd = true" data-target="#addPayment" class="btn text-white bg-primary"><em class="icon ni ni-plus"></em><span>Thêm cấu hình</span></a></li>
                                        </ul>
                                    </div>
                                </div><!-- .toggle-wrap -->
                            </div><!-- .nk-block-head-content -->
                        </div><!-- .nk-block-between -->
                    </div><!-- .nk-block-head -->
                    <div class="nk-block">
                        <div class="card card-bordered card-stretch">
                            <div class="card-inner-group">
                                <div class="card-inner position-relative card-tools-toggle">
                                  <div class="card-title-group">
                                      <div class="card-tools d-flex justify-between w-100">
                                          <div class="form-inline">

                                          </div><!-- .form-inline -->
                                      </div><!-- .card-tools -->
                                  </div><!-- .card-title-group -->
                                  <div class="card-search search-wrap" data-search="search">
                                      <div class="card-body">
                                          <div class="search-content">
                                              <a href="#" class="search-back btn btn-icon toggle-search" data-target="search"><em class="icon ni ni-arrow-left"></em></a>
                                              <input type="text" class="form-control border-transparent form-focus-none" placeholder="Search by user or email">
                                              <button class="search-submit btn btn-icon"><em class="icon ni ni-search"></em></button>
                                          </div>
                                      </div>
                                  </div><!-- .card-search -->
                              </div><!-- .card-inner -->
                                
                                <div class="card-inner p-0">
                                    <div class="nk-tb-list nk-tb-ulist">
                                        <div class="nk-tb-item nk-tb-head">
                                            <div class="nk-tb-col nk-tb-col-check">
                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                    <input type="checkbox" class="custom-control-input" id="uid">
                                                    <label class="custom-control-label" for="uid"></label>
                                                </div>
                                            </div>
                                            <div class="nk-tb-col"><span class="sub-text">User</span></div>
                                            <div class="nk-tb-col tb-col-mb"><span class="sub-text">Balance</span></div>
                                            <div class="nk-tb-col tb-col-md"><span class="sub-text">Phone</span></div>
                                            <div class="nk-tb-col tb-col-lg"><span class="sub-text">Verified</span></div>
                                            <div class="nk-tb-col tb-col-lg"><span class="sub-text">Last Login</span></div>
                                            <div class="nk-tb-col tb-col-md"><span class="sub-text">Status</span></div>
                                            <div class="nk-tb-col nk-tb-col-tools text-right">
                                                <div class="dropdown">
                                                    <a href="#" class="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-toggle="dropdown" data-offset="0,5"><em class="icon ni ni-plus"></em></a>
                                                    <div class="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                        <ul class="link-tidy sm no-bdr">
                                                            <li>
                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" checked="" id="bl">
                                                                    <label class="custom-control-label" for="bl">Balance</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" checked="" id="ph">
                                                                    <label class="custom-control-label" for="ph">Phone</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="vri">
                                                                    <label class="custom-control-label" for="vri">Verified</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="st">
                                                                    <label class="custom-control-label" for="st">Status</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- .nk-tb-item -->
                                        <div class="nk-tb-item">
                                            <div class="nk-tb-col nk-tb-col-check">
                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                    <input type="checkbox" class="custom-control-input" id="uid1">
                                                    <label class="custom-control-label" for="uid1"></label>
                                                </div>
                                            </div>
                                            <div class="nk-tb-col">
                                                <a href="html/user-details-regular.html">
                                                    <div class="user-card">
                                                        <div class="user-avatar bg-primary">
                                                            <span>AB</span>
                                                        </div>
                                                        <div class="user-info">
                                                            <span class="tb-lead">Abu Bin Ishtiyak <span class="dot dot-success d-md-none ml-1"></span></span>
                                                            <span>info@softnio.com</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="nk-tb-col tb-col-mb">
                                                <span class="tb-amount">35,040.34 <span class="currency">USD</span></span>
                                            </div>
                                            <div class="nk-tb-col tb-col-md">
                                                <span>+811 847-4958</span>
                                            </div>
                                            <div class="nk-tb-col tb-col-lg">
                                                <ul class="list-status">
                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                    <li><em class="icon ni ni-alert-circle"></em> <span>KYC</span></li>
                                                </ul>
                                            </div>
                                            <div class="nk-tb-col tb-col-lg">
                                                <span>10 Feb 2020</span>
                                            </div>
                                            <div class="nk-tb-col tb-col-md">
                                                <span class="tb-status text-success">Active</span>
                                            </div>
                                            <div class="nk-tb-col nk-tb-col-tools">
                                                <ul class="nk-tb-actions gx-1">
                                                    <li class="nk-tb-action-hidden">
                                                        <a href="#" class="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                            <em class="icon ni ni-wallet-fill"></em>
                                                        </a>
                                                    </li>
                                                    <li class="nk-tb-action-hidden">
                                                        <a href="#" class="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                            <em class="icon ni ni-mail-fill"></em>
                                                        </a>
                                                    </li>
                                                    <li class="nk-tb-action-hidden">
                                                        <a href="#" class="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div class="drodown">
                                                            <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li><a href="#"><em class="icon ni ni-focus"></em><span>Quick View</span></a></li>
                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Transaction</span></a></li>
                                                                    <li><a href="#"><em class="icon ni ni-activity-round"></em><span>Activities</span></a></li>
                                                                    <li class="divider"></li>
                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div><!-- .nk-tb-item -->
                                    </div><!-- .nk-tb-list -->
                                </div><!-- .card-inner -->

                                <div class="card-inner">
                                    <ul class="pagination justify-content-center justify-content-md-start">
                                        <b-pagination
                                          v-model="search.page"
                                          :total-rows="search.total"
                                          :per-page="search.limit"
                                        ></b-pagination>
                                    </ul><!-- .pagination -->
                                </div><!-- .card-inner -->
                            </div><!-- .card-inner-group -->
                        </div><!-- .card -->
                    </div><!-- .nk-block -->
                </div>
            </div>
        </div>

        <Notification
          :showModalNoti="showModalNoti"
          :notiSuccess="notiSuccess"
          :messNoti="messNoti"
          @close="showModalNoti = false"
        ></Notification>

    </div>
    
 </div>
</template>

<script>
import EventBus from '../Components/EventBus'
export default {
  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData')),
      search: {
        page: 1,
        limit: 8,
        total: 0
      },
    }
  },

  methods: {
    async logout () {
      await this.$store.dispatch('user/clear')
      this.$store.dispatch('auth/logout')
      window.location.href = '/login'
    },
    goBackHome () {
      window.location.href = '/'
    },
    showSidebar () {
      EventBus.$emit('showSidebar', true);
    }
  }
}
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>