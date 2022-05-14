<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <div class="impl_bread_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1><i class="fa fa-car"></i> Ô TÔ</h1>
            <ol class="breadcrumb">
                <!-- <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">company</li> -->
            </ol>
            <div class="d-flex position-relative justify-content-sm-center" style=" margin: auto; width: fit-content;">

                <select class="menu_pro mr-3 parent-menu" v-model="selectedTree_1" v-show="selectedMenu" @change="getMenuChild">
                  <option disabled>{{ selectedTree_1 ? selectedTree_1 : 'Chọn Ô tô' }}</option>
                  <option
                    v-for="(item, index) in carsMenu_1" :key="index"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>

                <select class="menu_pro mr-3 parent-menu" v-model="selectedTree_2" @change="getMenuChild_2" v-show="carsMenu_2.length > 0">
                  <option disabled>{{ selectedTree_2 ? selectedTree_2 : 'Chọn Class'}}</option>
                  <option
                    v-for="(item, index) in carsMenu_2" :key="index"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>

                <select class="menu_pro mr-3 parent-menu" v-model="selectedTree_3" @change="getMenuChild_3" v-show="carsMenu_3.length > 0">
                  <option>{{ selectedTree_3 ? selectedTree_3 : 'Chọn' }}</option>
                  <option
                    v-for="(item, index) in carsMenu_3" :key="index"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>

                <div class="menu_pro mr-3 parent-menu" v-if="selectedMenu">
                  <a href="#" tabindex="-1">
                    <i class="fa fa-car"></i> {{ selectedMenu }}</a
                  >
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <searchBox @data="receiveData" :menuSearch="menuSearch"></searchBox>

    <!------ Featured Cars Start ------>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="impl_heading">
              <h1>SẢN PHẨM: Ô TÔ</h1>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="impl_fea_car_box">
              <div class="impl_fea_car_img">
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/24326/logomercedes-c300-amg-2020-sedan-01.jpg"
                  alt=""
                  class="img-fluid impl_frst_car_img"
                />
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/24326/mercedes-c300-amg-2020-sedan-03.jpg"
                  alt=""
                  class="img-fluid impl_hover_car_img"
                />
                <span class="impl_img_tag" title="compare"
                  ><i class="fa fa-exchange" aria-hidden="true"></i
                ></span>
              </div>
              <div class="impl_fea_car_data">
                <h2 class="line-clamp">
                  <a href="purchase_new.html"
                    >Bán xe MERCEDES C300 2020, GIẢM GIÁ TIỀN MẶT KHỦNG</a
                  >
                </h2>
                <ul>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Nơi Bán : Tp. Hồ Chí Minh</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Tình Trạng : Xe Mới</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis">Năm SX : 2020</span>
                  </li>
                </ul>
                <div class="impl_fea_btn">
                  <button class="impl_btn">
                    <span class="impl_doller">1 Tỷ 929 Triệu Đồng </span>
                    <span class="impl_bnw" @click="$router.push('/detail')">Xem ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--2-->
          <div class="col-lg-3 col-md-6">
            <div class="impl_fea_car_box">
              <div class="impl_fea_car_img">
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/22636/logolincoln-navigator-2019-suv-01.jpg"
                  alt=""
                  class="img-fluid impl_frst_car_img"
                />
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/22636/lincoln-navigator-2019-suv-05.jpg"
                  alt=""
                  class="img-fluid impl_hover_car_img"
                />
                <span class="impl_img_tag" title="compare"
                  ><i class="fa fa-exchange" aria-hidden="true"></i
                ></span>
              </div>
              <div class="impl_fea_car_data">
                <h2 class="line-clamp">
                  <a href="purchase_new.html"
                    >Bán xe Lincoln Navigator L 2019</a
                  >
                </h2>
                <ul>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Nơi Bán : Hà Nội</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Tình Trạng : Xe Mới</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis">Năm SX : 2019</span>
                  </li>
                </ul>
                <div class="impl_fea_btn">
                  <button class="impl_btn">
                    <span class="impl_doller">7 Tỷ 660 Triệu Đồng </span
                    ><span class="impl_bnw">Xem ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--3-->
          <div class="col-lg-3 col-md-6">
            <div class="impl_fea_car_box">
              <div class="impl_fea_car_img">
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/23022/logolexus-gx-460-2010-suv-01.jpg"
                  alt=""
                  class="img-fluid impl_frst_car_img"
                />
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/23022/lexus-gx-460-2010-suv-04.jpg"
                  alt=""
                  class="img-fluid impl_hover_car_img"
                />
                <span class="impl_img_tag" title="compare"
                  ><i class="fa fa-exchange" aria-hidden="true"></i
                ></span>
              </div>
              <div class="impl_fea_car_data">
                <h2 class="line-clamp">
                  <a href="purchase_new.html">Bán xe Lexus GX 460 2010</a>
                </h2>
                <ul>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Nơi Bán : Tp. Hồ Chí Minh</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Tình Trạng : Xe Qua Sử Dụng</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis">Năm SX : 2010</span>
                  </li>
                </ul>
                <div class="impl_fea_btn">
                  <button class="impl_btn">
                    <span class="impl_doller">2 Tỷ 70 Triệu Đồng </span
                    ><span class="impl_bnw">Xem ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--4-->
          <div class="col-lg-3 col-md-6">
            <div class="impl_fea_car_box">
              <div class="impl_fea_car_img">
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/19946/logobmw-730li-2018-sedan-01.jpg"
                  alt=""
                  class="img-fluid impl_frst_car_img"
                />
                <img
                  src="http://sanxesang.com/faces/images/muaban/xehoi/19946/bmw-730li-2018-sedan-03.jpg"
                  alt=""
                  class="img-fluid impl_hover_car_img"
                />
                <span class="impl_img_tag" title="compare"
                  ><i class="fa fa-exchange" aria-hidden="true"></i
                ></span>
              </div>
              <div class="impl_fea_car_data">
                <h2 class="line-clamp">
                  <a href="purchase_new.html">Bán xe BMW 730Li 2020</a>
                </h2>
                <ul>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Nơi Bán : Tp. Hồ Chí Minh</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis"
                      >Tình Trạng : Xe Mới</span
                    >
                  </li>
                  <li>
                    <span class="impl_fea_title ellipsis">Năm SX : 2020</span>
                  </li>
                </ul>
                <div class="impl_fea_btn">
                  <button class="impl_btn">
                    <span class="impl_doller">499 Triệu Đồng </span
                    ><span class="impl_bnw">Xem ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!------ About our company Start ------>
    <div class="impl_about_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="impl_heading">
              <h1>who we are</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="impl_about_data">
              <h2>A Bit About Us</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now. Use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.On the
                other hand, we denounce with righteous indignation and dislike
                men who are so beguiled and demoralized .
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="impl_progress_wrapper">
              <div class="barWrapper">
                <span class="progressText">Customers</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 40%">
                    <div class="progress-value">5410</div>
                  </div>
                </div>
              </div>
              <div class="barWrapper">
                <span class="progressText">Purchases</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 60%">
                    <div class="progress-value">8612</div>
                  </div>
                </div>
              </div>
              <div class="barWrapper">
                <span class="progressText">Sales</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 80%">
                    <div class="progress-value">9782</div>
                  </div>
                </div>
              </div>
              <div class="barWrapper">
                <span class="progressText">REpairs</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 60%">
                    <div class="progress-value">6450</div>
                  </div>
                </div>
              </div>
              <div class="barWrapper">
                <span class="progressText">Vehicles Stock</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 90%">
                    <div class="progress-value">6450</div>
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
import searchBox from '../Select-box/search-box.vue'
import { TransportService } from '@/services/transport.service'
export default {
  data () {
    return {
      carsMenu_1: [],
      treeTransport_1: [],
      carsMenu_2: [],
      treeTransport_2: [],
      carsMenu_3: [],
      treeTransport_3: [],
      transportName: [
        { id: 'transport', text: 'Phương tiện' },
        { id: 'transport_car', text: 'ô tô' },
        { id: 'transport_motorcycle', text: 'xe máy' },
        { id: 'transport_bicycle', text: 'xe đạp' }
      ],
      menuSearch: [],
      selectedMenu: null,
      currentLevel: 1,
      selectedTree_1: null,
      selectedTree_2: null,
      selectedTree_3: null
    }
  },

  filters: {
    transformName (name, transportName) {
      const transport = transportName.filter(item => item.id === name)
      return transport[0] ? transport[0].text : ''
    }
  },

  // created () {
  //   this.getTransportMenu()
  // },

  mounted () {
    this.getTransportMenu('transport_car')
    setTimeout(() => {
      this.$store.commit('loading/SET_LOADING', {
        loading: false,
        time: 1000
      })
    }, 1000)
  },

  methods: {
    async getTransportMenu (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_1 = response.data.transportListRes
        this.menuSearch = this.carsMenu_1
        this.treeTransport_1 = response.data.treeTransport
      } catch (error) {
        console.log(error)
      }
    },
    async getTransportMenu_2 (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.menuSearch = response.data.transportListRes
        // this.treeTransport_2 = response.data.treeTransport
      } catch (error) {
        console.log(error)
      }
    },
    async getTransportMenu_parent_2 (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_2 = response.data.transportListRes
        // this.menuSearch = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async getTransportMenu_parent_3 (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_3 = response.data.transportListRes
      } catch (error) {
        console.log(error)
      }
    },

    async getMenuChild (data) {
      const code = data.target.value
      this.currentLevel = 1
      await this.controllerMenu({ code: code })
      this.carsMenu_2 = []
      this.carsMenu_3 = []
      console.log(this.currentLevel)
    },

    getMenuChild_2 (data) {
      const code = data.target.value
      this.currentLevel = 2
      this.controllerMenu({ code: code })
      this.carsMenu_3 = []
    },

    getMenuChild_3 (data) {
      const code = data.target.value
      this.currentLevel = 3
      this.controllerMenu({ code: code })
    },

    async receiveData (data) {
      this.controllerMenu(data)
    },

    async controllerMenu (data) {
      if (this.currentLevel === 1) {
        const itemSeleted = this.carsMenu_1.filter(e => e.code === data.code)
        this.selectedMenu = itemSeleted.length ? itemSeleted[0].name : ''
        this.selectedTree_1 = this.selectedMenu
        this.getTransportMenu_2(data.code)
      }

      if (this.currentLevel === 2) {
        await this.getTransportMenu_parent_2(data.codeParent)
        const itemSeleted = this.carsMenu_2.filter(e => e.code === data.code)
        this.selectedMenu = itemSeleted.length ? itemSeleted[0].name : ''
        this.selectedTree_2 = this.selectedMenu
        this.getTransportMenu_2(data.code)
      }

      if (this.currentLevel === 3) {
        await this.getTransportMenu_parent_3(data.codeParent)
        const itemSeleted = this.carsMenu_3.filter(e => e.code === data.code)
        this.selectedMenu = itemSeleted.length ? itemSeleted[0].name : ''
        this.selectedTree_3 = this.selectedMenu
        this.getTransportMenu_2(data.code)
      }
      this.currentLevel++
      console.log(this.currentLevel)
      // this.getTransportMenu_3(data.code)
    }
  },

  components: {
    searchBox
  }
}
</script>

<style scoped>
.parent-menu {
  text-align: center;
  margin: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
