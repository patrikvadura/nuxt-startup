<template>
  <div>
    <HeroBasic
      image="niob_building_foto"
      :title="$t('contact.title')"
    />

    <b-container class="contact">
      <ContactForm />

      <ContactAddress class="mt-10" />
    </b-container>

    <Gmaps />
  </div>
</template>

<script>
export default {
  components: {
    ContactForm: () => import('~/components/contact/ContactForm'),
    ContactAddress: () => import('~/components/contact/ContactAddress'),
    Gmaps: () => import('~/components/contact/Gmaps'),
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    }
  },

  head () {
    return {
      title: this.$t('contact.metaTitle') + ' | NIOB FLUID s.r.o.',
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
  padding: $spacer-xl 0;
}
</style>
