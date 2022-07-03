<template>
<div class="nk-content ">
    <div class="container-fluid">
        <div class="nk-content-inner">
            <div class="nk-content-body">
                <div class="nk-block-head">
                    <div class="nk-block-between g-3">
                        <div class="nk-block-head-content">
                            <h3 class="nk-block-title page-title">{{ titleForm }}</h3>
                        </div><!-- .nk-block-head-content -->
                        <div class="nk-block-head-content">
                            <div class="toggle-wrap nk-block-tools-toggle">
                                <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                                <div class="toggle-expand-content" data-content="pageMenu">
                                    <ul class="nk-block-tools justify-between g-3">
                                        <!-- <li><a href="#" class="btn btn-white btn-outline-light"><em class="icon ni ni-upload-cloud"></em><span>Import</span></a></li> -->
                                        <li><a href="#" data-toggle="modal" v-b-modal.modalAdd data-target="#addPayment" class="btn text-white bg-primary"><em class="icon ni ni-plus"></em><span>Thêm hãng</span></a></li>
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
                                  <div class="card-tools">
                                      <div class="form-inline flex-nowrap gx-3">
                                          <div class="form-wrap w-150px">
                                              <b-form-select v-model="selectData.transport" :options="transportOptions" @change="getListBrand"></b-form-select>
                                          </div>
                                          <!-- <div class="btn-wrap">
                                              <span class="d-none d-md-block"><button class="btn btn-dim btn-outline-light disabled">Apply</button></span>
                                              <span class="d-md-none"><button class="btn btn-dim btn-outline-light btn-icon disabled"><em class="icon ni ni-arrow-right"></em></button></span>
                                          </div> -->
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
                                <table class="table table-tranx">
                                    <thead>
                                        <tr class="tb-tnx-head">
                                            <th class="tb-tnx-id"><span class="">STT</span></th>
                                            <th class="tb-tnx-info">
                                                <span class="tb-tnx-desc d-none d-sm-inline-block">
                                                    <span>Tên hãng</span>
                                                </span>
                                                <span class="tb-tnx-date d-md-inline-block d-none">
                                                    <span class="d-none d-md-block">
                                                        <span>Độ ưu tiên</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th class="tb-tnx-amount is-alt">
                                                <span class="tb-tnx-status d-none d-md-inline-block">Trạng thái</span>
                                            </th>
                                            <th class="tb-tnx-action">
                                                <span>&nbsp;</span>
                                            </th>
                                        </tr><!-- tb-tnx-item -->
                                    </thead>
                                    <tbody>
                                        <tr class="tb-tnx-item" v-for="(item, index) in brandData" :key="item.id">
                                            <td class="tb-tnx-id">
                                                <a href="#"><span>{{ index + 1 }}</span></a>
                                            </td>
                                            <td class="tb-tnx-info">
                                                <div class="tb-tnx-desc">
                                                    <span class="title">{{ item.name }}</span>
                                                </div>
                                                <div class="tb-tnx-date">
                                                    <!-- <span class="date">10-05-2021</span> -->
                                                    <span class="date">{{ item.priority }}</span>
                                                </div>
                                            </td>
                                            <td class="tb-tnx-amount is-alt">
                                                <!-- <div class="tb-tnx-total">
                                                    <span class="amount">{{ item.priority }}</span>
                                                </div> -->
                                                <div class="tb-tnx-status">
                                                    <span class="badge badge-dot badge-warning">{{ item.status }}</span>
                                                </div>
                                            </td>
                                            <td class="tb-tnx-action">
                                                <div class="dropdown">
                                                    <a class="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                                        <ul class="link-list-opt no-bdr">
                                                            <li><a href="#"><em class="icon ni ni-eye"></em><span>View</span></a></li>
                                                            <li><a href="#" data-toggle="modal" data-target="#editPayment"><em class="icon ni ni-edit"></em><span>Edit</span></a></li>
                                                            <li><a href="#" data-toggle="modal" data-target="#deletePayment"><em class="icon ni ni-delete"></em><span>Delete</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr><!-- tb-tnx-item -->
                                    </tbody>
                                </table>
                            </div><!-- .card-inner -->
                            <div class="card-inner">
                                <ul class="pagination justify-content-center justify-content-md-start">
                                    <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><span class="page-link"><em class="icon ni ni-more-h"></em></span></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul><!-- .pagination -->
                            </div><!-- .card-inner -->
                        </div><!-- .card-inner-group -->
                    </div><!-- .card -->
                </div><!-- .nk-block -->
            </div>
        </div>
    </div>

    <b-modal id="modalAdd" centered size="lg" hide-footer>
      <div class="modal-body-md">
          <!-- <h5 class="modal-title">Cấu hình</h5> -->
          <b-tabs content-class="mt-3">
            <b-tab title="Hãng" active>
              <form action="#" class="mt-2">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group">
                              <label class="form-label" for="add-amount">Name</label>
                              <div class="form-control-wrap">
                                  <input type="text" class="form-control" id="add-amount" placeholder="$ Amount">
                              </div>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="form-group">
                              <button type="submit" data-dismiss="modal" class="btn btn-primary">Thêm hãng</button>
                          </div>
                      </div>
                  </div>
              </form>
            </b-tab>
            <b-tab title="Series">
              <form action="#" class="mt-2">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group">
                              <label class="form-label" for="add-amount">Name</label>
                              <div class="form-control-wrap">
                                  <input type="text" class="form-control" id="add-amount" placeholder="$ Amount">
                              </div>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="form-group">
                              <button type="submit" data-dismiss="modal" class="btn btn-primary">Thêm Series</button>
                          </div>
                      </div>
                  </div>
              </form>
            </b-tab>
          </b-tabs>
      </div>
    </b-modal>

</div>
</template>

<script>
import { VueEditor } from 'vue2-quill-editor'
import { TransportService } from '@/services/transport.service'
export default {
  props: ['titleForm'],
  components: {
    VueEditor
  },
  created () {
    this.getListTransport()
    this.getListBrand('transport_car')
  },
  data () {
    return {
      selectData: {
        transport: null,
        company: null
      },
      transportOptions: [
        { value: null, text: 'Chọn phương tiện'}
      ],
      brandData: [],
      dataCreateTransport: []
    }
  },
  methods: {
    async getListTransport () {
      try {
        const response = await TransportService.getListTransport({
          codeParent: 'transport'
        })
        response.data.transportListRes.map((e) => {
          this.transportOptions.push({ value: e.code, text: e.name })
        })
      } catch (error) {
        console.log(error)
      }
    },

    async getListBrand (code) {
      try {
        this.selectData.codeTransport = code
        this.brandData = []
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })
        this.brandData = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async createTransport (idParent, code) {
      try {
        const response = await TransportService.createTransport({
          idParent: idParent,
          codeParent: code,
          transportList: [{
            name: '',
            priority: 1
          }]
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>
