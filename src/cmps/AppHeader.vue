<template>
  <header class="main-header">
    <nav class="main-menu">
      <span class="main-logo" v-html="getSvg('logo')"></span>
      <div class="menu-links">
      <RouterLink to="/">Features</RouterLink>
      <RouterLink to="/">Team</RouterLink>
      <RouterLink to="/">Sign In</RouterLink>
      </div>
    </nav>
  </header>
</template>
<script>
import {svgService} from '../services/svg.service.js'
export default {
  methods:{
    getSvg(icon){
    return  svgService.getSvg(icon) 
    }
  },
  computed: {
   
  }
}
</script>