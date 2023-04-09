<template>
<h2>Get early access today</h2>
<p>it only takes a minute to sign up and our free starter tier is extremely generous. if you have any qesetions, our support team would be happy to help you</p>
<input type="email">
<button>Get Started for free</button>
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