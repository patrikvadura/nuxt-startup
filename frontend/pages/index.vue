<template>
  <div class="homepage">
    <CookieControl :locale="$i18n.locale" />

    <Hero />

    <ProductSlider />

    <HomepageFeatures />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('~/components/hero/HeroVideo'),
    ProductSlider: () => import('~/components/homepage/ProductSlider'),
    HomepageFeatures: () => import('~/components/homepage/HomepageFeatures')
  },

  data () {
    return {
      title: 'Výroba armatur z nerezové oceli | NiobFluid'
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Společnost NIOB FLUID s.r.o. je českým výrobcem armatur z nerezových ocelí pro potravinářský, chemický a farmaceutický průmysl. Výroba potravinářských ...'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.homepage {
  padding: 0;
}
</style>
