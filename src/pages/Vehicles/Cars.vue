<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <BreadcrumbStart ref="menuStart" name="Ô tô" code="transport_car"></BreadcrumbStart>

    <!------ Featured Cars Start ------>
    <PurchaseNew v-show="typeTab === 'NEW'" @typeTab="changeTab"></PurchaseNew>

    <PurchaseUsed v-show="typeTab === 'USED'" @typeTab="changeTab"></PurchaseUsed>

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
import BreadcrumbStart from '../Components/Breadcrumbs_Start.vue'
import { TransportService } from '@/services/transport.service'
import { mapGetters } from 'vuex'
import PurchaseNew from '../Purchase/Purchase_New.vue'
import PurchaseUsed from '../Purchase/Purchase_Used.vue'

export default {
  data () {
    return {
      carsMenu_1: [],
      treeTransport_1: [],
      transportName: [
        { id: 'transport', text: 'Phương tiện' },
        { id: 'transport_car', text: 'ô tô' },
        { id: 'transport_motorcycle', text: 'xe máy' },
        { id: 'transport_bicycle', text: 'xe đạp' }
      ],
      menuSearch: [],
      levelMenu: 0,
      typeTab: 'NEW'
    }
  },

  computed: {
    ...mapGetters({
      getDataEndPoint: 'endpoint/dataEndPoint'
    })
  },

  filters: {
    transformName (name, transportName) {
      const transport = transportName.filter(item => item.id === name)
      return transport[0] ? transport[0].text : ''
    }
  },

  components: {
    BreadcrumbStart,
    PurchaseNew,
    PurchaseUsed
  },

  mounted () {
    this.$refs.menuStart.getTransportMenu('transport_car')
    // setTimeout(() => {
    //   this.$store.commit('loading/SET_LOADING', {
    //     loading: false,
    //     time: 1000
    //   })
    // }, 1000)
  },

  methods: {
    async getTransportMenu (code) {
      try {
        const response = await TransportService.getListTransport({
          codeParent: code
        })
        this.carsMenu_1 = response.data.transportListRes
        this.menuSearch = this.carsMenu_1
        this.levelMenu = response.data.treeTransport ? response.data.treeTransport.length : 1
        this.treeTransport_1 = response.data.treeTransport
      } catch (error) {
        console.log(error)
      }
    },
    changeTab (type) {
      this.typeTab = type
    }
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
