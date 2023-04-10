<template>
<section class="main-footer">
 <div class="main-logo" v-html="getSvg('logo')"></div>
<div class="location">
     <span class="footer-svg" v-html="getSvg('location')"></span>
    <span>Lorem, ipsum Rem molestiae, laudantium corporis provident nostrum natus error earum aliquam assumenda id consequuntur illum dolor sint explicabo voluptates!</span>
</div>
<div class="contacts">
    <div class="contact-type">
     <span class="footer-svg" v-html="getSvg('phone')"></span>
     <span>+1-525-698-5255</span>
    </div>
    <div class="contact-type">
     <span class="footer-svg" v-html="getSvg('mail')"></span>
     <span>dor.nadav@gmail.com</span>
    </div>
</div>
<div class="about-us">
    <p>About-us</p>
    <p>Jobs</p>
    <p>Press</p>
    <p>blogs</p>
</div>
<div class="privacy-terms">
    <p>contact-us</p>
    <p>Privacy</p>
    <p>Trems</p>
</div>
<div class="social-icons">  
</div>

</section>
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