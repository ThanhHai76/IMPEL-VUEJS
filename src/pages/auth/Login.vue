<template>
  <div class="nk-body bg-white npc-general pg-auth">
    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main ">
            <!-- wrap @s -->
            <div class="nk-wrap nk-wrap-nosidebar">
                <!-- content @s -->
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
                        <div class="brand-logo pb-4 text-center">
                            <a href="html/index.html" class="logo-link">
                                <img class="logo-light logo-img logo-img-lg" src="@/assets/auth-css/images/logo.png" srcset="@/assets/auth-css/images/logo2x.png 2x" alt="logo">
                                <img class="logo-dark logo-img logo-img-lg" src="@/assets/auth-css/images/logo-dark.png" srcset="@/assets/auth-css/images/logo-dark2x.png 2x" alt="logo-dark">
                            </a>
                        </div>
                        <div class="card card-bordered">
                            <div class="card-inner card-inner-lg">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">Đăng nhập</h4>
                                        <div class="nk-block-des">
                                            <!-- <p>Access the CryptoLite panel using your email and passcode.</p> -->
                                        </div>
                                    </div>
                                </div>
                                <ValidationObserver ref="observer">
                                  <form @submit.prevent="validate().then(makeLogin)" slot-scope="{ validate }">
                                    <ValidationProvider rules="required" vid="email" name="Email">
                                      <div class="form-group" slot-scope="{ valid, errors }" label="Email">
                                          <div class="form-label-group">
                                              <label class="form-label" for="default-01">Email hoặc tên</label>
                                          </div>
                                          <div class="form-control-wrap">
                                              <input type="text"
                                                v-model="authData.username"
                                                v-on:keyup.enter="validate().then(makeLogin)"
                                                :state="errors[0] ? false : (valid ? true : null)"
                                                class="form-control form-control-lg" id="default-01"
                                                placeholder="Nhập email hoặc tên"
                                              >
                                              <div class="invalid-feedback">
                                                {{ errors[0] }}
                                              </div>
                                          </div>
                                      </div>
                                    </ValidationProvider>
                                    <ValidationProvider rules="required" name="Password">
                                      <div class="form-group mt-2" slot-scope="{ valid, errors }" label="Password">
                                          <div class="form-label-group">
                                              <label class="form-label" for="password">Mật khẩu</label>
                                              <!-- <a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html">Forgot Code?</a> -->
                                          </div>
                                          <div class="form-control-wrap">
                                              <a href="javascript:void(0)" @click="typePassword === 'password' ? typePassword = 'text' : typePassword = 'password'" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                  <em v-if="typePassword === 'password'" class="passcode-icon icon-show icon ni ni-eye"></em>
                                                  <em v-else class="passcode-icon icon-show icon ni ni-eye-off"></em>
                                              </a>
                                              <input
                                                :type="typePassword"
                                                v-model="authData.password"
                                                v-on:keyup.enter="validate().then(makeLogin)"
                                                :state="errors[0] ? false : (valid ? true : null)"
                                                class="form-control form-control-lg" id="password"
                                                placeholder="Nhập mật khẩu"
                                              >
                                              <div class="invalid-feedback">
                                                {{ errors[0] }}
                                              </div>
                                          </div>
                                      </div>
                                    </ValidationProvider>
                                      <p class="text-center text-danger mt-2 fs-6" v-show="messageErr">{{ messageErr }}</p>
                                      <div class="form-group mt-2">
                                          <button class="btn btn-lg btn-primary btn-block">Đăng nhập</button>
                                      </div>
                                  </form>
                                </ValidationObserver>
                                <div class="form-note-s2 d-flex justify-content-between pt-4 px-3">
                                  <a href="/">Trang chủ</a>
                                  <a href="javascript:void(0)" @click="$router.push('/register')">Tạo tài khoản</a>
                                </div>
                                <!-- <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul class="nav justify-center gx-4">
                                    <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <div class="nk-footer nk-auth-footer-full">
                        <div class="container wide-lg">
                            <div class="row g-3">
                                <div class="col-lg-6 order-lg-last">
                                    <ul class="nav nav-sm justify-content-center justify-content-lg-end">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Terms & Condition</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Help</a>
                                        </li>
                                        <li class="nav-item dropup">
                                            <a class="dropdown-toggle dropdown-indicator has-indicator nav-link" data-toggle="dropdown" data-offset="0,10"><span>English</span></a>
                                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                                <ul class="language-list">
                                                    <li>
                                                        <a href="#" class="language-item">
                                                            <img src="@/assets/auth-css/images/flags/english.png" alt="" class="language-flag">
                                                            <span class="language-name">English</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="language-item">
                                                            <img src="@/assets/auth-css/images/flags/spanish.png" alt="" class="language-flag">
                                                            <span class="language-name">Español</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="language-item">
                                                            <img src="@/assets/auth-css/images/flags/french.png" alt="" class="language-flag">
                                                            <span class="language-name">Français</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="language-item">
                                                            <img src="@/assets/auth-css/images/flags/turkey.png" alt="" class="language-flag">
                                                            <span class="language-name">Türkçe</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <div class="nk-block-content text-center text-lg-left">
                                        <p class="text-soft">&copy; 2021 CryptoLite. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- wrap @e -->
            </div>
            <!-- content @e -->
        </div>
        <!-- main @e -->
    </div>
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'
  export default {
    data () {
      return {
        authData: {
          username: null,
          password: null
        },
        messageErr: null,
        typePassword: 'password'
      }
    },

    methods: {
      async makeLogin () {
        try {
          if (!this.authData.username || !this.authData.password) return

          const { data } = await AuthService.makeLogin({
            username: this.authData.username,
            password: this.authData.password
          })
          if (data.code === 1000) {
            AuthService._setAuthData({
              accessToken: data.data.token,
              userData: data.data
            })
            window.location.href = '/admin'
          } else {
            this.messageErr = data.message
          }
        } catch (error) {
          this.$refs.observer.setErrors({
            email: [error.message]
          })
        }
      }
    }
  }
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>