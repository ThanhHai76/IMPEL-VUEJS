<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <div class="impl_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">{{ dataDetail.manufacture }}
                  <h1>{{ dataDetail.transport }}</h1>
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                          <a href="#">{{ dataDetail.manufacture }}</a>
                      </li>
                      <li class="breadcrumb-item active">{{ dataDetail.model }}
                      </li>
                  </ol>
              </div>
            </div>
        </div>
    </div>
    <!------ Contact Wrapper Start ------>
    <div class="impl_contact_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
              <div class="impl_heading">
                  <h1>
                      <i class="fa fa-bell-o" style="color: #f15b5b;"></i> {{ dataDetail.transport }} {{ dataDetail.manufacture }} {{ dataDetail.model }}
                  </h1>
              </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="impl_contact_info">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="impl_contact_box">
                    <div class="impl_con_data">
                      <i class="fa fa-sellsy" aria-hidden="true"></i>
                      <h2>Thông tin xe</h2>
                      <p><i class="fa fa-money"></i> Giá bán</p>
                      <p><i class="fa fa-calendar"></i> Năm SX</p>
                      <p><i class="fa fa-info"></i></p>
                      <p><i class="fa fa-calendar-o"></i> Ngày đăng</p>
                      <p><i class="fa fa-car"></i></p>
                      <p><i class="fa fa-university"></i></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="impl_contact_box">
                    <div class="impl_con_data">
                      <i class="fa fa-info-circle"></i>
                      <h2>THÔNG TIN NGƯỜI BÁN</h2>
                      <p>514 S. Magnolia St.<br />Orlando , US</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="impl_contact_box">
                    <div class="impl_con_data">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                      <h2>THÔNG TIN KHÁC</h2>
                      <p><a href="#">dummymail@mail.com</a></p>
                      <p><a href="#">yourmail@mail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="impl_contact_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="impl_contact_info">
              <div class="row">
                  <div class="col-lg-12 col-md-12">
                      <div class="impl_heading">
                          <h1><i class="fa fa-cog" style="color: #f15b5b;"></i> Thông số kỹ thuật</h1>
                      </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" v-for="(item, index) in listParameters" :key="index">
                      <a class="nav-link" :class="{'active': tabIndex === index}" @click="tabIndex = index" href="javascript:void(0)" role="tab" aria-selected="true" style="font-size: 16px;">
                        {{ item }}
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content mt-3" id="myTabContent">
                    <div class="tab-pane fade" v-for="(itemVehicle, indexVehicle) in vehicleParametersGroup" :key="itemVehicle.code" :class="{'active show': tabIndex === indexVehicle}" role="tabpanel" aria-labelledby="home-tab">
                      <h3 style="text-align: center; padding: 10px 0px;">
                          <i class="fa fa-cogs" style="color: #f15b5b;"></i> {{ itemVehicle.name }}
                      </h3>
                      <p v-for="(itemParam, indexParam) in itemVehicle.lstVehicleParameters" :key="indexParam">
                        <span class="xq title-row mr-2">{{ itemParam.parameters }} : </span>
                        <span style="color: #f15b5b; font-size: 15px;">{{ itemParam.transportColumnName }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { TransportService } from '@/services/transport.service'
export default {
  data () {
    return {
      carId: this.$route.query.id,
      dataDetail: {},
      vehicleParametersGroup: [],
      listParameters: [],
      tabIndex: 0
    }
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    async fetchData () {
      try {
        const { data } = await TransportService.getDetailTransport({
          id: this.carId
        })
        this.dataDetail = data
        const { vehicleParametersGroup, listParameters } = this.dataDetail
        this.vehicleParametersGroup = vehicleParametersGroup
        this.listParameters = listParameters
      } catch (error) {
        
      }
    }
  }
}
</script>

<style scoped>
.impl_bread_wrapper {
  background-image: url(../../assets/images/cars/cars-detail.jpg);
}
.title-row {
  font-size: 15px;
  color: #fff;
  /* width: 50%; */
  text-transform: capitalize;
  display: inline-block;
}
</style>
