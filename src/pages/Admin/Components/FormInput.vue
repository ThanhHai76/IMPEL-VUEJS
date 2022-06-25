<template>
<div class="nk-content ">
  <div class="container-fluid">
      <div class="nk-content-inner">
          <div class="nk-content-body">
              <div class="components-preview wide-md mx-auto">
                  <div class="nk-block-head nk-block-head-lg wide-sm">
                      <div class="nk-block-head-content">
                          <h3 class="nk-block-title fw-normal">{{ titleForm }}</h3>
                      </div>
                  </div>
                  <div class="nk-block nk-block-lg">
                      <div class="row g-gs">
                          <div class="col-lg-6">
                              <div class="card card-bordered h-100">
                                  <div class="card-inner">
                                      <div class="card-head">
                                          <h5 class="card-title">Customer Info</h5>
                                      </div>
                                      <form action="#">
                                          <div class="form-group">
                                              <label class="form-label" for="full-name">Full Name</label>
                                              <div class="form-control-wrap">
                                                  <input type="text" class="form-control" id="full-name">
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="form-label" for="email-address">Email address</label>
                                              <div class="form-control-wrap">
                                                  <input type="text" class="form-control" id="email-address">
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="form-label" for="phone-no">Phone No</label>
                                              <div class="form-control-wrap">
                                                  <input type="text" class="form-control" id="phone-no">
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="form-label">Communication</label>
                                              <ul class="custom-control-group g-3 align-center">
                                                  <li>
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                          <input type="checkbox" class="custom-control-input" id="com-email">
                                                          <label class="custom-control-label" for="com-email">Email</label>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                          <input type="checkbox" class="custom-control-input" id="com-sms">
                                                          <label class="custom-control-label" for="com-sms">SMS</label>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                          <input type="checkbox" class="custom-control-input" id="com-phone">
                                                          <label class="custom-control-label" for="com-phone">Phone</label>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div class="form-group">
                                              <label class="form-label" for="pay-amount">Amount</label>
                                              <div class="form-control-wrap">
                                                  <input type="text" class="form-control" id="pay-amount">
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="form-label">Payment Methods</label>
                                              <ul class="custom-control-group g-3 align-center">
                                                  <li>
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                          <input type="checkbox" class="custom-control-input" id="pay-card">
                                                          <label class="custom-control-label" for="pay-card">Card</label>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                          <input type="checkbox" class="custom-control-input" id="pay-bitcoin">
                                                          <label class="custom-control-label" for="pay-bitcoin">Bitcoin</label>
                                                      </div>
                                                  </li>
                                                  <li>
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                          <input type="checkbox" class="custom-control-input" id="pay-cash">
                                                          <label class="custom-control-label" for="pay-cash">Cash</label>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div class="form-group">
                                              <button type="submit" class="btn btn-lg btn-primary">Save Informations</button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6">
                              <div class="card card-bordered h-100">
                                  <div class="card-inner">
                                      <div class="card-head">
                                          <h5 class="card-title">Description</h5>
                                      </div>
                                      <form action="#">
                                          <div class="form-group">
                                            <vue-editor v-model="description"></vue-editor>
                                          </div>
                                          <div class="form-group">
                                              <label class="form-label" for="cf-default-textarea">Message</label>
                                              <div class="form-control-wrap">
                                                  <textarea class="form-control form-control-sm" id="cf-default-textarea" placeholder="Write your message"></textarea>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <button type="submit" class="btn btn-lg btn-primary">Save Informations</button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div><!-- .nk-block -->
              </div><!-- .components-preview -->
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { VueEditor } from 'vue2-quill-editor'
export default {
  props: ['titleForm'],
  components: {
    VueEditor
  },
  data () {
    return {
      description: '<h1>Some initial content</h1>'  
    }
  }
}
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>
<style>
.ql-editor, .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6 {
  color: black !important;
}
</style>