<template>
<section class="main-services-container">
<div class="main-services">

    <div class="service-card1">
    <div  v-html="getSvg('accessAnywhere')"></div>
    <h3>Access your files, anywhere</h3>
    <p>2-factor authentication and user-controlled encryption are just a couple of the security features allow to help secure your files</p>
    </div>
    <div class="service-card2">
    <div  v-html="getSvg('security')"></div>
    <h3> Security you can trust</h3>
    <p>The ability to use a smartphone , tablet, or computer to access your account means your files follow you everywhere.</p>
    </div>
    <div class="service-card3">
    <div  v-html="getSvg('collaboration')"></div>
        <h3>Real-time collaboration </h3>
        <p>Securely share files and folders with friends ,family and colleagues for live collaboration. No email attachments required</p>
    </div>
    <div class="service-card4">
    <div  v-html="getSvg('storeAnyFile')"></div>
        <h3>Store any type of file</h3>
<p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared</p>
    </div>
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