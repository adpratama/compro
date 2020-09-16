<template>
    <div>
        <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <span>Portfolio</span>
          <h2>Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div class="row" >
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" v-if="portfolio.length > 0">

          <div class="col-lg-4 col-md-6 portfolio-item " v-for="itemPortfolio in portfolio" :key="itemPortfolio.id">
            <img v-bind:src="itemPortfolio.galleries[0].photo" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ itemPortfolio.name}} </h4>
              <p>{{ itemPortfolio.category}} </p>
              <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a> 
              <!-- <router-link :to="`/details/${itemPortfolio.slug} ` " exact="" class="details-link" title="More Details"><i class="bx bx-link"/></router-link> -->
              <!-- <router-link :to="{ name: 'slug', params: { slug: itemPortfolio.slug}} " exact="" class="details-link" title="More Details"><i class="bx bx-link"/></router-link> -->
              <!-- <a href="portfolio-details.html" class="details-link" title="More Details"></a> -->
              <router-link class="details-link" exact="" title="More Details"
                :to="{ name: 'Details', params: { id: itemPortfolio.id } }"
               
                > <i class="bx bx-link"/>
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Isi',
    components: {

    },
    data() {
      return {
        portfolio: [],
        portfolioId: this.$route.params.id
      };
    },
    mounted() {
      axios
        .get('http://localhost:8000/api/portfolio')
        .then(response => {
          this.portfolio = response.data.data.data
        }) .catch(err => (console.log(err)));
    }
}
</script>