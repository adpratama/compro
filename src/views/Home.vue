<template>
  <div class="home">
      <Header />
      <Hero />
      <About />
      <Client />
      <Contact />
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Client from '@/components/Client.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    About,
    Client,
    Contact,
    Footer
  }
}
</script>
