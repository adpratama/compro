<template>
  <div class="portfolio">
    <Header />
    <Intro />
    <Isi />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Intro from '@/components/portfolio/Intro.vue'
import Isi from '@/components/portfolio/Isi.vue'

export default {
  name: 'Portfolio',
  components: {
    Header,
    Footer,
    Intro,
    Isi
  }
}
</script>
