<template>
	<div>
      <section id="team" class="team section-bg">

        <!-- <section id="client" class="services section-bg"> -->
         <div class="container" align="">

            <div class="section-title">
               <span>Our Happy Client</span>
                  <h2>Our Happy Client</h2>
                     <p>Some of the amazing clients we’ve worked with</p>
            </div>

            <div class="partner-logo" align="center" v-if="clients.length > 0">
               <carousel class=" " :items="5" :nav="false"  :autoplay="true" :dots="false" :loop="true">            
                  <div class="logo-item" v-for="itemClient in clients" :key="itemClient.id">
          <!-- <div class="col-12 text-center" align="center"> -->

                     
                     <div class="tablecell-inner">
                        <!-- <img  alt="" src="img/logo-carousel/logo-1.png"/> -->
                        <img v-bind:src="itemClient.logo" alt="" />


                     </div>
                  
                     <!-- <p>{{ itemClient.name}} </p> -->
                  <!-- </div> -->
                  </div>
						
               </carousel>       
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
import carousel from "vue-owl-carousel";
import axios from 'axios';
export default {
  name: "Client",
  components: {
    carousel,
  },
  data() {
     return {
        clients: []
     };
  },
  mounted() {
     axios
         .get('http://localhost:8000/api/clients')
         .then(response => {
               this.clients = response.data.data
         }) .catch(err => (console.log(err)));
         
  }
};
</script>

<style scoped>
.photo-item {
  width: 1000px;
  height: 200px;
}

/*---------------------
  Partner Logo
-----------------------*/

.partner-logo {
  /* background: #303030; */
  /* background: #acacac; */
  padding: 20px 0;
}


.logo-carousel .logo-item {
  display: table;
}

.logo-carousel .logo-item .tablecell-inner {
  display: table-cell;
  /* height: 20px; */
  vertical-align: middle;
}

.owl-carousel .owl-item img {
  display: block;
  width: auto;
}
</style>