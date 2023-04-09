<template>
 <span class="main-logo" v-html="getSvg('logo')"></span>
<div class="location">
     <span class="location-svg" v-html="getSvg('location')"></span>
    <p>Lorem, ipsum Rem molestiae, laudantium corporis provident nostrum natus error earum aliquam assumenda id consequuntur illum dolor sint explicabo voluptates!</p>
</div>
<div class="contacts">
     <span class="location-svg" v-html="getSvg('phone')"></span>
     <span>+1-525-698-5255</span>
     <span class="location-svg" v-html="getSvg('mail')"></span>
     <span>dor.nadav@gmail.com</span>
</div>
<div class="about-us">
    <span>Abot-us</span>
    <span>Jobs</span>
    <span>Press</span>
    <span>blogs</span>
</div>
<div class="contact">
    <span>Privacy</span>
    <span>Trems</span>
</div>
<div class="social-icons">
    
</div>
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