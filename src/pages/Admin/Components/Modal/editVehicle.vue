<template>
  <div>
    <b-modal id="modalAdd" title="Sửa phương tiện" v-model="showModalEdit" centered size="lg" hide-footer>
      <template #modal-header="{ }">
        <b-button size="sm" class="float-right" variant="outline-secondary" @click="$emit('close')">
          x
        </b-button>
      </template>
      <div class="modal-body">
          <b-tabs content-class="mt-3">
            <b-tab title="Hãng" active>
              <form action="#" class="mt-3" @submit.prevent="createCompany">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.company.name" class="form-control" id="add-amount" placeholder="Nhập tên hãng">
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="editData.company.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="editData.company.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.company.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
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
              <form action="#" class="mt-3" @submit.prevent="createSeries">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên Series</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.series.name" class="form-control" placeholder="Nhập tên Series">
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="editData.series.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="editData.series.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.series.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
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
              <form action="#" class="mt-3" @submit.prevent="createModel">
                  <div class="row g-gs">
                      <div class="col-md-6">
                          <div class="form-group mt-2">
                              <label class="form-label" for="add-amount">Tên Model</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.model.name" class="form-control" placeholder="Nhập tên Model">
                              </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label" for="add-amount"></label>
                              <div class="form-control-wrap">
                                <input class="mr-1" v-model="editData.model.checkPriority" type="checkbox" value="">
                                <label class="form-label" for="add-amount">Chọn độ ưu tiên ?</label>
                              </div>
                          </div>
                          <div class="form-group" v-show="editData.model.checkPriority">
                              <label class="form-label" for="add-amount">Độ ưu tiên</label>
                              <div class="form-control-wrap">
                                  <input type="text" v-model="editData.model.priority" class="form-control" id="add-amount" placeholder="Nhập độ ưu tiên">
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
  </div>
</template>

<script>
  export default {
    props: ['showModalEdit', 'editData']
  }
</script>

<style scoped>
::v-deep .modal-title, ::v-deep .nav-tabs .nav-link{
  color: black !important ;
}
</style>