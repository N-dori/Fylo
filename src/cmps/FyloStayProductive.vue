<template>
<section class="stay-productive-container">
      <img src="../assets/img/illustration-stay-productive.png">
     <div class="stay-productive-info">
      <h2>Stay productive,  wherever you are</h2>
      <p>never let location be an issue when accessing your files . fylo has you covered for all your files storage needs</p>
      <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
      <div class="action-link"><a>See how Fylo works</a><span  v-html="getSvg('greenArrow')"></span></div>
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