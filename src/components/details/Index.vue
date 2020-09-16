<template>
    <div>
         <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details" >
      <div class="container" v-for="itemPortfolio in details" :key="itemPortfolio.id" >

        <div class="portfolio-details-container">

          <div class=" portfolio-details-carousel" >
            <!-- <carousel :nav="false"  :autoplay="true" :dots="false" :loop="true"> -->
            <!-- <img v-bind:src="itemPortfolio.galleries[0].photo" class="img-fluid" alt=""> -->

            <!-- <img src="img/portfolio/portfolio-details-1.jpg" class="img-fluid" alt=""> -->
            <!-- <img src="img/portfolio/portfolio-details-2.jpg" class="img-fluid" alt="">
            <img src="img/portfolio/portfolio-details-3.jpg" class="img-fluid" alt="">
            <img src="img/portfolio/portfolio-details-1.jpg" class="img-fluid" alt="">
            <img src="img/portfolio/portfolio-details-2.jpg" class="img-fluid" alt="">
            <img src="img/portfolio/portfolio-details-3.jpg" class="img-fluid" alt="">
            </carousel> -->

          </div>

          <div class="portfolio-info">
            <h4>{{itemPortfolio.name}} </h4>
            <ul>
              <li><strong>Category</strong>: {{ details.category}}</li>
              <li><strong>Client</strong>: ASU Company</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong>: <a href="#">{{ itemPortfolio.link}} </a></li>
            </ul>
          </div>

        </div>

        <div class="portfolio-description">
          <h2>{{ itemPortfolio.name}} </h2>
          <p>
            {{ itemPortfolio.description}}
          </p>
        </div>

      </div>
    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->
    </div>
</template>

<script>
// import carousel from 'vue-owl-carousel'
import axios from 'axios';


export default {
    name: 'Index',
    components: {
      // carousel
    },
    data() {
      return {
        id: this.$route.params.id,
        details: []
      };
      // return {};
    },
    props: {
      slug: {
        id: String,
        // required: true
      }
    },
    mounted(id) {
      const url = "http://localhost:8000/api/portfolio";
      axios
        .get(`${url}?id=${id}` )

        .then(response => {
          this.details = response.data.data
        }) .catch(err => (console.log(err)));
      // axios
      //   .get('http://localhost:8000/api/portfolio' . 
      //       params, {
      //         id: 'itemPortfolio.id',
      //       })
      //   .then(response => {
      //     this.portfolioId = response.data.data.data
      //   }) .catch(err => (console.log(err)));
    }
}
</script>