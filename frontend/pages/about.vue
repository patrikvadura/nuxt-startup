<template>
  <div>
    <HeroBasic
      image="niob_building_foto"
      :title="$t('contact.title')"
    />

    <b-container class="contact d-flex justify-content-center">
      <ContactForm />
    </b-container>

    <Gmaps />
  </div>
</template>

<script>
export default {
  components: {
    ContactForm: () => import('~/components/contact/ContactForm'),
    Gmaps: () => import('~/components/contact/Gmaps'),
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  data () {
    return {
      title: 'Kontakt | STUDIO 5'
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Máte otázky na členy našeho týmu, nebo si chcete domluvit nezávaznou schůzku u šálku kávy? Napište nám, zavolejte nbeo se stavte přímo za námi do studia.'
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
