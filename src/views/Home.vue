<template>
  <section class="main-container">
    <div class="intro">
      <img class="illustration-intro-img" src="../assets/img/illustration-intro.png">
      <h1>All your files in one secure location,
        accessible anywhere. </h1>
        <div class="intro-subtext">
        <p>Fylo stores all your most important files in one secure location. 
          Access them whereever you need, share and collaborate with 
          friends family, and co-workers.
        </p>
        </div>
        <button>Get Started</button>
    </div>
        <FyloServices/>
        <FyloStayProductive/>
        <FyloReviews/>
        <FyloGetAccsess/>
        <AppFooter/>
        
  </section>

  
</template>

<script>
import FyloServices from '../cmps/FyloServices.vue'
import FyloStayProductive from '../cmps/FyloStayProductive.vue'
import FyloReviews from '../cmps/FyloReviews.vue'
import FyloGetAccsess from '../cmps/FyloGetAccsess.vue'
import AppFooter from '../cmps/AppFooter.vue'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  },components:{
    FyloServices,
    FyloStayProductive,
    FyloReviews,
    FyloGetAccsess,
    AppFooter,
  }
  
}
</script>
