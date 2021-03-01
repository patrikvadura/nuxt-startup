<template>
  <div>
    <HeroBasic
      image="terms-and-conditions"
      :title="$t('terms.title')"
    />

    <b-container class="terms d-flex justify-content-center">
      <b-row>
        <b-col>
          <div v-html="$t('terms.content')" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/terms.json'),
      en: require('~/locales/en/terms.json')
    }
  },

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    }
  },

  head () {
    return {
      title: this.$t('terms.title') + ' | NIOB FLUID s.r.o.',
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
.terms {
  padding: 4rem 0;

  ::v-deep h2 {
    padding-top: 3rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: $primary;

    &:first-child {
      padding-top: 0;
    }
  }

  ::v-deep p,
  ::v-deep ol li {
    text-align: justify;
  }
}
</style>
