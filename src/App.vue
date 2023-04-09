<template>
  <section class="main-container">
    <AppHeader />
    <RouterView/>
  </section>
</template>

<script>


import { userService } from './services/user.service'
import { store } from './store/store'

import AppHeader from './cmps/AppHeader.vue'


export default {

  created() {
    console.log('Vue App created')

  },
  components: {
    AppHeader,
  },
}
</script>