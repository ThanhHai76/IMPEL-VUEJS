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
                                          <div class="form-wrap w-150px ml-2">
                                              <b-form-select class="w-100" v-model="selectData.transport" :options="transportOptions" @change="getListBrand"></b-form-select>
                                          </div>
                                          <div class="form-wrap w-150px ml-2">
                                              <b-form-select class="w-100" v-model="selectData.company" :options="companyOptions" @change="getListSeries"></b-form-select>
                                          </div>
                                          <div class="form-wrap w-150px ml-2">
                                              <b-form-select class="w-100" v-model="selectData.series" :options="seriesOptions" @change="getListModel"></b-form-select>
                                          </div>
                                          <div class="form-wrap w-150px ml-2">
                                              <b-form-select class="w-100" v-model="selectData.model" :options="modelOptions" @change="changeModel"></b-form-select>
                                          </div>
                                      </div><!-- .form-inline -->
                                      <div class="form-inline">
                                        <b-button @click="clearSearch()" variant="primary">Xoá tìm kiếm</b-button>
                                      </div>
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
                                        <tr class="tb-tnx-head text-center">
                                            <th class="tb-tnx-id"><span class="">STT</span></th>
                                            <th class="tb-tnx-info">
                                                <span class="tb-tnx-desc d-none d-sm-inline-block">
                                                    <span>Tên</span>
                                                </span>
                                                <span class="tb-tnx-date d-md-inline-block d-none">
                                                    <span class="d-md-none">Ngày</span>
                                                    <span class="d-none d-md-block">
                                                        <span>Ngày tạo</span>
                                                        <span>Ngày cập nhật</span>
                                                    </span>
                                                </span>
                                            </th>
                                            <th class="tb-tnx-amount is-alt">
                                                <span class="tb-tnx-total">Độ ưu tiên</span>
                                                <span class="tb-tnx-status d-none d-md-inline-block">Trạng thái</span>
                                            </th>
                                            <th class="tb-tnx-action">
                                                <span>&nbsp;</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="tb-tnx-item text-center" v-for="(item, index) in brandData" :key="item.id">
                                            <td class="tb-tnx-id">
                                                <a href="#"><span>{{ index + 1 }}</span></a>
                                            </td>
                                            <td class="tb-tnx-info">
                                                <div class="tb-tnx-desc">
                                                    <span class="title">{{ item.name }}</span>
                                                </div>
                                                <div class="tb-tnx-date">
                                                    <span class="date">{{ item.dateCreate | formatDateTime1 }}</span>
                                                    <span class="date">{{ item.dateModified | formatDateTime1 }}</span>
                                                </div>
                                            </td>
                                            <td class="tb-tnx-amount is-alt">
                                                <div class="tb-tnx-total">
                                                    <span class="amount">{{ item.priority }}</span>
                                                </div>
                                                <div class="tb-tnx-status">
                                                    <span class="badge badge-dot badge-warning">{{ item.status }}</span>
                                                </div>
                                            </td>
                                            <td class="tb-tnx-action">
                                                <b-dropdown>
                                                  <b-dropdown-item @click="showEditTransport(item)">Sửa</b-dropdown-item>
                                                  <b-dropdown-item @click="beforeDeleteTransport(item)">Xoá</b-dropdown-item>
                                                </b-dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

    <b-modal id="modalAdd" title="Thêm phương tiện" v-model="showModalAdd" centered size="lg" hide-footer>
      <div class="modal-body">
          <b-tabs content-class="mt-3">
            <b-tab title="Hãng" active>
              <div class="card-title-group">
                  <div class="card-tools">
                      <div class="form-inline flex-nowrap gx-3">
                          <div class="form-wrap w-150px">
                              <b-form-select v-model="selectData.transport" :options="transportOptions" @change="getListBrand"></b-form-select>
                          </div>
                      </div><!-- .form-inline -->
                  </div><!-- .card-tools -->
              </div><!-- .card-title-group -->
              <form action="#" class="mt-3" @submit.prevent="createCompany">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="createData.company.name" class="form-control" id="add-amount" placeholder="Nhập tên hãng">
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="createData.company.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="createData.company.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="createData.company.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
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
              <div class="card-title-group">
                  <div class="card-tools">
                      <div class="form-inline flex-nowrap gx-3">
                          <div class="form-wrap w-150px">
                              <b-form-select v-model="selectData.transport" :options="transportOptions" @change="getListBrand"></b-form-select>
                          </div>
                          <div class="form-wrap w-150px">
                              <b-form-select v-model="selectData.company" :options="companyOptions" @change="getListSeries"></b-form-select>
                          </div>
                      </div><!-- .form-inline -->
                  </div><!-- .card-tools -->
              </div><!-- .card-title-group -->
              <form action="#" class="mt-3" @submit.prevent="createSeries">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên Series</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="createData.series.name" class="form-control" placeholder="Nhập tên Series">
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="createData.series.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="createData.series.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="createData.series.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
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
            <b-tab title="Model">
              <div class="card-title-group">
                  <div class="card-tools">
                      <div class="form-inline flex-nowrap gx-3">
                          <div class="form-wrap w-150px">
                              <b-form-select v-model="selectData.transport" :options="transportOptions" @change="getListBrand"></b-form-select>
                          </div>
                          <div class="form-wrap w-150px">
                              <b-form-select v-model="selectData.company" :options="companyOptions" @change="getListSeries"></b-form-select>
                          </div>
                          <div class="form-wrap w-150px">
                              <b-form-select v-model="selectData.series" :options="seriesOptions" @change="getListModel"></b-form-select>
                          </div>
                      </div><!-- .form-inline -->
                  </div><!-- .card-tools -->
              </div><!-- .card-title-group -->
              <form action="#" class="mt-3" @submit.prevent="createModel">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên Model</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="createData.model.name" class="form-control" placeholder="Nhập tên Model">
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="createData.model.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="createData.model.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="createData.model.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
                              </div>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="form-group">
                              <button type="submit" data-dismiss="modal" class="btn btn-primary">Thêm Model</button>
                          </div>
                      </div>
                  </div>
              </form>
            </b-tab>
          </b-tabs>
      </div>
    </b-modal>

    <Notification
      :showModalNoti="showModalNoti"
      :notiSuccess="notiSuccess"
      :messNoti="messNoti"
      @close="showModalNoti = false"
    ></Notification>

    <b-modal v-model="showModalAskBeforeDelete" class="modal-noti" title="Thông báo" centered>
      <div class="text-center">
        <b-icon icon="exclamation-circle-fill" class="noti-icon" variant="warning"></b-icon>
        <h5 class="text-noti mt-3 mb-2">{{ messNoti }}</h5>
      </div>
      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="primary" @click="deleteTransport()">
          Xác nhận
        </b-button>
        <b-button size="sm" variant="light" @click="cancel()">
          Đóng
        </b-button>
      </template>
    </b-modal>

    <editVehicle
      :showModalEdit="showModalEdit"
      :editData="editData"
      @close="showModalEdit = false"
      :title="titleEditTransport"
      @reloadList="getReloadList(codeParentItemSelected)"
    >
    </editVehicle>

