<template>
  <div>
    <HeroBasic
      image="terms-and-conditions"
      :title="$t('terms-and-conditions.title')"
    />

    <b-container class="contact d-flex justify-content-center">
      <b-row>
        <b-col>
          <p>{{ $t('terms-and-conditions.description') }}</p>
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

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    }
  },

  head () {
    return {
      title: this.$t('terms-and-conditions.title') + ' | NIOB FLUID s.r.o.',
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
.contact {
  padding: 4rem 0;
}
</style>
