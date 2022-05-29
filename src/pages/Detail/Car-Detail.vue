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

    <div class="impl_oldsingle_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <!-- <div class="impl_carparts_inner">
                        <div class="impl_buy_old_car">
                            <div v-html="sliderHTML_view"></div>
                            <div v-html="sliderHTML_thumb_view"></div>

                            <div class="slider slider-for">
                                <div><img width="570" height="176" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                <div><img width="570" height="176" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                <div><img width="570" height="176" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                <div><img width="570" height="176" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                <div><img width="570" height="176" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                            </div>
                            <div class="slider slider-nav">
                                <div>
                                    <div class="impl_thumb_ovrly"><img width="110" height="70" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                </div>
                                <div>
                                    <div class="impl_thumb_ovrly"><img width="110" height="70" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                </div>
                                <div>
                                    <div class="impl_thumb_ovrly"><img width="110" height="70" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                </div>
                                <div>
                                    <div class="impl_thumb_ovrly"><img width="110" height="70" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                </div>
                                <div>
                                    <div class="impl_thumb_ovrly"><img width="110" height="70" src="http://115.146.127.242:8080/api/common/cts/628f007a3928fd6e2b101733/lexus-lx-570-2019-suv-01.jpg" alt=""></div>
                                </div>
                            </div>

                        </div>
                    </div> -->

                  <b-carousel
                    id="carousel-1"
                    :interval="3000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="512"
                    img-height="240"
                    style="text-shadow: 1px 1px 2px #333;"
                  >
                    <b-carousel-slide
                      v-for="(item, index) in detailImages.images" :key="index"
                      :img-src="item"
                    ></b-carousel-slide>

                  </b-carousel>

                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="impl_buycar_data impl_buy_old_car_data">
                        <h1>Expedition , Centaur</h1>
                        <h1>$81000 </h1>
                        <div class="step_car_features">
                            <ul>
                                <li><span class="fea_name">year</span> <span class="fea_colon">: </span><span class="fea_value">2015</span> </li>
                                <li><span class="fea_name">driven</span> <span class="fea_colon">: </span> <span class="fea_value">12000 kms </span> </li>
                                <li><span class="fea_name">city</span> <span class="fea_colon">: </span><span class="fea_value">orlando</span> </li>
                                <li><span class="fea_name">color</span> <span class="fea_colon">: </span><span class="fea_value">white</span> </li>
                            </ul>
                        </div>
                        <div class="impl_old_buy_btn mt-2">
                            <a href="#" class="impl_btn">add to cart</a>
                            <a href="#" class="impl_btn mt-3">buy now</a>
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
      detailImages: [],
      tabIndex: 0,
      currentSlide: 0,
      sliderHTML: '',
      sliderHTML_thumb: '',
      sliderHTML_view: '',
      sliderHTML_thumb_view: ''
    }
  },

  async mounted () {
    await this.fetchData()
  },

  methods: {
    async fetchData () {
      try {
        const { data } = await TransportService.getDetailTransport({
          id: this.carId
        })
        this.dataDetail = data
        const { vehicleParametersGroup, listParameters, detailImages } = this.dataDetail
        this.vehicleParametersGroup = vehicleParametersGroup
        this.listParameters = listParameters
        this.detailImages = detailImages

        this.detailImages.images.forEach(item => {
          this.sliderHTML += `<div><img width="570" height="176" src="${item}" alt=""></div>`
          this.sliderHTML_thumb += `<div><div class="impl_thumb_ovrly"><img width="110" height="70" src="${item}" alt=""></div></div>`
        })
        this.sliderHTML_view = '<div class="slider slider-for">' + this.sliderHTML + '</div>'
        this.sliderHTML_thumb_view = '<div class="slider slider-nav">' + this.sliderHTML_thumb + '</div>'
      } catch (error) {
        console.log(error)
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
.slide-style-1 {
  width: 750px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;
}
.slide-style-2 {
  width: 750px; position: relative; left: -750px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;
}
.slide-style-3 {
  width: 750px; position: relative; left: -1500px; top: 0px; z-index: 998; opacity: 0;
}
</style>
