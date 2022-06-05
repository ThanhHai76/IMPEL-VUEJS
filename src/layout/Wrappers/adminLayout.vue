<template>
<div class="nk-body bg-lighter npc-general has-sidebar ">
    <div class="nk-app-root">
      <!-- sidebar -->
        <!-- main @s -->
        <div class="nk-main ">
          <Sidebar></Sidebar>
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/pages/Admin/Components/Sidebar'
// import Header from '@/pages/Admin/Components/Header'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Sidebar,
    // Header
  },

  mounted () {

  },
  methods: {

  }
}
</script>

<style src="@/assets/auth-css/css/dashlite.css" scoped></style>
<style src="@/assets/auth-css/css/theme.css" scoped></style>
