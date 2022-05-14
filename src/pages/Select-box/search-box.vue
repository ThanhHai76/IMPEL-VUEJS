<template>
  <div class="impl_searchbox_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="impl_buycar_wrapper">
            <div class="impl_buycar_color">
              <VueSlickCarousel v-bind="settings">
                <div
                  style="padding: 5px;"
                  class="slick-slide"
                  aria-hidden="true"
                  tabindex="-1"
                  v-for="item in menuSearch" :key="item.id"
                >
                  <div class="menu_pro" @click="getMenuChild(item)">
                    <a href="javascript:void(0)" tabindex="-1">
                      <i class="fa fa-car"></i> {{ item.name }}
                    </a>
                  </div>
                </div>

                <div
                  style="padding: 5px; "
                  class="slick-slide"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div class="menu_pro">
                    <a href="#" tabindex="-1">
                      <i class="fa fa-car"></i> Chọn model</a
                    >
                  </div>
                </div>
                <div
                  style="padding: 5px; "
                  class="slick-slide"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div class="menu_pro">
                    <a href="#" tabindex="-1">
                      <i class="fa fa-car"></i> Chọn model</a
                    >
                  </div>
                </div>
                <div
                  style="padding: 5px; "
                  class="slick-slide"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div class="menu_pro">
                    <a href="#" tabindex="-1">
                      <i class="fa fa-car"></i> Chọn model</a
                    >
                  </div>
                </div>
                <div
                  style="padding: 5px; "
                  class="slick-slide"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div class="menu_pro">
                    <a href="#" tabindex="-1">
                      <i class="fa fa-car"></i> Chọn model</a
                    >
                  </div>
                </div>
                <div
                  style="padding: 5px; "
                  class="slick-slide"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <div class="menu_pro">
                    <a href="#" tabindex="-1">
                      <i class="fa fa-car"></i> Chọn model</a
                    >
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menuSearch'],
  data () {
    return {
      settings: {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        touchThreshold: 4
      }
    }
  },
  methods: {
    getMenuChild (item) {
      // this.$router.push(`/transport?code=${item.code}`)
      this.$emit('data', item)
    }
  }
}
</script>

<style scoped>
.menu_pro:hover {
  cursor: pointer;
}
</style>
