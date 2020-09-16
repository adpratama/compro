<template>
    <div>
        <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title">
          <span>Our Team</span>
          <h2>Our Team</h2>
          <p>Orang dibalik layar pratama.com</p>
        </div>

        <div class="row" align="center" v-if="teams.length >0">
          <!-- <carousel class=" " :items="3" :nav="false"  :autoplay="true" :dots="false">             -->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" v-for="itemTeam in teams" :key="itemTeam.id">
            <div class="member">
              <img v-bind:src="itemTeam.photo" alt="" class="photo-team">
              <h4>{{ itemTeam.name}} </h4>
              <span>{{ itemTeam.role}} </span>
              <!-- <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
              </p> -->
              <!-- <div class="social">
                <a href=""><i class="icofont-twitter"></i></a>
                <a href=""><i class="icofont-facebook"></i></a>
                <a href=""><i class="icofont-instagram"></i></a>
                <a href=""><i class="icofont-linkedin"></i></a>
              </div> -->
            </div>
          </div>
          <!-- </carousel> -->
        </div>
        <div class="col-lg-12 partner-logo" align="center" v-else>
               <br>
               <p>Data tidak tersedia</p>
            </div>
      </div>
    </section>
    </div>
</template>

<script>
// import carousel from 'vue-owl-carousel';
import axios from 'axios';
export default {
    name: 'IntroAkhir',
    components: {
      // carousel
    },
    data() {
      return {
        teams: []
      };
    },
    mounted() {
      axios
        .get('http://localhost:8000/api/teams')
        .then(response => {
          this.teams = response.data.data
        }) .catch(err => (console.log(err)));
    }
}
</script>
<style scoped>
  .photo-team {
    width: 310px;
    height: 310px;
  }
</style>