</div>
</template>

<script>
import { VueEditor } from 'vue2-quill-editor'
import { TransportService } from '@/services/transport.service'
import editVehicle from '../Components/Modal/editVehicle.vue'
export default {
  props: ['titleForm'],
  components: {
    VueEditor,
    editVehicle
  },
  async mounted () {
    await this.getListTransport()
    this.selectData.transport = 'transport_car'
    this.getListBrand('transport_car')
  },
  data () {
    return {
      selectData: {
        transport: null,
        company: null,
        series: null,
        model: null,
        idParent: null
      },
      transportOptions: [
        { value: null, text: 'Chọn phương tiện'}
      ],
      transportData: [],
      brandData: [],
      dataCreateTransport: [],
      search: {
        page: 1,
        limit: 8,
        total: 0
      },
      createData: {
        company: {
          name: null,
          priority: null,
          checkPriority: false
        },
        series: {
          name: null,
          priority: null,
          checkPriority: false
        },
        model: {
          name: null,
          priority: null,
          checkPriority: false
        }
      },
      messAlert: null,
      showModalNoti: false,
      notiSuccess: false,
      messNoti: null,
      showModalAdd: false,
      companyOptions: [
        { value: null, text: 'Chọn hãng'}
      ],
      modelOptions: [
        { value: null, text: 'Chọn model'}
      ],
      seriesOptions: [
        { value: null, text: 'Chọn Series'}
      ],
      showModalAskBeforeDelete: false,
      itemSelected: null,
      showModalEdit: false,
      editData: {},
      titleEditTransport: null,
      dataAllCompany: [],
      dataAllSeries: [],
      dataAllModel: [],
      codeParentItemSelected: null
    }
  },
  watch: {
    'search.page': function () {
      this.getListBrand()
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
        this.transportData = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async getListBrand (code) {
      try {
        this.selectData.codeTransport = code
        this.selectData.idParent = this.transportData.find(e => e.code === code).id
        this.brandData = []
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })

        this.companyOptions = [{ value: null, text: 'Chọn hãng'}]
        this.selectData.company = null
        this.selectData.series = null
        response.data.transportListRes.map((e) => {
          this.companyOptions.push({ value: e.code, text: e.name })
        })

        this.brandData = response.data.transportListRes
        this.dataAllCompany = response.data.transportListRes
      } catch (error) {
        console.log(error)
      } finally {
        this.seriesOptions = [{ value: null, text: 'Chọn Series'}]
        this.modelOptions = [{ value: null, text: 'Chọn model'}]
      }
    },

    async getListSeries (code) {
      try {
        this.selectData.codeTransport = code
        this.selectData.idParent = this.dataAllCompany.find(e => e.code === code).id
        this.seriesOptions = []
        this.selectData.series = null
        this.selectData.model = null
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })
        const seriesOptions = response.data.transportListRes.map((e) => {
          return { value: e.code, text: e.name }
        })
        if (seriesOptions.length > 0) {
          seriesOptions.shift()
          this.seriesOptions = [{ value: null, text: 'Chọn Series' }, ...seriesOptions]
        } else {
          this.seriesOptions = [{ value: null, text: 'Chọn Series' }]
        }

        this.brandData = response.data.transportListRes
        this.dataAllSeries = response.data.transportListRes
      } catch (error) {
        console.log(error)
      } finally {
        this.modelOptions = [{ value: null, text: 'Chọn model'}]
      }
    },

    async getListModel (code) {
      try {
        this.selectData.codeTransport = code
        this.selectData.idParent = this.dataAllSeries.find(e => e.code === code).id
        this.modelOptions = []
        this.selectData.model = null
        const response = await TransportService.getListTransport({
          codeParent: code ? code : ''
        })
        const modelOptions = response.data.transportListRes.map((e) => {
          return { value: e.code, text: e.name }
        })
        if (modelOptions.length > 0) {
          modelOptions.shift()
          this.modelOptions = [{ value: null, text: 'Chọn Model' }, ...modelOptions]
        } else {
          this.modelOptions = [{ value: null, text: 'Chọn Model' }]
        }

        this.brandData = response.data.transportListRes
        this.dataAllModel = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async changeModel (code) {
      this.selectData.codeTransport = code
      const response = await TransportService.getListTransport({
        codeParent: code ? code : ''
      })
      this.brandData = response.data.transportListRes
    },

    async createCompany () {
      try {
        const response = await TransportService.createTransport({
          idParent: this.selectData.idParent,
          codeParent: this.selectData.codeTransport,
          transportList: [{
            name: this.createData.company.name,
            priority: this.createData.company.checkPriority ? Number(this.createData.company.priority) : null,
            icon: ''
          }]
        })
        if (response.code === 1000) {
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Tạo thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
        this.getListBrand(this.selectData.codeTransport)
        setTimeout(() => {
          this.showModalNoti = false
        }, 2000);
      } catch (error) {
        console.log(error)
      } finally {
        this.showModalAdd = false
      }
    },

    async createSeries () {
      try {
        const response = await TransportService.createTransport({
          idParent: this.selectData.idParent,
          codeParent: this.selectData.codeTransport,
          transportList: [{
            name: this.createData.series.name,
            priority: this.createData.series.checkPriority ? Number(this.createData.series.priority) : null,
            icon: ''
          }]
        })
        if (response.code === 1000) {
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Tạo thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
        this.getListSeries(this.selectData.codeTransport)
        setTimeout(() => {
          this.showModalNoti = false
        }, 2000);
      } catch (error) {
        console.log(error)
      } finally {
        this.showModalAdd = false
      }
    },

    async createModel () {
      try {
        const response = await TransportService.createTransport({
          idParent: this.selectData.idParent,
          codeParent: this.selectData.codeTransport,
          transportList: [{
            name: this.createData.model.name,
            priority: this.createData.model.checkPriority ? Number(this.createData.model.priority) : null,
            icon: ''
          }]
        })
        if (response.code === 1000) {
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Tạo thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
        this.getListModel(this.selectData.codeTransport)
        setTimeout(() => {
          this.showModalNoti = false
        }, 2000);
      } catch (error) {
        console.log(error)
      } finally {
        this.showModalAdd = false
      }
    },

    beforeDeleteTransport (item) {
      this.showModalAskBeforeDelete = true
      this.messNoti = 'Bạn có chắc chắn muốn xoá không ?'
      this.itemSelected = item
    },

    async deleteTransport () {
      try {
        const response = await TransportService.actionTransport({
          action: 'DELETE',
          id: this.itemSelected.id
        })
        if (response.code === 1000) {
          this.showModalNoti = true
          this.notiSuccess = true
          this.messNoti = 'Xoá thành công'
        } else {
          this.showModalNoti = true
          this.notiSuccess = false
          this.messNoti = response.message
        }
        this.getReloadList(this.itemSelected.codeParent)
      } catch (error) {
        console.log(error)
      } finally {
        this.showModalAskBeforeDelete = false
      }
    },

    showEditTransport (item) {
      this.showModalEdit = true
      if (this.selectData.transport && !this.selectData.company) this.titleEditTransport = 'Hãng'
      if (this.selectData.company && !this.selectData.series) this.titleEditTransport = 'Series'
      if (this.selectData.series && !this.selectData.model) this.titleEditTransport = 'Model'
      this.codeParentItemSelected = item.codeParent
      this.getDataTransport(item)
    },

    async getDataTransport (item) {
      try {
        const { data } = await TransportService.getDataTransport({
          id: item.id
        })
        this.editData = {
          id: data.id,
          name: data.name,
          priority: data.priority,
          icon: data.icon,
          checkPriority: true
        }
      } catch (error) {
        console.log(error)
      }
    },

    getReloadList (codeParent) {
      if (this.selectData.transport && !this.selectData.company) this.getListBrand(codeParent)
      if (this.selectData.company && !this.selectData.series) this.getListSeries(codeParent)
      if (this.selectData.series && !this.selectData.model) this.getListModel(codeParent)
    },

    clearSearch () {
      this.getListBrand('transport_car')
    }

  }
}
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>

<style scoped>
::v-deep .modal-title, ::v-deep .nav-tabs .nav-link, ::v-deep .modal-body {
  color: black !important ;
}
.modal-noti .modal-body {
  text-align: center;
}
.noti-icon {
  font-size: 60px;
  text-align: center;
  margin-top: 1rem;
}
::v-deep .btn.dropdown-toggle.btn-secondary {
  padding: 5px 10px !important;
}
::v-deep .dropdown-menu {
  transform: translate3d(-100px, 35px, 0px) !important;
}
</style>
