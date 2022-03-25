<template>
  <div>
    <!-- <transition name="fade" mode="out-in" appear>
      <Sidebar
        :isOpen="isOpen"
        :isOpenMobile="isOpenMobile"
        v-on:toggle-sidebar="toggleSideBar"
        v-on:toggle-sidebar-mobile="toggleSideBarMobile"
      />
    </transition> -->
    <div class="main-content d-flex flex-column">
      <div id="preloader" v-if="loading || firstLoading">
        <div id="status">
            <img src="@/assets/images/logo.png" alt="" />
            <div class="loader">
                Loading...
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
        </div>
    </div>
      <Header/>
      <div @click="closeSideBarMobile">
        <slot></slot>
      </div>
      <Footer/>
      <span class="gotop" @click="scrollToTop()"><img src="@/assets/images/goto.png" alt=""></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import Sidebar from '../Components/Sidebar'

export default {
  name: 'app',
  data () {
    return {
      firstLoading: true
    }
  },
  components: {
    Header,
    Footer
    // Sidebar
  },
  created () {
    this.firstLoading = true
  },
  mounted () {
    setTimeout(() => {
      this.firstLoading = false
    }, 2000)
  },
  computed: {
    ...mapGetters({
      isOpen: 'dom/isOpen',
      isOpenMobile: 'dom/isOpenMobile',
      loading: 'loading/getDataLoading'
    })
  },
  methods: {
    toggleSideBar () {
      this.$store.commit('dom/SET_SIDEBAR_STATUS', !this.isOpen)
    },
    toggleSideBarMobile () {
      this.$store.commit('dom/SET_SIDEBAR_STATUS_MOBILE', !this.isOpenMobile)
    },
    closeSideBarMobile () {
      if (this.isOpenMobile) {
        this.$store.commit('dom/SET_SIDEBAR_STATUS_MOBILE', false)
      }
    },

    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
