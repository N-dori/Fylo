<template>
<section class="review-cards">
    <div class="review-card">
    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine </p>
    <div class="user-details">
    <img src="../assets/img/profile-1.jpg">
    <span>Statish Pastel</span>
    <span> founder & CEO Huddle</span>
    </div>
    </div>
    <div class="review-card">
    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine </p>
    <div class="user-details">
    <img src="../assets/img/profile-2.jpg">
    <span>Statish Pastel</span>
    <span> founder & CEO Huddle</span>
    </div>
    </div>
    <div class="review-card">
    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine </p>
    <div class="user-details">
    <img src="../assets/img/profile-3.jpg">
    <span>Statish Pastel</span>
    <span> founder & CEO Huddle</span>
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