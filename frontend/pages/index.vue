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

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    }
  },

  head () {
    return {
      title: this.$t('global.metaTitle') + ' | NIOB FLUID s.r.o.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description + '...'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  padding: 0;
}
</style>
