<template>
  <div>
    <HeroBasicVideo
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="post.title"
    />

    <b-container class="contact d-flex justify-content-center">
      {{ post.content }}
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasicVideo: () => import('~/components/hero/HeroBasicVideo')
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/products.json'),
      en: require('~/locales/en/products.json')
    }
  },

  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    post () {
      return this.$t('products.posts').find(post => post.id === this.id)
    }
  },

  validate ({ params, store }) {
    return store.state.locales.includes(
      params.lang.toLowerCase()
    )
  },
  beforeCreate () {
    const lang = this.$route.params.lang.toLowerCase()
    this.$store.commit('SET_LANG', lang)
    this.component = () => import(`~/pages/index`)
  }
}
</script>

<style lang="scss">
.contact {
  padding: 4rem 0;
}
</style>
