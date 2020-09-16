<template>
  <div class="about">
    <Header />
    <Intro />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import Team from '@/components/about/Team.vue'
import Intro from '@/components/about/Intro.vue'

export default {
  name: 'About',
  components: {
    Header,
    Intro,
    // Team,
    Footer

  }
}
</script>
