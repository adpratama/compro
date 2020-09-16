<template>
    <div class="details">
        <Header />
        <Index />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Index from '@/components/details/Index.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Details',
    components: {
        Header,
        Index,
        Footer
    }
}
</script>