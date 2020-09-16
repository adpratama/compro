<template>
    <div>
        <IntroAwal />
        <IntroAkhir />
    </div>
</template>

<script>
import IntroAwal from '@/components/about/IntroAwal'
import IntroAkhir from '@/components/about/IntroAkhir'
export default {
    name: 'Intro',
    components: {
      IntroAwal,
      IntroAkhir
    }
}
</script>