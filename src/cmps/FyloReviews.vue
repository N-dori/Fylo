<template>
<section class="review-cards">
  <img class="img-quotes" src="../assets/img/bg-quotes.png">
    <div class="review-card">
    <p class="txt">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine </p>
    <div class="user-details">
    <img src="../assets/img/profile-1.jpg">
    <div class="user-name">
    <p class="full-name">Statish Pastel</p>
    <p class="pos"> founder & CEO Huddle</p>
    </div>
    </div>
    </div>
    <div class="review-card">
    <p class="txt">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine </p>
    <div class="user-details">
    <img src="../assets/img/profile-2.jpg">
    <div class="user-name">
    <p class="full-name">Shlomo Avazi</p>
    <p class="pos"> founder & CEO Huddle</p>
    </div>
    </div>
    </div>
    <div class="review-card">
    <p class="txt">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine </p>
    <div class="user-details">
    <img src="../assets/img/profile-3.jpg">
    <div class="user-name">
    <p class="full-name">Baruch Levi</p>
    <p class="pos"> founder & CEO Huddle</p>
    </div>
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